import React from "react";
import Images from "../constants/images";

About.propTypes = {};

function About(props) {
    return (
        <div id="about-wrapper">
            {/* START BANNER SECTION */}
            <div className="banner">
                <div className="banner-container container wide">
                    <div className="row no-gutter">
                        <div className="banner-left col sm-12 md-12 lgm-6 lg-6">
                            <h1 className="title">Câu chuyện về "nhamilk"</h1>
                            <p className="label">
                                Khát vọng chiếm trọn niềm tin của khách hàng
                                dành cho sản phẩm "nhamilk". Không ngừng nỗ lực
                                đưa thương hiệu "nhamilk" lên tầm cao mới và trở
                                tành niềm tự hào của người Việt. Kiên trì con
                                đường từ đồng cỏ đến ly sữa sạch, nghiêm túc,
                                chân chính hướng đến môi trường thân thiện với
                                sự sinh tồn của Tự nhiên và con Người. Cống hiến
                                vì sức khỏe cộng đồng và sự phát triển trí tuệ,
                                thể chất của thế hệ trẻ tương lai.
                            </p>
                            <div className="buttons">
                                <a
                                    href="product.html"
                                    className="btn btn-primary md"
                                >
                                    Đặt ngay
                                    <img
                                        src={Images.ANGLE_RIGHT_ICON}
                                        alt="angle-right-icon"
                                    />
                                </a>
                                <div className="play-icon">
                                    <img
                                        src={Images.PLAY_ICON}
                                        alt="play-icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="banner-right col sm-12 md-12 lgm-6 lg-6">
                            <div className="banner-image">
                                <img
                                    src={Images.BANNER_IMAGE_ABOUT}
                                    alt="banner-image1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END BANNER SECTION */}
            {/* START MISSION SECTION */}
            <div className="mission">
                <div className="mission-container container wide">
                    <h2 className="title">Tầm nhìn và sứ mệnh</h2>
                    <p className="desc">
                        Luôn lắng nghe và khát vọng chiếm trọn niềm tìn của
                        khách hàng dành cho sản phẩm
                    </p>
                    <div className="mission-box">
                        <div className="box">
                            <img
                                src={Images.MISSION_IMAGE_ABOUT}
                                alt="mision-image1"
                            />
                            <h3 className="title">Nỗ lực</h3>
                            <p className="desc">
                                Không ngừng nỗ lực đưa thương hiệu lên tầm cao
                                mới và trở thành niềm tự hào của người Việt
                            </p>
                        </div>
                        <div className="box">
                            <img
                                src={Images.MISSION_IMAGE_ABOUT}
                                alt="mision-image2"
                            />
                            <h3 className="title">Kiên trì</h3>
                            <p className="desc">
                                Luôn lắng nghe và thấu hiểu khách hàng để thay
                                đổi và mang đến những giọt sữa ngon nhất
                            </p>
                        </div>
                        <div className="box">
                            <img
                                src={Images.MISSION_IMAGE_ABOUT}
                                alt="mision-image3"
                            />
                            <h3 className="title">Cống hiến</h3>
                            <p className="desc">
                                Cống hiến vì sức khỏe của cộng đồng và sự phát
                                triển trí tuệ và thể chất của thế hệ mới
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MISSION SECTION */}
            {/* START PROCESS SECTION */}
            <div className="process">
                <div className="process-container container wide">
                    <h2 className="title">Quy trình sản xuất sữa</h2>
                    <p className="desc">
                        Luôn lắng nghe và khát vọng chiếm trọn niềm tìn của
                        khách hàng dành cho sản phẩm
                    </p>
                    <div className="process-image">
                        <img
                            src={Images.PROCESS_IMAGE_ABOUT}
                            alt="process-image1"
                        />
                    </div>
                </div>
            </div>
            {/* END PROCESS SECTION */}
        </div>
    );
}

export default About;
