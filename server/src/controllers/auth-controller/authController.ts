import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { IAccessToken, IRefreshToken } from '../../@types/token/tokenTypes';
import { ACCESS_TOKEN_COOKIE_OPTIONS, REFRESH_TOKEN_COOKIE_OPTIONS, TOKEN_ACCESS_KEYS } from '../../constants/contants';
import {
    createUser,
    findUserByEmailOrUsername,
    findUserByUsername,
} from '../../data-access/auth-data-access/authDataAccess';
import { IUser } from '../../models/userModel';
import {
    comparePassword,
    generateAccessToken,
    generateRefreshToken,
    hashPassword,
} from '../../utils/auth-utils/authUtils';

const registerController = asyncHandler(async (req, res) => {
    const { body } = req;
    const { email, password, username } = body;

    try {
        const user: IUser | null = await findUserByEmailOrUsername(email, username);
        if (user) {
            res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword: string = await hashPassword(password);
        const newUser: IUser = await createUser({ ...body, password: hashedPassword });
        res.status(201).json({ user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

const loginController = asyncHandler(async (req, res) => {
    const { body } = req;
    const { username, password } = body;
    const user: IUser | null = await findUserByUsername(username);

    if (!user) {
        res.status(400).json({ message: 'User not found' });
    } else {
        await comparePassword(password, user.password).catch(() => {
            res.status(400).json({ message: 'Invalid password' });
        });

        const { accessToken }: IAccessToken = await generateAccessToken(user._id.toString()).then(
            (response: IAccessToken) => {
                return response;
            },
        );

        const { refreshToken }: IRefreshToken = await generateRefreshToken(user._id.toString()).then(
            (response: IRefreshToken) => {
                return response;
            },
        );

        res.cookie(TOKEN_ACCESS_KEYS.USER_ACCESS_KEY, accessToken, ACCESS_TOKEN_COOKIE_OPTIONS);
        res.cookie(TOKEN_ACCESS_KEYS.USER_REFRESH_KEY, refreshToken, REFRESH_TOKEN_COOKIE_OPTIONS);

        res.status(200).json({
            userId: user._id.toString(),
            accessToken,
            refreshToken,
        });
    }
});

const tokenController = asyncHandler(async (req, res) => {
    const { body } = req;
    const { refreshToken } = body;

    if (refreshToken) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        jwt.verify(refreshToken, `${process.env.REFRESH_TOKEN_SECRET}`, async (err: any, userId: string) => {
            if (err) {
                return res.status(401).send({ message: 'Token is not valid' });
            }
            const { accessToken } = await generateAccessToken(userId).then((response: IAccessToken) => {
                return response;
            });

            return res.status(200).json({ accessToken: accessToken });
        });
    } else {
        res.status(401).send({
            message: 'Auth failed',
        });
    }
});

export { registerController, loginController, tokenController };
