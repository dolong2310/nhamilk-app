import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name];

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

export default InputField;
