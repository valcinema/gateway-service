import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class InitEmailChangeRequest {
	@ApiProperty({
		example: 'val.email@test.com'
	})
	@IsNotEmpty()
	@IsEmail()
	public email!: string;
}
