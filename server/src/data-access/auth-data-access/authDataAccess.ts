import User, { IUser } from '../../models/userModel';

const findUserByEmail = (email: string) => {
    return User.findOne({ email });
};

const findUserByUsername = (username: string) => {
    return User.findOne({ username });
};

const findUserByEmailOrUsername = (email: string, username: string) => {
    return User.findOne({ $or: [{ email: email }, { username: username }] });
};

const createUser = (data: IUser) => {
    return User.create(data);
};

export { findUserByEmail, findUserByUsername, findUserByEmailOrUsername, createUser };
