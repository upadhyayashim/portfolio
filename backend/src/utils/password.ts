import bcrypt from 'bcrypt';
import { config } from '../config';

export const hashPassword = (password: string) =>
    bcrypt.hash(password, config.SALT_ROUNDS);

export const comparePassword = (password: string, hash: string) =>
    bcrypt.compare(password, hash);
