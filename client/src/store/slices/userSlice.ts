import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../types/userTypes';
import { IUser } from '../../@types';
import { login } from '../../services/userServices/userServices';
import { loadStorage, setAuthHeader } from '../../utils';

const initialState: IUserState = {
    data: null,
    loading: false,
    errorMessage: '',
};

export const userLogin = createAsyncThunk(
    'users/login',
    async (data: { username: string; password: string }, { rejectWithValue }) => {
        const { username, password } = data;
        try {
            const response = await login(username, password);
            console.log(response);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setData: (state) => {
            state.data = loadStorage<IUser | null>('user');
            setAuthHeader(state.data?.token || undefined);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            state.loading = true;
            state.errorMessage = '';
        });
        builder.addCase(userLogin.fulfilled, (state, action: PayloadAction<IUser>) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload as string;
        });
    },
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;
