/**
 *  @description Service class
 * Business Logic Layer
 */

import { ApiError } from "../../../middlewares/error.middleware";
import { generateAccessToken } from "../../../utils/jwt";
import { comparePassword, hashPassword } from "../../../utils/password";
import { LoginDTO, RegisterDTO } from "../interfaces/auth.types";
import { AuthRepository } from "../repository/auth.repository";

/**
 * TEMP MOCK STORE
 * We'll replace this with DB (Mongo / PostgreSQL)
 */
const users: any[] = [];

export const registerUser = async (data: RegisterDTO) => {
    const existingUsers = await AuthRepository.findByEmail(data.email);

    if (existingUsers) throw new ApiError(409, 'Email already exists.');
    
    console.log('data=======>', data);

    const hashedPassword = await hashPassword(data.password);
    const newUser = {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role || 'user',
    };

    const createdUser = await AuthRepository.createUser(newUser);

    return {
        id: createdUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
    };
};

export const loginUser = async (data: LoginDTO) => {
    try {

        const user = await AuthRepository.findByEmail(data.email);
        console.log('user ========>', user);
        if (!user || !user.password) throw new ApiError(401, 'Invalid Credentials.');

        const matchPassword = await comparePassword(data.password, user.password);
        if (!matchPassword) throw new ApiError(401, 'Invalid Credentials.');

        const token = generateAccessToken({
            userId: user.id,
            role: user.role
        });

        return { token };
    } catch (error: any) {
        const statusCode = error?.status || error?.statusCode || 400;
        throw new ApiError(statusCode, error?.message || 'Something went wrong.');
    }
};

export const __resetUsers = () => {
    users.length = 0;
};

