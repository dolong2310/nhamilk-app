import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../../components/formControls/InputField";
import PasswordField from "../../../../components/formControls/PasswordField";
import { LinearProgress, makeStyles } from "@material-ui/core";

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    progress: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
}));

function LoginForm({ onSubmit = null }) {
    const classes = useStyles();
    let schema = yup.object().shape({
        identifier: yup
            .string()
            .email()
            .required("Vui lòng nhập email của bạn"),
        password: yup.string().required("Vui lòng nhập mật khẩu của bạn"),
    });
    const form = useForm({
        defaultValues: {
            identifier: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    async function handleSubmit(formValues) {
        if (!onSubmit) return;
        await onSubmit(formValues);
    }

    const { isSubmitting } = form.formState;

    return (
        <>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <div className="logging-form register-form">
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="form"
                >
                    <h3 className="heading">Thành viên đăng nhập</h3>

                    <div className="form-group">
                        <InputField
                            name="identifier"
                            label="* Địa chỉ Email"
                            form={form}
                        />
                    </div>

                    <div className="form-group">
                        <PasswordField
                            name="password"
                            label="* Mật khẩu"
                            form={form}
                        />
                    </div>

                    <button
                        disabled={isSubmitting}
                        className="btn btn-primary lg"
                        type="submit"
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
