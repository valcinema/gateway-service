import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	public getHello() {
		return { message: 'Welcome to ValCinema API!' };
	}

	public health() {
		return {
			status: 'ok',
			date: new Date().toISOString()
		};
	}
}
