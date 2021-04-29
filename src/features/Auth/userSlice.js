import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-keys";

export const register = createAsyncThunk("user/register", async (payload) => {
    // Call Api to register
    const data = await userApi.register(payload);

    // Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
    // Call Api to login
    const data = await userApi.login(payload);

    // Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            // Clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);

            state.current = {};
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            // action.payload is result of register (create async thunk)
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            // action.payload is result of login (create async thunk)
            state.current = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
