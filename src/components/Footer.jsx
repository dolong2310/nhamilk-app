import React from "react";
import { Link } from "react-router-dom";
import Images from "../constants/images";

Footer.propTypes = {};

function Footer(props) {
    return (
        <div id="footer">
            <div className="footer-container container wide">
                <div className="row no-gutter">
                    <div className="footer-left col sm-12 md-12 lgm-6 lg-6">
                        <h3>Cảm ơn bạn đã đồng hành cùng chúng tôi</h3>
                        <p>Mọi thắc mắc vui lòng liên hệ</p>
                        <div className="text-box">
                            <img src={Images.PHONE_ICON} alt="phone-icon" />
                            <span>1900.555.555</span>
                        </div>
                        <div className="text-box">
                            <img src={Images.EMAIL_ICON} alt="email-icon" />
                            <span>nhamilk@gmail.com.vn</span>
                        </div>
                        <div className="text-box">
                            <img
                                src={Images.LOCATION_ICON}
                                alt="location-icon"
                            />
                            <span>
                                Số 8 Tràng Thi, Hoàn Kiếm, Hà Nội, Việt nam
                            </span>
                        </div>
                    </div>
                    <div className="footer-right col sm-12 md-12 lgm-6 lg-6">
                        <div className="footer-quick-link">
                            <ul>
                                <li>
                                    <Link to="/">Giới thiệu</Link>
                                </li>
                                <li>
                                    <Link to="/">Sản phẩm</Link>
                                </li>
                                <li>
                                    <Link to="/">Tích điểm</Link>
                                </li>
                                <li>
                                    <Link to="/">Cửa hàng</Link>
                                </li>
                                <li>
                                    <Link to="/">Tin tức</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-payment-support">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <img
                                            src={Images.PAYMENT_IMAGE1}
                                            alt="payment-image1"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <img
                                            src={Images.PAYMENT_IMAGE2}
                                            alt="payment-image2"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <img
                                            src={Images.PAYMENT_IMAGE3}
                                            alt="payment-image3"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <img
                                            src={Images.PAYMENT_IMAGE4}
                                            alt="payment-image4"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <img
                                            src={Images.PAYMENT_IMAGE5}
                                            alt="payment-image5"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
