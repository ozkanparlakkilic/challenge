import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IAccessToken, IRefreshToken } from '../../@types/token/tokenTypes';

const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const comparePassword = (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

const generateAccessToken = async (userId: string): Promise<IAccessToken> => {
    const accessToken = await jwt.sign({ userId }, `${process.env.ACCESS_TOKEN_SECRET}`, {
        expiresIn: '1h',
    });
    return { accessToken };
};

const generateRefreshToken = async (userId: string): Promise<IRefreshToken> => {
    const refreshToken = await jwt.sign({ userId }, `${process.env.REFRESH_TOKEN_SECRET}`, {
        expiresIn: '60d',
    });
    return { refreshToken };
};

export { hashPassword, comparePassword, generateAccessToken, generateRefreshToken };
