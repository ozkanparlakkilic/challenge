export default interface IUser {
    _id: string;
    fullname: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    friends: IUser['_id'] | IUser;
    token: string;
    totalPoint: number;
}
