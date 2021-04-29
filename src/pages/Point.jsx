import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Images from "../constants/images";
SwiperCore.use([Navigation, Pagination, Autoplay]);

Point.propTypes = {};

function Point(props) {
    const handleSwiperChange = () => {
        console.log(123);
    };

    return (
        <div id="point-wrapper">
            {/* START CARD SECTION */}

            <div className="card">
                <div className="card-container container wide">
                    <h2 className="title">Thẻ thành viên</h2>
                    <p className="desc">
                        TÍCH LŨY 1 CÂU CHUYỆN VỚI MỖI CHI TIÊU VND 100,000
                        <br />
                        Bạn có thể bắt đầu tích lũy câu chuyện và nhận ngay các
                        ưu đãi
                    </p>

                    <Swiper
                        navigation
                        pagination
                        loop={true}
                        centeredSlides={true}
                        className="card-glide glide"
                        onChange={handleSwiperChange}
                    >
                        <SwiperSlide>
                            <div className="card-img glide__slide">
                                <img
                                    src={Images.CARD_IMAGE1}
                                    alt="card-image1"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-img glide__slide">
                                <img
                                    src={Images.CARD_IMAGE2}
                                    alt="card-image2"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* END CARD SECTION */}
            {/* START RANK SECTION */}
            <div className="rank">
                <div className="rank-container container wide">
                    <div className="text-box">
                        <h3 className="title override">Hạng thẻ xanh</h3>
                        <h3 className="title">10 - 50 câu chuyện</h3>
                    </div>
                    <ul>
                        <li>
                            <img src={Images.RANK_IMAGE1} alt="rank-image1" />
                            <h3 className="label">Miễn phí vẫn chuyển</h3>
                        </li>
                        <li>
                            <img src={Images.RANK_IMAGE2} alt="rank-image2" />
                            <h3 className="label">
                                Giao hàng nhanh trong vòng 24h
                            </h3>
                        </li>
                        <li>
                            <img src={Images.RANK_IMAGE3} alt="rank-image3" />
                            <h3 className="label">Giảm 5% giá trị đơn hàng</h3>
                        </li>
                    </ul>
                </div>
            </div>
            {/* END RANK SECTION */}
            {/* START REGULATIONS SECTION */}
            <div className="regulations">
                <div className="regulations-container container wide">
                    <h2 className="title">Quy định sử dụng thẻ</h2>
                    <p className="desc">
                        - Khách hàng khi mua hàng online hoặc trực tiếp tại cửa
                        hàng đều có thể tạo thẻ và tham gia tích điểm cho mỗi
                        lần mua sản phẩm.
                        <br />- Nếu mua trực tiếp tại các cửa hàng thì nhân viên
                        sẽ tạo cho bạn thẻ cứng, còn tích điểm online khách hàng
                        có thể tải app.
                        <br />- Thẻ không có giá trị quy đổi thành tiền mặt
                        <br />- Mỗi một thẻ chỉ sử dụng cho 1 lần thanh toán
                    </p>
                </div>
            </div>
            {/* END REGULATIONS SECTION */}
            <div className="question">
                <div className="question-container container wide">
                    <h2 className="title">
                        <span>THÀNH VIÊN</span>
                        <br />
                        Câu hỏi thường gặp
                    </h2>
                    <div className="tabs">
                        <div className="tab">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label" htmlFor="chck1">
                                Các câu hỏi về thẻ
                            </label>
                            <div className="tab-content">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsum, reiciendis?
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck2" />
                            <label className="tab-label" htmlFor="chck2">
                                Các câu hỏi về chương trình đổi thưởng
                            </label>
                            <div className="tab-content">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. A, in?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Point;
