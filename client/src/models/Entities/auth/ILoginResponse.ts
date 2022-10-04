export default interface ILoginResponse {
    userId: string | null;
    accessToken: string | null;
    refreshToken: string | null;
}
