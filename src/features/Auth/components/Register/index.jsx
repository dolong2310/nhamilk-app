import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";

Register.propTypes = {
    onCloseDialog: PropTypes.func,
};

function Register({ onCloseDialog = null }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    async function handleSubmit(values) {
        try {
            // auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // do something when register successfully
            console.log("New user", user);

            // close dialog
            if (onCloseDialog) onCloseDialog();
            // show noti stack
            enqueueSnackbar("Register successfully", { variant: "success" });
        } catch (error) {
            console.log("Failed to register", error);
            enqueueSnackbar(error.message, { variant: "error" });
        }
    }

    // function handleSubmit(values) {
    //     console.log(values);
    // }

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
