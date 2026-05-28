import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TelegramVerifyRequest {
	@ApiProperty({
		example: 'eyJpZCI6MTM2NTQ3MTkyMiwiZmlyc3RfbmFtZSI6IlZhbGVudHluIiwib...'
	})
	@IsString()
	@IsNotEmpty()
	public tgAuthResult!: string;
}
