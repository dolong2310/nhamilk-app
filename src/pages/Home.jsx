import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Images from "../constants/images";
SwiperCore.use([Navigation, Pagination, Autoplay]);

Home.propTypes = {};

function Home(props) {
    return (
        <div id="home-wrapper">
            {/* START BANNER SECTION */}
            <div className="banner">
                <div className="banner-container container wide">
                    <div className="row no-gutter">
                        <div className="banner-left col sm-12 md-12 lgm-6 lg-6">
                            <div className="intro-images">
                                <img
                                    src={Images.BANNER_IMAGE}
                                    alt="banner-image1"
                                />
                            </div>
                            <p className="label">
                                * Đăng nhập để chia sẻ câu chuyện của bạn nhé!
                            </p>
                            <div className="buttons">
                                <Link
                                    to="/products"
                                    href="product.html"
                                    className="btn btn-primary md"
                                >
                                    Đặt ngay
                                    <img
                                        src={Images.ANGLE_RIGHT_ICON}
                                        alt="angle-right-icon"
                                    />
                                </Link>
                                <div className="play-icon">
                                    <img
                                        src={Images.PLAY_ICON}
                                        alt="play-icon"
                                    />
                                </div>
                                <div className="next-btn">
                                    <span>Khám phá ngay</span>
                                    <div className="button-next">
                                        <img
                                            src={Images.NEXT_BUTTON}
                                            alt="next-button"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-right col sm-12 md-12 lgm-6 lg-6">
                            <img
                                src={Images.BACKGROUND_IMAGE}
                                alt="background-image1"
                                className="background-image"
                            />
                            <img
                                src={Images.BANNER_IMAGE1}
                                alt="banner-image2"
                                className="banner-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* END BANNER SECTION */}
            {/* START LEARN MORE SECTION */}
            <div className="learn-more">
                <div className="learn-more-container">
                    <div className="learn-more-img">
                        <img src={Images.CART_IMAGE} alt="card-image1" />
                    </div>
                    <div className="learn-more-box">
                        <h2 className="title">
                            Chia sẻ câu chuyện của bạn để đổi lấy quà
                        </h2>
                        <p className="desc">
                            Sau mỗi lần mua sản phẩm, hãy chia sẻ câu chuyện của
                            bạn ngày hôm nay để đổi lấy phần quà
                        </p>
                        <Link to="/points" className="learn-more-link">
                            Tìm hiểu ngay
                        </Link>
                    </div>
                </div>
            </div>
            {/* END LEARN MORE SECTION */}
            {/* START SPECIALS SECTION */}
            <div className="specials">
                <div className="specials-container container wide">
                    <h2 className="title">
                        Điều đặc biệt của <span>"nhamilk"</span>
                    </h2>
                    <div className="specials-content">
                        <div className="specials-box">
                            <ul className="specials-list">
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Chế biến từ sữa bò tươi nguyên chất.
                                    </p>
                                </li>
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Hoàn toàn từ nguồn sữa tươi.
                                    </p>
                                </li>
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Từ những going bò sữa tốt nhất của Việt
                                        Nam.
                                    </p>
                                </li>
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Hương vị tự nhiên thuần khiết không thể
                                        tìm thấy ở vùng khác.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="specials-images">
                            <img
                                src={Images.BACKGROUND_IMAGE1}
                                alt="background-image2"
                                className="specials-bg"
                            />
                            <img
                                src={Images.MILK_IMAGE}
                                alt="milk-image3"
                                className="specials-img"
                            />
                        </div>
                        <div className="specials-box">
                            <ul className="specials-list">
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Quy trình sản xuất khép kín sạch.
                                    </p>
                                </li>
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Quản lý chất lượng sản xuất và phân
                                        phối.
                                    </p>
                                </li>
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Dịch vụ cung ứng tối ưu trong 24h.
                                    </p>
                                </li>
                                <li className="specials-item">
                                    <img
                                        src={Images.CHECKED_ICON}
                                        alt="checked-icon"
                                        className="specials-item__icon"
                                    />
                                    <p className="desc">
                                        Giao hàng nhanh trong khu vực gần nhất
                                        của người tiêu dùng.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* END SPECIALS SECTION */}
            {/* START PRODUCTS SECTION */}
            <div className="products">
                <div className="products-container container wide">
                    <h2 className="title">Các sản phẩm nổi bật</h2>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination
                        freeMode={true}
                        loop={true}
                        autoplay={{ delay: 2500 }}
                    >
                        <SwiperSlide>
                            <li className="products-box">
                                <Link to="/products/:productId">
                                    <img
                                        src={Images.PRODUCT_IMAGE1}
                                        alt="product-image1"
                                        className="products-thumb"
                                    />
                                </Link>
                                <div className="product-info">
                                    <Link
                                        to="/products/:productId"
                                        className="product-name"
                                    >
                                        Sữa Socola
                                    </Link>
                                    <Link
                                        to="/products/:productId"
                                        className="product-link"
                                    >
                                        Chi tiết sản phẩm
                                    </Link>
                                </div>
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="products-box">
                                <Link to="/products/:productId">
                                    <img
                                        src={Images.PRODUCT_IMAGE1}
                                        alt="product-image2"
                                        className="products-thumb"
                                    />
                                </Link>
                                <div className="product-info">
                                    <Link
                                        to="/products/:productId"
                                        className="product-name"
                                    >
                                        Sữa Socola
                                    </Link>
                                    <Link
                                        to="/products/:productId"
                                        className="product-link"
                                    >
                                        Chi tiết sản phẩm
                                    </Link>
                                </div>
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="products-box">
                                <Link to="/products/:productId">
                                    <img
                                        src={Images.PRODUCT_IMAGE1}
                                        alt="product-image3"
                                        className="products-thumb"
                                    />
                                </Link>
                                <div className="product-info">
                                    <Link
                                        to="/products/:productId"
                                        className="product-name"
                                    >
                                        Sữa Socola
                                    </Link>
                                    <Link
                                        to="/products/:productId"
                                        className="product-link"
                                    >
                                        Chi tiết sản phẩm
                                    </Link>
                                </div>
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="products-box">
                                <Link to="/products/:productId">
                                    <img
                                        src={Images.PRODUCT_IMAGE1}
                                        alt="product-image4"
                                        className="products-thumb"
                                    />
                                </Link>
                                <div className="product-info">
                                    <Link
                                        to="/products/:productId"
                                        className="product-name"
                                    >
                                        Sữa Socola
                                    </Link>
                                    <Link
                                        to="/products/:productId"
                                        className="product-link"
                                    >
                                        Chi tiết sản phẩm
                                    </Link>
                                </div>
                            </li>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* END PRODUCTS SECTION */}
            {/* START PARTNERS SECTION */}
            <div className="partners">
                <div className="partners-container container wide">
                    <h2 className="title">
                        Các đối tác của <span>"nhamilk"</span>
                    </h2>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination
                        freeMode={true}
                        loop={true}
                        autoplay={{ delay: 2500 }}
                        className="partners-brands"
                    >
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE1}
                                    alt="brand-image1"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE2}
                                    alt="brand-image2"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE3}
                                    alt="brand-image3"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE4}
                                    alt="brand-image4"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE5}
                                    alt="brand-image5"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE6}
                                    alt="brand-image6"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE7}
                                    alt="brand-image7"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE8}
                                    alt="brand-image8"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE9}
                                    alt="brand-image9"
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className="partners-brands__item">
                                <img
                                    src={Images.BRAND_IMAGE10}
                                    alt="brand-image10"
                                />
                            </li>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* END PARTNERS SECTION */}
            {/* START SHIPPING SECTION */}
            <div className="shipping">
                <div className="shipping-container container wide">
                    <img
                        src={Images.MILK_IMAGE1}
                        alt="milk-image1"
                        className="shipping-background"
                    />
                    <div className="shipping-image">
                        <img src={Images.MILK_IMAGE2} alt="milk-image2" />
                    </div>
                    <div className="shipping-info">
                        <h2 className="title">
                            Giao sữa <span>"nhamilk"</span> tận nơi trong 24h
                        </h2>
                        <p className="desc">
                            Bạn cần giao hàng "nhamilk" tận nơi? Liên hệ chúng
                            tôi ngay bây giờ để được MIỄN PHÍ giao hàng cho đơn
                            từ 150.000đ. Xem chính sách giao hàng.
                        </p>
                        <Link to="/products" className="btn btn-primary md">
                            Đặt ngay
                            <img
                                src={Images.ANGLE_RIGHT_ICON}
                                alt="angle-right-icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {/* END SHIPPING SECTION */}
            {/* START NEWS SECTION */}
            <div className="news">
                <div className="news-container container wide">
                    <h2 className="title">Tin tức hàng ngày</h2>
                    <div className="row no-gutter">
                        <div className="news-item col sm-12 md-6 lgm-6 lg-4">
                            <div className="news-thumb">
                                <Link to="/">
                                    <img
                                        src={Images.NEWS_IMAGE1}
                                        alt="news-image1"
                                    />
                                </Link>
                                <div className="news-box">
                                    <Link to="/" className="news-title">
                                        Bạn đã sử dụng sữa chua đúng cách?
                                    </Link>
                                    <Link to="/" className="news-link">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-item col sm-12 md-6 lgm-6 lg-4">
                            <div className="news-thumb">
                                <Link to="/">
                                    <img
                                        src={Images.NEWS_IMAGE2}
                                        alt="news-image2"
                                    />
                                </Link>
                                <div className="news-box">
                                    <Link to="/" className="news-title">
                                        Cách hâm nóng sữa tươi thanh trùng
                                    </Link>
                                    <Link to="/" className="news-link">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-item col sm-12 md-6 lgm-6 lg-4">
                            <div className="news-thumb">
                                <Link to="/">
                                    <img
                                        src={Images.NEWS_IMAGE3}
                                        alt="news-image3"
                                    />
                                </Link>
                                <div className="news-box">
                                    <Link to="/" className="news-title">
                                        Phân biệt sữa tươi thanh trùng và tiệt
                                        trùng
                                    </Link>
                                    <Link to="/" className="news-link">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <Link to="/" className="pagination-prev">
                            Trang trước
                        </Link>
                        <ul className="number-box">
                            <li className="number-item">
                                <Link
                                    to="/"
                                    className="pagination-number-link active"
                                >
                                    1
                                </Link>
                            </li>
                            <li className="number-item">
                                <Link to="/" className="pagination-number-link">
                                    2
                                </Link>
                            </li>
                            <li className="number-item">
                                <Link to="/" className="pagination-number-link">
                                    3
                                </Link>
                            </li>
                        </ul>
                        <Link to="/" className="pagination-next">
                            Trang sau
                        </Link>
                    </div>
                </div>
            </div>
            {/* END NEWS SECTION */}
        </div>
    );
}

export default Home;
