import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Images from "../constants/images";

Store.propTypes = {};

function Store(props) {
    const storeList = [
        {
            id: 1,
            title: "120 Phố Hàm Long, Quận Hai Bà Trưng",
            img: Images.MAP_IMAGE1,
        },
        {
            id: 2,
            title: "33 Nguyễn Du, Quận Hai Bà Trưng",
            img: Images.MAP_IMAGE2,
        },
        {
            id: 3,
            title: "98 Phạm Đình Hổ, Quận Hai Bà Trưng",
            img: Images.MAP_IMAGE3,
        },
        {
            id: 4,
            title: "35 Hương Viên, Quận Hai Bà Trưng",
            img: Images.MAP_IMAGE4,
        },
        {
            id: 5,
            title: "94 Lương Yên, Quân Hai Bà Trưng",
            img: Images.MAP_IMAGE5,
        },
        {
            id: 6,
            title: "203 Kim Ngưu, Quận Hai Bà Trưng",
            img: Images.MAP_IMAGE6,
        },
        {
            id: 7,
            title: "99 Minh Khai, Quận Hoàng Mai",
            img: Images.MAP_IMAGE7,
        },
        {
            id: 8,
            title: "184 Minh Khai, Quận Hoàng Mai",
            img: Images.MAP_IMAGE8,
        },
        {
            id: 9,
            title: "335 Tam Trinh, Quận Hoàng Mai",
            img: Images.MAP_IMAGE9,
        },
    ];

    // handle selection
    const options = [
        { value: "hn", label: "Thành phố Hà Nội" },
        { value: "hcm", label: "Thành phố Hồ Chí Minh" },
        { value: "dn", label: "Thành phố Đà Nẵng" },
    ];

    const selectStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            marginTop: "16px",
            width: "300px",
            border: "1px solid $grey-color-light",
            borderRadius: "20px",
            padding: "0 30px",

            "&:hover": {
                borderColor: "unset",
                boxShadow: "none",
            },
        }),
        option: (styles) => {
            return {
                ...styles,
            };
        },
    };

    const handleSelectChange = (value) => {
        console.log(value.value);
    };

    return (
        <div id="store-wrapper">
            <div className="store">
                <div className="store-container container wide">
                    <h2 className="title">Cửa hàng</h2>
                    <p className="desc">
                        Hiện tại, "nhamilk" đã phát triển hệ thống bán hàng
                        online với phương thức giao hàng tận nơi.
                        <span>
                            Quý khách có thể mua hàng tại website hoặc gọi đường
                            dây nóng của "nhamilk" 1800 555555 để được hướng dẫn
                            đến địa chỉ mua hàng ở các chuỗi siêu thị hoặc đại
                            lý phân phối gần khu vực sinh sống.
                        </span>
                    </p>
                    <div className="store-box">
                        <h2 className="title">Danh sách cửa hàng</h2>
                        <Select
                            options={options}
                            styles={selectStyles}
                            placeholder="Chọn khu vực..."
                            onChange={handleSelectChange}
                        />

                        {/* <div className="select">
                            <div className="selectBtn">Chọn khu vực...</div>
                            <div className="selectDropdown toggle">
                                <div className="option">Thành phố Hà Nội</div>
                                <div className="option">
                                    Thành phố Hồ Chí Minh
                                </div>
                                <div className="option">Thành phố Đà Nẵng</div>
                            </div>
                        </div> */}

                        <ul className="row store-list">
                            {storeList.map((store) => (
                                <li
                                    key={store.id}
                                    className="store-item col sm-6 md-6 lgm-4 lg-4"
                                >
                                    <Link
                                        to="/store"
                                        className="store-item-image"
                                    >
                                        <img src={store.img} alt="map-image1" />
                                    </Link>
                                    <Link to="/store" className="store-text">
                                        {store.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;
