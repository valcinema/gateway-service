import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getPassportConfig } from '@src/core/config';
import { PassportModule } from '@valcinema/passport';

import { AuthModule } from '../modules/auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		PassportModule.registerAsync({
			useFactory: getPassportConfig,
			inject: [ConfigService]
		}),
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
