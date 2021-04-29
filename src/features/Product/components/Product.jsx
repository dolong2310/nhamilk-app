import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";
import { formatPrice } from "../../../utils";

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product = {} }) {
    const thumbnailUrl = product.thumbnail?.url
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER;

    return (
        <>
            <Link to="/">
                <img
                    src={thumbnailUrl}
                    alt={product.title}
                    className="products-thumb"
                />
            </Link>
            <div className="product-info">
                <Link to="/" className="product-name">
                    {product.title}
                </Link>
                <Typography variant="body1">
                    {formatPrice(product.price)}
                </Typography>
                <Link to="/" className="product-link">
                    Chi tiết sản phẩm
                </Link>
            </div>
        </>
    );
}

export default Product;
