import { Link, useNavigate } from 'react-router-dom';
import AuthModal from '../../auth/AuthModal';
import './Header.css'
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useContext } from 'react';
import { ValueIconCartContext } from '../../../service/ValueIconCartProvider';
import { useEffect } from 'react';
import { apiGetAllCart } from '../../../service/CartService';
export const Header = () => {
    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const auth = localStorage.getItem("token");
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const [pageActive, setPageActive] = useState('home')
    const handleActive = (page) => {
        if (page === "home") {
            setPageActive("home")
        } else if (page === "product") {
            setPageActive("product")
        } else if (page === "new") {
            setPageActive("new")
        } else if (page === "contact") {
            setPageActive("contact")
        } else if (page === "introduce") {
            setPageActive("introduce")
        } else if (page === "cart") {
            setPageActive("cart")
        }
    }
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    const handleLogout = () => {
        localStorage.clear();
        setValueIconCart(0);
        navigate("/");
    }

    const fetchValueIconCart = async () => {
        try {
            const result = await apiGetAllCart(auth);
            const countIconCart = result?.map(item => item.quantity).reduce((a, b) => a + b, 0);
            setValueIconCart(countIconCart)
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchValueIconCart()
    }, [])
    const account = JSON.parse(localStorage.getItem("account"))
    const appRole = [];
    if (account != null) {
        for (let i = 0; i < account.roles?.length; i++) {
            appRole.push(account.roles[i].authority)

        }
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
                                                src="/img/LOGO3.png"
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
                                                    className={`nav-link active ${pageActive === 'home' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('home') }}
                                                    to="/"
                                                >
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    aria-current="page"
                                                    className={`nav-link active ${pageActive === 'product' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('product') }}
                                                    to="/shop"
                                                >
                                                    Sản phẩm
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    aria-current="page"
                                                    className={`nav-link active ${pageActive === 'new' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('new') }}
                                                    to="/shop"
                                                >
                                                    Tin tức
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    aria-current="page"
                                                    className={`nav-link active ${pageActive === 'contact' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('contact') }}
                                                    to="/shop"
                                                >
                                                    Liên hệ
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    aria-current="page"
                                                    className={`nav-link active ${pageActive === 'introduce' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('introduce') }}
                                                    to="/shop"

                                                >
                                                    Giới thiệu
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {appRole.includes("ADMIN") ? (
                                        <ul className="icon-nav cart-total justify-content-end d-flex">

                                            <li>
                                                <div className="dropdown">
                                                    <button
                                                        className="dropdown-toggle"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }} >{username[0].toUpperCase()}</Avatar>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li>

                                                            <a className="dropdown-item" href="#">
                                                                Quản lý nhân viên
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Quản lý khách hàng
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Quản lý sản phẩm
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Quản lý đơn hàng
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Quản lý tài khoản
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" onClick={handleLogout}>

                                                                Đăng xuất
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li>
                                                <Link
                                                    className={`icon-buy ${pageActive === 'cart' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('cart') }}
                                                    to='/cart'
                                                >
                                                    <i className="fas fa-shopping-cart" />
                                                    <div className="number-buy">{valueIconCart}</div>
                                                </Link>
                                            </li>

                                        </ul>
                                    ) : appRole.includes("USER") ?
                                        <ul className="icon-nav cart-total justify-content-between align-items-center d-flex">
                                            <li>
                                                <Link
                                                    className={`icon-buy ${pageActive === 'cart' ? 'home' : ''}`}
                                                    onClick={() => { handleActive('cart') }}
                                                    to='/cart'
                                                >
                                                    <i className="fas fa-shopping-cart" />
                                                    <div className="number-buy">{valueIconCart}</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <button
                                                        className="dropdown-toggle"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }} >{username[0].toUpperCase()}</Avatar>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li>
                                                            <Link to={`/information`} className="dropdown-item" href="#">
                                                                Tài khoản của tôi
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={`/product/history`} className="dropdown-item" href="#">
                                                                Lịch sử đặt hàng
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" onClick={handleLogout}>
                                                                Đăng xuất
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        : (
                                            <ul className="icon-nav justify-content-between align-items-center d-flex">
            
                                                <li>
                                                    <Link className="icon-buy" to="/cart">
                                                        <i className="fas fa-shopping-cart" />
                                                        <div className="number-buy">0</div>
                                                    </Link>
                                                </li>
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
                                            </ul>

                                        )}
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
            <AuthModal />
        </>
    );
};