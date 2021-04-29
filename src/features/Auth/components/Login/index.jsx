import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
    onCloseDialog: PropTypes.func,
};

function Login({ onCloseDialog = null }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    async function handleSubmit(values) {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // do something when register successfully
            console.log("New user", user);

            // close dialog
            if (onCloseDialog) onCloseDialog();
        } catch (error) {
            console.log("Failed to login", error);
            enqueueSnackbar(error.message, { variant: "error" });
        }
    }

    return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
