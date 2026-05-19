import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthClientGrpc } from '@src/modules/auth/auth.grpc';
import { VerifyOtpResponse } from '@valcinema/contracts/gen/auth';

import { SendOtpRequest, VerifyOtpRequest } from './dto';

@Controller('auth')
export class AuthController {
	public constructor(private readonly client: AuthClientGrpc) {}

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
	public async verifyOtp(@Body() dto: VerifyOtpRequest) {
		return this.client.verifyOtp(dto);
	}
}
