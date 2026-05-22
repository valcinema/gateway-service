import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class ConfirmEmailChangeRequest {
	@ApiProperty({
		example: 'val.email@test.com'
	})
	@IsNotEmpty()
	@IsEmail()
	public email!: string;

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@IsNumberString()
	@Length(6, 6)
	public code!: string;
}
