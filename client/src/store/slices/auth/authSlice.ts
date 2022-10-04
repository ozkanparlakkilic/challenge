import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    login as userLogin,
    refreshAccessToken as newAccessTokenWithRefreshToken,
} from '../../../services/auth-services/authServices';
import { IAccessToken, ILoginResponse, IUser } from '../../../models';
import { IAuthState } from '../../types/authTypes';
import { RootState } from '../../store';
import { loadStorage } from '../../../utils';

const initialState: IAuthState = {
    user: loadStorage<IUser>('user') ?? null,
    userId: loadStorage<string>('userId') ?? null,
    accessToken: loadStorage<string>('accessToken') ?? null,
    refreshToken: loadStorage<string>('refreshToken') ?? null,
    isSuccess: loadStorage<boolean>('isSuccess') ?? false,
    errorMessage: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async (data: { username: string; password: string }, { rejectWithValue }) => {
        const { username, password } = data;
        try {
            const response = await userLogin(username, password);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    },
);

export const refreshAccessToken = createAsyncThunk(
    'auth/refresh',
    async (data: { refreshToken: string | null }, { rejectWithValue }) => {
        const { refreshToken } = data;
        try {
            const response = await newAccessTokenWithRefreshToken(refreshToken);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout(state: IAuthState) {
            state.userId = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.user = null;
            state.isSuccess = false;
            state.errorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
            state.userId = action.payload.userId;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isSuccess = true;
            state.errorMessage = '';
        });
        builder.addCase(login.rejected, (state, action) => {
            state.errorMessage = action.payload as string;
            state.isSuccess = false;
        });
        builder.addCase(refreshAccessToken.fulfilled, (state, action: PayloadAction<IAccessToken>) => {
            state.accessToken = action.payload.accessToken;
        });
        builder.addCase(refreshAccessToken.rejected, (state, action) => {
            state.errorMessage = action.payload as string;
            state.isSuccess = false;
        });
    },
});

export const { logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectUserId = (state: RootState) => state.auth.userId;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectIsSuccess = (state: RootState) => state.auth.isSuccess;
export const selectErrorMessage = (state: RootState) => state.auth.errorMessage;

export default authSlice.reducer;
