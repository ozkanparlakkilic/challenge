import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ITokenType } from '../../@types';

const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const comparePassword = (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

const generateTokens = async (userId: string): Promise<ITokenType> => {
    const accessToken = await jwt.sign({ userId }, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: '30s',
    });

    const refreshToken = await jwt.sign({ userId }, `${process.env.REFRESH_TOKEN_SECRET}`, {
        expiresIn: '60d',
    });
    return { accessToken, refreshToken };
};

export { hashPassword, comparePassword, generateTokens };
