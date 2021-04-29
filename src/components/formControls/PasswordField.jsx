import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {};

function PasswordField(props) {
    const [showPassword, setShowPassword] = useState(false);
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name];

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <div className={hasError ? "form-group invalid" : "form-group"}>
            <InputLabel htmlFor={name} className="form-label">
                {label}
            </InputLabel>
            <div className="form-controller">
                <FormControl error={hasError} fullWidth>
                    <Controller
                        name={name}
                        control={form.control}
                        render={({ onChange, onBlur, value, name }) => (
                            <input
                                name={name}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                disabled={disabled}
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={toggleShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )}
                    />
                </FormControl>

                <FormHelperText error={hasError} className="form-message">
                    {errors[name]?.message}
                </FormHelperText>
            </div>
        </div>
    );
}

export default PasswordField;
