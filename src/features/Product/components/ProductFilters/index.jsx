import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";

ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function ProductFilters({ onChange = null, filters = {} }) {
    // handle filter category change
    function handleCategoryChange(newCategoryId) {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            "categories.id": newCategoryId,
        };

        onChange(newFilters);
    }

    return (
        <>
            <FilterByCategory onChange={handleCategoryChange} />
        </>
    );
}

export default ProductFilters;
