import mongoose, { Schema, Document } from 'mongoose';
export interface IUser extends Document {
    fullname: string;
    username: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    friends: Array<IUser['_id']>;
    matchPassword: (password: string) => boolean;
    totalPoint?: number;
}

const userSchema: Schema<IUser> = new Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true,
            },
        ],
        totalPoint: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model<IUser>('user', userSchema);

export default User;
