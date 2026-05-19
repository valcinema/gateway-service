import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	Res
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation } from '@nestjs/swagger';
import { AuthClientGrpc } from '@src/modules/auth/auth.grpc';
import type { Response } from 'express';
import { lastValueFrom } from 'rxjs';

import { SendOtpRequest, VerifyOtpRequest } from './dto';

@Controller('auth')
export class AuthController {
	public constructor(
		private readonly client: AuthClientGrpc,
		private readonly configService: ConfigService
	) {}

	@ApiOperation({
		summary: 'Send otp code',
		description:
			'Sends a varification code to the user phone number or email'
	})
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	public async sendOtp(@Body() dto: SendOtpRequest) {
		return this.client.sendOtp(dto);
	}

	@ApiOperation({
		summary: 'Verify otp code',
		description:
			'Verifies the code sent ot the user phone number or email and returns access token'
	})
	@Post('otp/verify')
	@HttpCode(HttpStatus.OK)
	public async verifyOtp(
		@Body() dto: VerifyOtpRequest,
		@Res({ passthrough: true }) res: Response
	) {
		const { accessToken, refreshToken } = await lastValueFrom(
			this.client.verifyOtp(dto)
		);

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure: this.configService.get('NODE_ENV') !== 'development',
			domain: this.configService.get<string>('COOKIES_DOMAIN') || undefined,
			sameSite: 'lax',
			maxAge: 30 * 24 * 60 * 60 * 1000
		});

		return { accessToken };
	}
}
