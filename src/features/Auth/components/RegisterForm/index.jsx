import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../../components/formControls/InputField";
import PasswordField from "../../../../components/formControls/PasswordField";
import { LinearProgress, makeStyles } from "@material-ui/core";

RegisterForm.propTypes = {
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

function RegisterForm({ onSubmit = null }) {
    const classes = useStyles();
    let schema = yup.object().shape({
        fullname: yup.string().required("Vui lòng nhập đầy đủ họ tên"),
        email: yup.string().email().required("Vui lòng nhập email của bạn"),
        password: yup
            .string()
            .required("Vui lòng nhập mật khẩu của bạn")
            .min(6, "Vui lòng nhập ít nhất 6 ký tự"),
        retypePassword: yup
            .string()
            .required("Vui lòng xác nhận mật khẩu của bạn")
            .oneOf([yup.ref("password")], "Xác nhận mật khẩu không trùng khớp"),
        address: yup.string().required("Vui lòng nhập địa chỉ của bạn"),
        phone: yup
            .string()
            .required("Vui lòng nhập số điện thoại của bạn")
            .matches(new RegExp("[0-9]{9}"), "Vui lòng nhập ít nhất 9 chữ số"),
    });
    const form = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            password: "",
            retypePassword: "",
            address: "",
            phone: "",
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
                    <h3 className="heading">Thành viên đăng ký</h3>
                    <div className="form-group">
                        <InputField
                            name="fullname"
                            label="* Họ và tên"
                            form={form}
                        />
                    </div>

                    <div className="form-group">
                        <InputField
                            name="email"
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

                    <div className="form-group">
                        <PasswordField
                            name="retypePassword"
                            label="* Nhập lại mật khẩu"
                            form={form}
                        />
                    </div>

                    <div className="form-group">
                        <InputField
                            name="address"
                            label="* Địa chỉ"
                            form={form}
                        />
                    </div>

                    <div className="form-group">
                        <InputField
                            name="phone"
                            label="* Điện thoại"
                            form={form}
                        />
                    </div>
                    {/*
                <div className="form-group">
                    <label htmlFor="province" className="form-label">
                        * Tỉnh thành
                    </label>
                    <div className="form-controller">
                        <select id="province" name="province">
                            <option value>-- Tỉnh/TP --</option>
                            <option value="hcm">Hồ Chí Minh</option>
                            <option value="hn">Hà Nội</option>
                        </select>
                        <span className="form-message" / >
                    </div>
                </div> */}
                    <button
                        disabled={isSubmitting}
                        className="btn btn-primary lg"
                        type="submit"
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;
