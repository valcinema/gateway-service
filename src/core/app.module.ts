import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getPassportConfig } from '@src/core/config';
import { AccountModule } from '@src/modules/account/account.module';
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
		AuthModule,
		AccountModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
