import { ConfigService } from '@nestjs/config';
import { PassportOptions } from '@valcinema/passport';

export function getPassportConfig(
	configService: ConfigService
): PassportOptions {
	return {
		secretKey: configService.getOrThrow('PASSPORT_SECRET_KEY')
	};
}
