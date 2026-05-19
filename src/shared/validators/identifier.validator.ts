import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator';

import { SendOtpRequest } from '../../modules/auth/dto';

@ValidatorConstraint({ name: 'IdentifierValidator', async: false })
export class IdentifierValidator implements ValidatorConstraintInterface {
	public validate(value: string, args: ValidationArguments): boolean {
		const object = args.object as SendOtpRequest;

		if (object.type === 'email') {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return typeof value === 'string' && emailRegex.test(value);
		} else if (object.type === 'phone') {
			const phoneRegex = /^\+?[1-9]\d{1,14}$/;
			return typeof value === 'string' && phoneRegex.test(value);
		}

		return false;
	}

	public defaultMessage(args: ValidationArguments): string {
		const object = args.object as SendOtpRequest;

		if (object.type === 'email') {
			return 'identifier must be a valid email address';
		}
		if (object.type === 'phone') {
			return 'identifier must be a valid phone number';
		}

		return 'Invalid identifier';
	}
}
