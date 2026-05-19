import { ApiProperty } from '@nestjs/swagger';
import { IdentifierValidator } from '@src/shared/validators';
import {
	IsEnum,
	IsNotEmpty,
	IsNumberString,
	IsString,
	Length,
	Validate
} from 'class-validator';

export class VerifyOtpRequest {
	@ApiProperty({
		example: '+380000000000'
	})
	@IsString()
	@Validate(IdentifierValidator)
	public identifier: string;

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@IsNumberString()
	@Length(6, 6)
	public code: string;

	@ApiProperty({
		example: 'phone',
		enum: ['phone', 'email']
	})
	@IsEnum(['phone', 'email'])
	public type: 'phone' | 'email';
}
