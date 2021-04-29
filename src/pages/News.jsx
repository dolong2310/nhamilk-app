import React from "react";
import PropTypes from "prop-types";
import Images from "../constants/images";
import { Link } from "react-router-dom";

News.propTypes = {};

function News(props) {
    return (
        <div id="news-wrapper">
            {/* START BREADCRUMB SECTION */}
            <nav className="breadcrumb">
                <div className="breadcrumb-container container wide">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item">
                            <Link to="/news" className="breadcrumb-link">
                                Tin tức
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/news" className="breadcrumb-link active">
                                Cẩm nang sức khỏe
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* END BREADCRUMB SECTION */}
            {/* START NEWS SECTION */}
            <div className="news">
                <div className="news-container container wide">
                    <ul className="news-categories">
                        <li className="category-item">
                            <Link to="/news" className="category-link active">
                                CẨM NANG SỨC KHỎE
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to="/news" className="category-link">
                                CÔNG THỨC MỖI NGÀY
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to="/news" className="category-link">
                                TRUYỀN THÔNG NỘI BỘ
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to="/news" className="category-link">
                                INTERNAL COMMUNICATIONS
                            </Link>
                        </li>
                    </ul>
                    <div className="row no-gutter">
                        <div className="news-item col sm-12 md-6 lgm-6 lg-4">
                            <div className="news-thumb">
                                <Link to="/news">
                                    <img
                                        src={Images.NEWS_IMAGE1}
                                        alt="news-image1"
                                    />
                                </Link>
                                <div className="news-box">
                                    <Link to="/news" className="news-title">
                                        Bạn đã sử dụng sữa chua đúng cách?
                                    </Link>
                                    <Link to="/news" className="news-link">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-item col sm-12 md-6 lgm-6 lg-4">
                            <div className="news-thumb">
                                <Link to="/news">
                                    <img
                                        src={Images.NEWS_IMAGE2}
                                        alt="news-image2"
                                    />
                                </Link>
                                <div className="news-box">
                                    <Link to="/news" className="news-title">
                                        Cách hâm nóng sữa tươi thanh trùng
                                    </Link>
                                    <Link to="/news" className="news-link">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-item col sm-12 md-6 lgm-6 lg-4">
                            <div className="news-thumb">
                                <Link to="/news">
                                    <img
                                        src={Images.NEWS_IMAGE3}
                                        alt="news-image3"
                                    />
                                </Link>
                                <div className="news-box">
                                    <Link to="/news" className="news-title">
                                        Phân biệt sữa tươi thanh trùng và tiệt
                                        trùng
                                    </Link>
                                    <Link to="/news" className="news-link">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <Link to="/news" className="pagination-prev">
                            Trang trước
                        </Link>
                        <ul className="number-box">
                            <li className="number-item">
                                <Link className="pagination-number-link active">
                                    1
                                </Link>
                            </li>
                            <li className="number-item">
                                <Link
                                    to="/news"
                                    className="pagination-number-link"
                                >
                                    2
                                </Link>
                            </li>
                            <li className="number-item">
                                <Link
                                    to="/news"
                                    className="pagination-number-link"
                                >
                                    3
                                </Link>
                            </li>
                        </ul>
                        <Link to="/news" className="pagination-next">
                            Trang sau
                        </Link>
                    </div>
                </div>
            </div>
            {/* END NEWS SECTION */}
        </div>
    );
}

export default News;
