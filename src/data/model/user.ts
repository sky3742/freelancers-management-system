import { InferType, date, object, string } from "yup";

export const UserSchema = object({
	id: string().uuid(),
	username: string().required(),
	mail: string().email().required(),
	phoneNumber: string()
		.matches(/^(60|0)(1|11)\d{8}$/g, "Please enter a valid phone number")
		.required(),
	skillsets: string(),
	hobby: string(),
	createdAt: date(),
	updatedAt: date()
});

export type User = InferType<typeof UserSchema>;
