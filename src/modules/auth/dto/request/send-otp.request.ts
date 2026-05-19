import { ApiProperty } from '@nestjs/swagger';
import { IdentifierValidator } from '@src/shared/validators';
import { IsEnum, IsString, Validate } from 'class-validator';

export class SendOtpRequest {
	@ApiProperty({
		example: '+380000000000'
	})
	@IsString()
	@Validate(IdentifierValidator)
	public identifier: string;

	@ApiProperty({
		example: 'phone',
		enum: ['phone', 'email']
	})
	@IsEnum(['phone', 'email'])
	public type: 'phone' | 'email';
}
