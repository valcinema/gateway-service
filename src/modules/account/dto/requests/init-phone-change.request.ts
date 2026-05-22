import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class InitPhoneChangeRequest {
	@ApiProperty({
		example: '+380000000000'
	})
	@IsNotEmpty()
	@Matches(/^\+?[1-9]\d{1,14}$/)
	public phone!: string;
}
