import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ProductDetails.propTypes = {};

function ProductDetails(props) {
    return (
        <>
            <div id="product-details-wrapper">
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
                                <Link to="/" className="breadcrumb-link active">
                                    Sản phẩm nhamilk
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* END BREADCRUMB SECTION */}
                {/* START PRODUCTS-DETAILS SECTION */}
                <div className="products-details">
                    <div className="products-details-container container wide">
                        <div className="row no-gutter">
                            <div className="products-details-left col sm-12 md-12 lgm-4 lg-4">
                                <div className="products-details__thumbnail">
                                    <img
                                        src="assets/img/pages/products details/section01/3.png"
                                        alt="product-image"
                                    />
                                </div>
                                <div className="products-details__review-images">
                                    <ul className="review-images__list">
                                        <li className="review-images__item">
                                            <img
                                                src="assets/img/pages/products details/section01/1,5l.png"
                                                alt="review-images"
                                            />
                                        </li>
                                        <li className="review-images__item">
                                            <img
                                                src="assets/img/pages/products details/section01/1,5l.png"
                                                alt="review-images"
                                            />
                                        </li>
                                        <li className="review-images__item">
                                            <img
                                                src="assets/img/pages/products details/section01/1,5l.png"
                                                alt="review-images"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="products-details-right col sm-12 md-12 lgm-8 lg-8">
                                <h3 className="products-details__name">
                                    Sữa tươi ít đường - thể tích 1,5L
                                </h3>
                                <div className="products-details__rating">
                                    <ul>
                                        <li>
                                            <img
                                                src="assets/img/pages/products details/section01/star.png"
                                                alt="star-icon"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="assets/img/pages/products details/section01/star.png"
                                                alt="star-icon"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="assets/img/pages/products details/section01/star.png"
                                                alt="star-icon"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="assets/img/pages/products details/section01/star.png"
                                                alt="star-icon"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="assets/img/pages/products details/section01/star.png"
                                                alt="star-icon"
                                            />
                                        </li>
                                    </ul>
                                    <span className="rating-details">
                                        (0 Khách hàng đánh giá) 17.558 Sản phẩm
                                        đã bán
                                    </span>
                                </div>
                                <span className="products-details__price">
                                    100,000 VND
                                </span>
                                <div className="description-box">
                                    <h3 className="description-box__label">
                                        Mô tả
                                    </h3>
                                    <ul className="description-box__content">
                                        <li className="description-box__content-item">
                                            <img
                                                src="assets/img/pages/products details/section01/Path 87.png"
                                                alt="check-icon"
                                            />
                                            <span>Sữa Tươi "nhamilk"</span>
                                        </li>
                                        <li className="description-box__content-item">
                                            <img
                                                src="assets/img/pages/products details/section01/Path 87.png"
                                                alt="check-icon"
                                            />
                                            <span>
                                                Sữa Tươi "nhamilk" với đầy đủ
                                                các dưỡng chất tự nhiên từ sữa
                                                bò tươi, cần thiết đáp ứng cho
                                                nhu cầu phát triển hàng ngày của
                                                cơ thể.
                                            </span>
                                        </li>
                                        <li className="description-box__content-item">
                                            <img
                                                src="assets/img/pages/products details/section01/Path 87.png"
                                                alt="check-icon"
                                            />
                                            <span>
                                                Bảo quản: Luôn bảo quản lạnh ở
                                                nhiệt độ từ 2 oC – 6 oC
                                            </span>
                                        </li>
                                        <li className="description-box__content-item">
                                            <img
                                                src="assets/img/pages/products details/section01/Path 87.png"
                                                alt="check-icon"
                                            />
                                            <span>
                                                Hạn sử dụng: 12 ngày kể từ ngày
                                                sản xuất in trên bao bì
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="buttons">
                                        <div className="quantity-btn-box">
                                            <div className="quantity-item">
                                                <button className="quantity-btn">
                                                    -
                                                </button>
                                            </div>
                                            <div className="quantity-item">
                                                <div className="quantity-number">
                                                    1
                                                </div>
                                            </div>
                                            <div className="quantity-item">
                                                <button className="quantity-btn">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <a
                                            href="cart-empty.html"
                                            className="btn btn-primary md"
                                        >
                                            Thêm vào giỏ hàng
                                        </a>
                                        <a
                                            href="cart-empty.html"
                                            className="btn btn-primary md high-light"
                                        >
                                            Mua hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END PRODUCTS-DETAILS SECTION */}
                {/* START RATING SECTION */}
                <div className="rating">
                    <div className="rating-container container wide">
                        <div className="rating-title">Đánh giá (0)</div>
                        <div className="rating-box">
                            {/* <ul class="rating-list">
                      <li class="rating-item"></li>
                  </ul> */}
                            <span className="rating-text">
                                Chưa có đánh giá nào.
                            </span>
                        </div>
                        <div className="my-rating">
                            <span className="my-rating__label">
                                Đánh giá của bạn
                            </span>
                            <ul className="stars">
                                <li className="star">
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                </li>
                                <li className="star">
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                </li>
                                <li className="star">
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                </li>
                                <li className="star">
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                </li>
                                <li className="star">
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                    <img
                                        src="assets/img/pages/products details/section01/star.png"
                                        alt="star-icon"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="comment">
                            <div className="comment-label">
                                Nhận xét của bạn
                            </div>
                            <div className="comment-box">
                                <textarea
                                    className="comment-area"
                                    name="comment-area"
                                    rows={8}
                                    cols={100}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="btn btn-primary sm">Gửi đi</div>
                        </div>
                    </div>
                </div>
                {/* END RATING SECTION */}
                {/* START PRODUCTS SECTION */}
                <div className="products">
                    <div className="products-container container wide">
                        <h2 className="title">Các sản phẩm liên quan</h2>
                        <div className="products-glide glide">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    <li className="glide__slide products-box">
                                        <a href="product-details.html">
                                            <img
                                                src="assets/img/pages/home/section03/1.png"
                                                alt="product-image"
                                                className="products-thumb"
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a
                                                href="product-details.html"
                                                className="product-name"
                                            >
                                                Sữa Socola
                                            </a>
                                            <a
                                                href="product-details.html"
                                                className="product-link"
                                            >
                                                Chi tiết sản phẩm
                                            </a>
                                        </div>
                                    </li>
                                    <li className="glide__slide products-box">
                                        <a href="product-details.html">
                                            <img
                                                src="assets/img/pages/home/section03/2.png"
                                                alt="product-image"
                                                className="products-thumb"
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a
                                                href="product-details.html"
                                                className="product-name"
                                            >
                                                Sữa tươi ít đường
                                            </a>
                                            <a
                                                href="product-details.html"
                                                className="product-link"
                                            >
                                                Chi tiết sản phẩm
                                            </a>
                                        </div>
                                    </li>
                                    <li className="glide__slide products-box">
                                        <a href="product-details.html">
                                            <img
                                                src="assets/img/pages/home/section03/3.png"
                                                alt="product-image"
                                                className="products-thumb"
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a
                                                href="product-details.html"
                                                className="product-name"
                                            >
                                                Sữa tươi vị dâu
                                            </a>
                                            <a
                                                href="product-details.html"
                                                className="product-link"
                                            >
                                                Chi tiết sản phẩm
                                            </a>
                                        </div>
                                    </li>
                                    <li className="glide__slide products-box">
                                        <a href="product-details.html">
                                            <img
                                                src="assets/img/pages/home/section03/4.png"
                                                alt="product-image"
                                                className="products-thumb"
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a
                                                href="product-details.html"
                                                className="product-name"
                                            >
                                                Sữa tưới hữu cơ
                                            </a>
                                            <a
                                                href="product-details.html"
                                                className="product-link"
                                            >
                                                Chi tiết sản phẩm
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="glide__arrows"
                                data-glide-el="controls"
                            >
                                <button
                                    className="glide__arrow glide__arrow--left"
                                    data-glide-dir="<"
                                >
                                    <img
                                        src="assets/img/pages/home/section04/Path 77.png"
                                        alt="arrow-left-icon"
                                    />
                                </button>
                                <button
                                    className="glide__arrow glide__arrow--right"
                                    data-glide-dir=">"
                                >
                                    <img
                                        src="assets/img/pages/home/section04/Path 78.png"
                                        alt="arrow-right-icon"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END PRODUCTS SECTION */}
            </div>
        </>
    );
}

export default ProductDetails;
