import * as Yup from 'yup';

export const UserSchema = Yup.object({
    name: Yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(20),
    username:Yup
        .string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters")
        .max(20),
    email: Yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
    password: Yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(20)
})