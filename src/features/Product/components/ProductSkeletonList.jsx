import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@material-ui/lab";
import { Box } from "@material-ui/core";

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};

function ProductSkeletonList({ length = 6 }) {
    return (
        <>
            {Array.from(new Array(length)).map((x, index) => (
                <div
                    className="products-box col sm-6 md-6 lgm-4 lg-3"
                    key={index}
                >
                    <Box>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                </div>
            ))}
        </>
    );
}

export default ProductSkeletonList;
