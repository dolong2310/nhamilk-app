import { Box, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../../api/productApi";
import ProductFilters from "../components/ProductFilters/index";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    pagination: {
        marginTop: theme.spacing(4),

        "& > ul": {
            justifyContent: "center",
        },
    },
}));

function ListPage(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]);
    const isMounted = useRef(false);

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
        total: 10,
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 12,
        _sort: "price:asc",
    });

    useEffect(() => {
        isMounted.current = true;
        (async () => {
            try {
                const response = await productApi.getAll(filters);
                const { data, pagination } = response;

                if (isMounted.current) {
                    setProductList(data);
                    setPagination(pagination);
                }
            } catch (error) {
                console.log("Failed to fetch product list", error);
            }

            setLoading(false);
        })();

        return () => {
            // cleanup
            isMounted.current = false;
        };
    }, [filters]);

    function handlePageChange(e, page) {
        // material ui requires (event: func callback, page: number)
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }));
    }

    function handleSortChange(newSortValue) {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }));
    }

    function handleFiltersChange(newFilters) {
        // console.log("newFilters:", newFilters);
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    }

    return (
        <div id="product-wrapper">
            {/* START BREADCRUMB SECTION */}
            <nav className="breadcrumb">
                <div className="breadcrumb-container container wide">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item">
                            <Link to="/" className="breadcrumb-link">
                                Trang chủ
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link
                                to="/products"
                                className="breadcrumb-link active" // temp
                            >
                                Sản phẩm nhamilk
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* END BREADCRUMB SECTION */}
            {/* START PRODUCTS SECTION */}
            <div className="products">
                <div className="products-container container wide">
                    <Box className="products-heading">
                        <h2 className="title">Sản phẩm nhamilk</h2>
                        <Box className="products-filters">
                            <ProductSort onChange={handleSortChange} />
                            <ProductFilters
                                filters={filters}
                                onChange={handleFiltersChange}
                            />
                        </Box>
                    </Box>
                    <div className="row">
                        {loading ? (
                            <ProductSkeletonList length={12} />
                        ) : (
                            <>
                                {productList.map((product) => (
                                    <ProductList
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                    <Pagination
                        count={Math.ceil(pagination.total / pagination.limit)}
                        page={pagination.page}
                        onChange={handlePageChange}
                        shape="rounded"
                        className={classes.pagination}
                    />
                </div>
            </div>
            {/* END PRODUCTS SECTION */}
        </div>
    );
}

export default ListPage;
