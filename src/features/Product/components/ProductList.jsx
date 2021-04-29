import React from "react";
import Product from "./Product";

function ProductList({ product }) {
    return (
        <div className="products-box col sm-6 md-6 lgm-4 lg-3">
            <Product product={product} />
        </div>
    );
}

export default ProductList;
