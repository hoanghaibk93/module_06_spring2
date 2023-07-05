import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiGetAllProduct } from "../../service/HomeService";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { ValueIconCartContext } from '../../service/ValueIconCartProvider';
import { apiCreateCart } from "../../service/CartService";
import { FormatPrice } from "../../service/FormatPrice";
import { Link, useNavigate } from "react-router-dom";
import './allProduct.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const fetchProducts = async () => {
        const data = await apiGetAllProduct();
        console.log(data)
        setProducts(data);
    }
    const navigate = useNavigate()
    const username = localStorage.getItem("username");
    useEffect(() => {
        document.title = "Trang chủ"
        fetchProducts();
    }, [])

    const handleAddCartItem = async (product) => {
        try {
            if (username == null) {
            }
            const value = {
                quantity: 1,
                product: product
            }
            const data = await apiCreateCart(value);
            if (data?.status === 201) {
                setValueIconCart(valueIconCart + 1);
                toast.success("Sản phẩm đã được thêm vào giỏ hàng", { autoClose: 3000 });
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.error("Sản phẩm trong kho đã hết, vui lòng chọn sản phẩm khác", { autoClose: 3000 })
            }
        }
    }

    return (
        <div className="all-product text-center">
            <div className="container">
                <p className="all-heading">Sản phẩm</p>
                <p className="all-intro">Tất cả sản phẩm có sẵn tại cửa hàng</p>
                <div className="products">
                    <div className="container">
                        <Swiper
                            // slidesPerView={4}
                            grid={{
                                rows: 1,
                            }}
                            breakpoints={{

                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10

                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },
                                900: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                }
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                        >
                            {products.map(product =>
                                <SwiperSlide key={product.idProduct}>

                                    <div className="product">
                                        <Link to={`detail/${product.idProduct}`} >
                                            <img
                                                alt=""
                                                className="product-img"
                                                src={product.image}
                                            />
                                        </Link>
                                        <div className="product-info">
                                            <Link to={`detail/${product.idProduct}`} >
                                                <p className="name-product text-center">
                                                    {product.nameProduct}
                                                </p>
                                                <div
                                                    className="price-product text-center d-flex align-items-center">
                                                    <p className="price">{FormatPrice(product?.originalPrice)}<span> đ</span></p>
                                                    <p className="root-price">{FormatPrice(product?.salePrice)}<span> đ</span></p>
                                                </div>

                                                <div className="rate d-flex">
                                                    <div className="stars">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rate-number">
                                                        <p>21 đánh giá</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            {product?.quantity > 0 ?
                                                (<div className="buttons d-flex ">
                                                    {username !== null ?
                                                        (<button className="addCart" onClick={() => { handleAddCartItem(product) }}>

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
                                        {product?.originalPrice != product?.salePrice ? (
                                            <div className="discount">{(-(product?.originalPrice - product?.salePrice) / product.originalPrice * 100).toFixed(0)}<span>%</span></div>) : ''}
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>

                {/* <a href="">
                    <button className="all-button">Xem thêm</button>
                </a> */}
            </div >
        </div >
    )
}
export default AllProduct;