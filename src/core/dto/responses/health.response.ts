import { ApiProperty } from '@nestjs/swagger';

export class HealthResponse {
	@ApiProperty({
		example: 'ok'
	})
	public status: string;

	@ApiProperty({
		example: '2026-05-06T16:30:00.000Z'
	})
	public timestamp: string;
}
