import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

ProductSort.propTypes = {
    currentValue: PropTypes.string,
    onChange: PropTypes.func,
};

function ProductSort({ currentValue = "", onChange = null }) {
    // handle selection
    const options = [
        { value: "price:asc", label: "Thấp đến cao" },
        { value: "price:desc", label: "Cao đến thấp" },
    ];

    const selectStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            marginTop: "16px",
            width: "120px",
            border: "1px solid $grey-color-light",
            borderRadius: "20px",
            padding: "0 10px",
            marginRight: "20px",

            "&:hover": {
                borderColor: "unset",
                boxShadow: "none",
            },
        }),
        option: (styles) => {
            return {
                ...styles,
            };
        },
        indicatorSeparator: (styles) => {
            return {
                ...styles,
                width: "0px",
            };
        },
    };

    const handleSelectChange = (value) => {
        if (onChange) onChange(value.value);
    };

    return (
        <>
            <Select
                options={options}
                styles={selectStyles}
                placeholder="Giá"
                onChange={handleSelectChange}
            />
        </>
    );
}

export default ProductSort;
