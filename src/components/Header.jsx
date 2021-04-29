import { Box, IconButton, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Close } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Images from "../constants/images";
import Login from "../features/Auth/components/Login";
import Register from "../features/Auth/components/Register";
import { logout } from "../features/Auth/userSlice";

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
    dialog: {
        position: "relative",
    },

    dialogForm: {
        width: "600px",
        maxWidth: "100%",
        padding: theme.spacing(8, 3, 4),
        position: "relative",
    },

    closeBtn: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        zIndex: 1,
    },
}));

const MODE = {
    LOGIN: "login",
    REGISTER: "register",
};

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Header(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleShowSearchInput() {
        setShowSearchInput(!showSearchInput);
    }

    function handleShowSideBar() {
        setShowSideBar(true);
    }

    function handleCloseSideBar() {
        setShowSideBar(false);
    }

    function handleLogoutClicK() {
        const action = logout();
        dispatch(action);
        setAnchorEl(null);
    }

    const [onTop, setOnTop] = useState(true);
    window.addEventListener("scroll", () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    });

    return (
        <HideOnScroll {...props}>
            <div className={onTop ? "header" : "header active"}>
                <div className="header-container container wide">
                    <div className="header-wrapper">
                        <div className="menu-icon" onClick={handleShowSideBar}>
                            <MenuIcon />
                        </div>
                        <Link to="/" className="logo">
                            <img src={Images.LOGO} alt="logo" />
                        </Link>
                        <div
                            className={
                                showSideBar ? "navigation active" : "navigation"
                            }
                        >
                            <div className="navigation-heading">
                                <Link to="/" className="logo">
                                    <img src={Images.LOGO} alt="logo" />
                                </Link>
                            </div>
                            <div className="navigation-search">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm ..."
                                    className="search-input"
                                />
                                <div className="search-box">
                                    <img
                                        src={Images.SEARCH_ICON}
                                        alt="search-icon"
                                        className="search-icon"
                                    />
                                </div>
                            </div>
                            <ul className="navigation-list">
                                <li className="navigation-item">
                                    <NavLink
                                        to="/home"
                                        className="navigation-link"
                                    >
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink
                                        to="/about"
                                        className="navigation-link"
                                    >
                                        Giới thiệu
                                    </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink
                                        to="/products"
                                        className="navigation-link"
                                    >
                                        Sản phẩm
                                    </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink
                                        to="/point"
                                        className="navigation-link"
                                    >
                                        Tích điểm
                                    </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink
                                        to="/store"
                                        className="navigation-link"
                                    >
                                        Cửa hàng
                                    </NavLink>
                                </li>
                                <li className="navigation-item">
                                    <NavLink
                                        to="/news"
                                        className="navigation-link"
                                    >
                                        Tin tức
                                    </NavLink>
                                </li>
                            </ul>
                            <div
                                className="close-icon"
                                onClick={handleCloseSideBar}
                            >
                                <img
                                    src={Images.BACK_ARROW_ICON}
                                    alt="back-arrow"
                                />
                            </div>
                        </div>
                        <div className="utilities">
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm ..."
                                    className={
                                        showSearchInput
                                            ? "search-input active"
                                            : "search-input"
                                    }
                                />
                                <div
                                    className="search-box"
                                    onClick={handleShowSearchInput}
                                >
                                    <img
                                        src={Images.SEARCH_ICON}
                                        alt="search-icon"
                                        className="search-icon"
                                    />
                                </div>
                            </div>
                            {!isLoggedIn && (
                                <div className="user" onClick={handleClickOpen}>
                                    <img
                                        src={Images.USER_ICON}
                                        alt="user-icon"
                                        className="user-icon"
                                    />
                                </div>
                            )}
                            {isLoggedIn && (
                                <>
                                    <div
                                        className="user"
                                        onClick={handleOpenMenu}
                                    >
                                        <span>
                                            {
                                                loggedInUser.fullname
                                                    .split(" ")
                                                    .slice(-1)[0]
                                            }
                                        </span>
                                        <img
                                            src={Images.USER_ICON}
                                            alt="user-icon"
                                            className="user-icon"
                                        />
                                    </div>
                                </>
                            )}
                            <a href="cart-empty.html" className="cart">
                                <img
                                    src={Images.CART_ICON}
                                    alt="cart-icon"
                                    className="cart-icon"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="search-mobile">
                        <input
                            type="text"
                            placeholder="Tìm kiếm ..."
                            className="search-input"
                        />
                        <div className="search-box">
                            <img
                                src={Images.SEARCH_ICON}
                                alt="search-icon"
                                className="search-icon"
                            />
                        </div>
                    </div>
                    <div
                        className={showSideBar ? "overlay active" : "overlay"}
                        onClick={handleCloseSideBar}
                    />
                </div>

                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleLogoutClicK}>Logout</MenuItem>
                </Menu>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                    disableBackdropClick
                    className={classes.dialog}
                >
                    <IconButton
                        onClick={handleClose}
                        className={classes.closeBtn}
                    >
                        <Close />
                    </IconButton>
                    <DialogContent className={classes.dialogForm}>
                        {mode === MODE.REGISTER && (
                            <>
                                <Register onCloseDialog={handleClose} />
                                <Box textAlign="center" marginTop="20px">
                                    <Button
                                        color="primary"
                                        onClick={() => setMode(MODE.LOGIN)}
                                    >
                                        Bạn đã có tài khoản. Đăng nhập tại đây
                                    </Button>
                                </Box>
                            </>
                        )}

                        {mode === MODE.LOGIN && (
                            <>
                                <Login onCloseDialog={handleClose} />
                                <Box textAlign="center" marginTop="20px">
                                    <Button
                                        color="primary"
                                        onClick={() => setMode(MODE.REGISTER)}
                                    >
                                        Bạn chưa có tài khoản. Đăng ký tại đây
                                    </Button>
                                </Box>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </HideOnScroll>
    );
}

export default Header;
