import React, { useEffect, useState } from 'react';
import SuggestProduct from './SuggestProduct';
import './detail.css';
import { useParams } from 'react-router';
import { apiFindProductByIdProduct } from '../../service/ShopService';
import { useContext } from 'react';
import { ValueIconCartContext } from '../../service/ValueIconCartProvider';
import { apiCreateCart } from "../../service/CartService";
import { FormatPrice } from "../../service/FormatPrice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Detail = () => {
    const [productData, setProductData] = useState();
    const [valueQuantity, setValueQuantity] = useState(1);
    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledOne, setIsDisabledOne] = useState(false);
    const username = localStorage.getItem("username");
    const param = useParams();
    const getProductById = async () => {
        const result = await apiFindProductByIdProduct(param.id)
        console.log(result);
        setProductData(result)
    }

    const handleAddCartItem = async (product) => {
        try {
            const value = {
                quantity: valueQuantity,
                product: product
            }
            const data = await apiCreateCart(value);
            if (data?.status === 201) {
                setValueIconCart(valueIconCart + valueQuantity);
                toast.success("Sản phẩm đã được thêm vào giỏ hàng", { autoClose: 3000 });
            }
        } catch (error) {
            if (error.response.status === 400) {

                toast.error("Sản phẩm trong kho đã hết, vui lòng chọn sản phẩm khác", { autoClose: 3000 })
            }
        }
    }

    const changeCartQuantity = (value) => {
        const updateQuantity = () => {
            return value === 'increase' ? valueQuantity + 1 : value === 'descrease' ? valueQuantity - 1 : "0" ? 1 : +value
        }
        if (productData.quantity <= 0) {
            setIsDisabled(true)
            setIsDisabledOne(true)
        } else if (updateQuantity() > 1) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
        if (updateQuantity() > productData.quantity) {
            setIsDisabledOne(true)
            setValueQuantity(productData.quantity)
            if (productData?.quantity > 0) {

                toast.error(`Chỉ còn ${productData?.quantity} sản phẩm có sẵn `, { autoClose: 3000 });
            } else {
                toast.error("Sản phẩm trong kho đã hết, vui lòng chọn sản phẩm khác", { autoClose: 3000 })
            }
        } else {
            setIsDisabledOne(false)
            setValueQuantity(updateQuantity())
        }
    }
    useEffect(() => {
        document.title = "Chi tiết"
        getProductById()
    }, [param.id])

    if (!productData) {
        return null;
    }

    return (
        <>
            <div className="banner-detail">
                <div className="inner">
                    <div className="container text-center">
                        <p className="title-heading">CHI TIẾT SẢN PHẨM</p>
                        <p className="intro">
                            <a href="">Trang chủ</a>/ <a href="">Chi tiết sản phẩm</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="list-img">
                                <img
                                    src={productData?.image}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-info">
                                <div className="product-info">
                                    <p className="name-product">{productData?.nameProduct}</p>
                                    <div className="price-products text-center d-flex align-items-center">
                                        <p className="price">{FormatPrice(productData?.salePrice)}<span> đ</span></p>
                                        {productData?.salePrice != productData?.originalPrice ? (
                                            <p className="root-price">{FormatPrice(productData?.originalPrice)}<span> đ</span></p>
                                        ) : ''
                                        }
                                    </div>
                                    <p className="text-intro">
                                        {productData?.introduce}
                                    </p>
                                    <div className="detail soluong d-flex align-items-center">
                                        <p className="sl-text">Số lượng: </p>
                                        <i className={`fas fa-plus icon-plus ${isDisabledOne ? 'disabledOne' : ''}`} onClick={() => changeCartQuantity('increase')} />
                                        <input className='hideNumberArrows' type="number" onChange={(e) => { changeCartQuantity(e.target.value) }} value={valueQuantity} />
                                        <i className={`fas fa-minus icon-minus ${isDisabled ? 'disabled' : ''}`} onClick={() => changeCartQuantity('descrease')} />
                                        <span className='m-2' style={{ color: 'gray' }}>{productData.quantity} sản phẩm có sẵn</span>

                                    </div>
                                    <div className="rate d-flex">
                                        <div className="stars">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rate-number text-end">
                                            <p>21 đánh giá</p>
                                        </div>
                                    </div>
                                    {productData?.quantity > 0 ?
                                        (<div className="buttons d-flex ">
                                            {username !== null ?
                                                (<button className="addCart" onClick={() => { handleAddCartItem(productData) }}>

                                                    <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                                </button>) :
                                                (<button className="addCart" data-bs-target="#exampleModal"
                                                    data-bs-toggle="modal">
                                                    <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                                </button>)
                                            }
                                        </div>) :

                                        <div className="buttons d-flex ">
                                            <button className="addCart-empty">
                                                <i className="fas fa-exclamation-circle" /> Hết hàng
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="uudai">
                                <p className="uudai-title">Ưu đãi thêm</p>
                                <p>Trừ 5% cho khách hàng đăng kí</p>
                                <p>Trừ 5% cho thanh toán qua thẻ</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-intro">
                        <ul className="nav nav-tabs m-unset" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    aria-controls="home_detail"
                                    aria-selected="true"
                                    className="nav-link active"
                                    data-bs-target="#home_detail"
                                    data-bs-toggle="tab"
                                    id="home_detail-tab"
                                    role="tab"
                                    type="button"
                                >

                                    Miêu tả
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    aria-controls="profile"
                                    aria-selected="false"
                                    className="nav-link"
                                    data-bs-target="#profile"
                                    data-bs-toggle="tab"
                                    id="profile-tab"
                                    role="tab"
                                    type="button"
                                >
                                    Thông số
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    aria-controls="contact"
                                    aria-selected="false"
                                    className="nav-link"
                                    data-bs-target="#contact"
                                    data-bs-toggle="tab"
                                    id="contact-tab"
                                    role="tab"
                                    type="button"
                                >
                                    Đánh giá &amp; Nhận xét
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                aria-labelledby="home_detail-tab"
                                className="tab-pane fade show active"
                                id="home_detail"
                                role="tabpanel"
                            >

                                {productData?.description}
                            </div>
                            <div
                                aria-labelledby="profile-tab"
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                            >
                                <ul className="list-thongso">
                                    <li>Thương hiệu: {productData?.brand}</li>
                                    <li>Màu sắc: {productData?.color}</li>
                                    <li>Vật liệu: {productData?.material}</li>
                                    <li>Kích thước: {productData?.size}</li>
                                    <li>Xuất xứ: {productData?.countryOfOrigin}</li>

                                </ul>
                            </div>
                            <div
                                aria-labelledby="contact-tab"
                                className="tab-pane fade"
                                id="contact"
                                role="tabpanel"
                            >
                                <div className="judge">
                                    <div className="container">
                                        <div className=" d-flex flex-column">
                                            <p className="nhanxet">Đánh giá &amp; nhận xét sản phẩm</p>
                                            <div className="input d-flex flex-column">
                                                <input
                                                    className="input-name"
                                                    placeholder="Họ và Tên"
                                                    type="text"
                                                />
                                                <input
                                                    className="input-name"
                                                    placeholder="Số điện thoại"
                                                    type="text"
                                                />
                                                <textarea
                                                    cols={30}
                                                    id=""
                                                    name=""
                                                    placeholder="Chia sẻ về sản phẩm"
                                                    rows={10}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="send">
                                            <p className="feel">Bạn cảm thấy như thế nào?</p>
                                            <div className="stars-judge d-flex justify-content-center">
                                                <div className="star1">
                                                    <i className="fas fa-star" />
                                                    <p>Rất tệ</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star" />
                                                    <p>Tệ</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star" />
                                                    <p>Bình thường</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star" />
                                                    <p>Tốt</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star" />
                                                    <p>Rất tốt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit text-center">
                                            <button className="btn">Gửi đánh giá</button>
                                        </div>
                                        <hr className="hr" />
                                        <div className="comment text-start">
                                            <div className="row">
                                                <div className="col-1">
                                                    <img alt="" src="/img/portrait-user/2.jpg" />
                                                </div>
                                                <div className="col-11">
                                                    <div className="comment-name">Lê Văn Chính</div>
                                                    Một sản phẩm tốt
                                                    <div className="stars">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-1">
                                                    <img alt="" src="/img/portrait-user/1.jpg" />
                                                </div>
                                                <div className="col-11">
                                                    <div className="comment-name">Nguyễn Văn Minh</div>
                                                    Sản phẩm quá tệ
                                                    <div className="stars">
                                                        <i className="fas fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SuggestProduct productData={productData} />

                </div>
            </div>
           
        </>

    );
};