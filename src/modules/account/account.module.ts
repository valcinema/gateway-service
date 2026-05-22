import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccountController } from '@src/modules/account/account.controller';
import { AccountClientGrpc } from '@src/modules/account/account.grpc';
import { PROTO_PATH } from '@valcinema/contracts';

@Module({
	imports: [
		ClientsModule.registerAsync([
			{
				name: 'ACCOUNT_PACKAGE',
				useFactory: (configService: ConfigService) => ({
					transport: Transport.GRPC,
					options: {
						package: 'account.v1',
						protoPath: PROTO_PATH.ACCOUNT,
						url: configService.getOrThrow<string>('AUTH_GRPC_URL')
					}
				}),
				inject: [ConfigService]
			}
		])
	],
	controllers: [AccountController],
	providers: [AccountClientGrpc],
	exports: [AccountClientGrpc]
})
export class AccountModule {}
