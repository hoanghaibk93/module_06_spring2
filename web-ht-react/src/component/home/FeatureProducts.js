import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";
import { apiGetAllProduct } from '../../service/HomeService'
import 'swiper/css';
import { apiGetAllProductBySalePrice, apiGetAllProductPopular } from "../../service/ShopService";
import { useContext } from 'react';
import { ValueIconCartContext } from '../../service/ValueIconCartProvider';
import { apiCreateCart } from "../../service/CartService";
import { FormatPrice } from "../../service/FormatPrice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const FeatureProducts = () => {

    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const [currentTab, setCurrentTab] = useState('new-product')
    const [products, setProducts] = useState([]);
    const username = localStorage.getItem("username");
    const fetchProducts = async () => {
        const data = await apiGetAllProduct();
        setProducts(data);
    }
    const fetchProductsBySalePrice = async () => {
        const data = await apiGetAllProductBySalePrice();
        setProducts(data);
    }
    const fetchProductPopular = async () => {
        const data = await apiGetAllProductPopular();
        setProducts(data);
    }
    const handleAddCartItem = async (product) => {
        try {
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

    useEffect(() => {
        if (currentTab === 'saling-product') {
            fetchProductsBySalePrice();
        } else if (currentTab === 'new-product') {
            fetchProducts();
        } else {
            fetchProductPopular();
        }
    }, [currentTab])


    return (


        <div className="feature-products text-center">
            <div className="container-lg">
                <div className="feature-heading">Sản phẩm nổi bật</div>
                <div className="feature-intro">
                    Các sản phẩm mới luôn có sẵn trong cửa hàng
                </div>
                <ul className="container-lg nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${currentTab === 'new-product' ? 'active' : ''}`}
                            onClick={() => setCurrentTab('new-product')}
                        >
                            Sản phẩm mới
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${currentTab === 'saling-product' ? 'active' : ''}`}
                            onClick={() => setCurrentTab('saling-product')}
                        >
                            Đang khuyến mại
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${currentTab === 'common-product' ? 'active' : ''}`}
                            onClick={() => setCurrentTab('common-product')}

                        >
                            Phổ biến nhất
                        </button>
                    </li>
                </ul>
                <div className="product-slider1">
                    <div className="container-lg">
                        <Swiper
                            modules={[Navigation]}
                            navigation={true}
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
                            spaceBetween={20}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {products?.map(product =>
                                <SwiperSlide key={product.idProduct}>
                                    <div className="product">
                                        <Link to={`detail/${product.idProduct}`} >
                                            <img
                                                alt=""
                                                className="product-img"
                                                src={product?.image}
                                            />
                                        </Link>
                                        <div className="product-info">
                                            <Link to={`detail/${product.idProduct}`} >
                                                <p className="name-product text-center">
                                                    {product?.nameProduct}
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
                                        {product.originalPrice != product.salePrice ? (
                                            <div className="discount">{(-(product?.originalPrice - product?.salePrice) / product.originalPrice * 100).toFixed(0)}<span>%</span></div>) : ''}
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeatureProducts;