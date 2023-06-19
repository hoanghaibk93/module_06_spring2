import { Link } from 'react-router-dom';
import AuthModal from '../../auth/AuthModal';
import './Header.css'
import React, { useState } from "react";
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu =() => {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <div className="header">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="header-icon">
                                    <ul className="d-flex">
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-contact">
                                    <ul className="d-flex justify-content-end">
                                        <li className="contact">
                                            <a className="header-shop-map" href="">
                                                <i className="fas fa-map-marker-alt" />
                                                Hệ thống cửa hàng
                                            </a>
                                        </li>
                                        <li className="contact">
                                            <a className="header-shop-phone" href="">
                                                <i className="fas fa-phone" />
                                                (+84)816 195 246
                                            </a>
                                        </li>
                                        <li className="contact">
                                            <a className="header-shop-support" href="">
                                                <i className="fas fa-envelope" />
                                                hoanghaibk93@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <div className="logo">
                                        <a href="/">
                                            <img
                                                alt=""
                                                src="img/LOGO3.png"
                                                style={{ height: 30, width: "60%" }}
                                            />
                                        </a>
                                    </div>
                                    <button
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                        className="navbar-toggler"
                                        data-bs-target="#navbarSupportedContent"
                                        data-bs-toggle="collapse"
                                        type="button"
                                        onClick={toggleMenu}
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className={`collapse navbar-collapse ${!showMenu ? 'hide' : ''} justify-content-center`}
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-center">
                                            <li className="nav-item">
                                                <Link
                                                    aria-current="page"
                                                    className="nav-link active home"
                                                    to="/"
                                                >
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    aria-current="page"
                                                    className="nav-link active"
                                                   to="/shop"
                                                >
                                                    Sản phẩm
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <a aria-current="page" className="nav-link active" href="">
                                                    Tin tức
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a aria-current="page" className="nav-link active" href="">
                                                    Liên hệ
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a aria-current="page" className="nav-link active" href="">
                                                    Giới thiệu
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="icon-nav justify-content-end d-flex">
                                        <li>
                                            <a
                                                className="icon-user"
                                                data-bs-target="#exampleModal"
                                                data-bs-toggle="modal"
                                                href=""
                                            >
                                                <i className="fas fa-user-alt" />
                                            </a>
                                        </li>
                                        <li>
                                            <Link className="icon-buy" to="/cart">
                                                <i className="fas fa-shopping-cart" />
                                                <div className="number-buy">0</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={`responsive-navbar text-center ${!showMenu ? 'hide' : ''} an`}>
                    <div className="row">
                        <div className="col-12">
                            <div className="search">
                                <input placeholder="Tìm kiếm..." type="text" />
                                <i className="fas fa-search" />
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6 d-flex flex-column align-items-start res-left">
                                    <div className="res-home">
                                        <a href="">
                                            <i className="fas fa-house-user" />
                                            Trang chủ
                                        </a>
                                    </div>
                                    <div className="resproducts">
                                        <a href="">
                                            <i className="fas fa-cart-plus" />
                                            Sản phẩm
                                        </a>
                                    </div>
                                    <div className="res-contact">
                                        <a href="">
                                            <i className="fas fa-map-marker-alt" />
                                            Liên hệ
                                        </a>
                                    </div>
                                    <div className="res-about">
                                        <a href="">
                                            <i className="fas fa-address-card" />
                                            Giới thiệu
                                        </a>
                                    </div>
                                    <div className="about-us">
                                        <a href="">
                                            <i className="fab fa-themeisle" />
                                            Về chúng tôi
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 d-flex flex-column align-items-start res-right">
                                    <div className="love">
                                        <a href="">
                                            <i className="far fa-heart" />
                                            Yêu thích
                                        </a>
                                    </div>
                                    <div className="res-n">
                                        <a href="">
                                            <i className="far fa-newspaper" />
                                            Tin tức
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal/>
        </>
    );
};