import asyncHandler from 'express-async-handler';
import { ITokenType } from '../../@types';
import {
    createUser,
    findUserByEmailOrUsername,
    findUserByUsername,
} from '../../data-access/auth-data-access/authDataAccess';
import { IUser } from '../../models/userModel';
import { comparePassword, generateTokens, hashPassword } from '../../utils/auth-utils/authUtils';

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

        await generateTokens(user._id.toString()).then((response: ITokenType) => {
            const { accessToken, refreshToken } = response;
            res.send({
                userId: user._id.toString(),
                accessToken,
                refreshToken,
            });
        });
    }
});

export { registerController, loginController };
