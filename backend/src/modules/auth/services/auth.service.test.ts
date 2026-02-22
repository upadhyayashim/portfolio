import { RegisterDTO } from "../interfaces/auth.types";
import { __resetUsers, loginUser, registerUser } from "./auth.service";
import * as passwordUtil from "../../../utils/password";
import * as jwtUtil from "../../../utils/jwt";

jest.mock('../../../utils/password');
jest.mock('../../../utils/jwt');

// /** Basic Unit testing */
// describe("Auth Service", () => {
//     const user: RegisterDTO = {
//         name: "Ashim",
//         email: "ashim@test.com",
//         password: "password123",
//         role: "admin",
//     };

//     it("should register user", async () => {
//         const result = await registerUser(user);

//         expect(result).toBeDefined();
//         expect(result?.email).toBe(user.email);
//         expect(result?.role).toBe(user.role);
//     })
// });


/** Unit testing */

describe("Auth Service", () => {
    beforeEach(() => {
        __resetUsers();
        jest.clearAllMocks();
    });

    describe("Register User", () => {
        it("should register user successfully", async () => {
            (passwordUtil.hashPassword as jest.Mock).mockResolvedValue('hashed123');

            const newUser: RegisterDTO = {
                name: 'Ashim',
                email: 'ashim@test.com',
                password: 'pass123',
                role: 'admin'
            };

            const registerResult = await registerUser(newUser);

            expect(registerResult).toEqual({
                id: expect.any(String),
                name: 'Ashim',
                email: 'ashim@test.com',
                role: 'admin'
            });

            expect(passwordUtil.hashPassword).toHaveBeenCalledWith('pass123');
        });

        it("should throw error if email exists", async () => {
            (passwordUtil.hashPassword as jest.Mock).mockResolvedValue('hashed123');

            const newUser: RegisterDTO = {
                name: 'Ashim',
                email: 'ashim@test.com',
                password: 'pass123',
                role: 'admin'
            };

            await registerUser(newUser);
            await expect(registerUser(newUser))
                .rejects.toThrow('Email already exists.');
        });
    });

    describe("login User", () => {
        it("should login successfully and return token", async () => {
            (passwordUtil.hashPassword as jest.Mock).mockResolvedValue('hashed123');
            (passwordUtil.comparePassword as jest.Mock).mockResolvedValue(true);
            (jwtUtil.generateAccessToken as jest.Mock).mockReturnValue('jwt-token');

            const newUser: RegisterDTO = {
                name: 'Ashim',
                email: 'ashim@test.com',
                password: 'pass123',
                role: 'admin'
            };

            await registerUser(newUser);
            const loginResult = await loginUser({ email: newUser.email, password: newUser.password });
            expect(loginResult).toEqual({ token: 'jwt-token' });
        });

        it('should throw error for invalid email', async () => {
            await expect(
              loginUser({ email: 'x@test.com', password: '123' })
            ).rejects.toThrow('Invalid Credentials.');
        });

        it('should throw error for invalid password', async () => {
            (passwordUtil.hashPassword as jest.Mock).mockResolvedValue('hashed123');
            (passwordUtil.comparePassword as jest.Mock).mockResolvedValue(false);
      
            await registerUser({
              name: 'Ashim',
              email: 'ashim@test.com',
              password: 'pass123',
              role: 'admin'
            });
      
            await expect(
              loginUser({ email: 'ashim@test.com', password: 'wrong' })
            ).rejects.toThrow('Invalid Credentials.');
        });
    });
});
