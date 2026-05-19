import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException
} from '@nestjs/common';
import { grpcToHttpStatus } from '@src/shared/utils';
import { Response } from 'express';

@Catch()
export class GrpcExceptionFilter implements ExceptionFilter {
	public catch(exception: any, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();

		if (this.isGrpcError(exception)) {
			const status = grpcToHttpStatus[exception.code] || 500;

			return response.status(status).json({
				statusCode: status,
				message: exception.details || 'gRPC error'
			});
		}

		if (exception instanceof HttpException) {
			const status = exception.getStatus();

			return response.status(status).json({
				statusCode: status,
				message: exception.message
			});
		}
	}

	private isGrpcError(exception: any) {
		return (
			typeof exception === 'object' &&
			'code' in exception &&
			'details' in exception
		);
	}
}
