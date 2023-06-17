import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";

import 'swiper/css';

const FeatureProducts = () => {
    const [currentTab,setCurrentTab]  = useState('new-product')
    const [products,setProducts]  = useState([]);
    useEffect(() => {
        // gọi api get list product by type
        const productFromApi = [1,2,3,4,5,6,7].map((pro => currentTab + pro))
        setProducts(productFromApi)
    }, [currentTab])
    return (
        

        <div className="feature-products text-center">
            <div className="container-lg">
                <div className="feature-heading">Sản phẩm nổi bật</div>
                <div className="feature-intro">
                    Các sản phẩm mới luôn có sẵn trong cửa hàng
                </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                            breakpoints= {{
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
                            {products.map(product => 
                                <SwiperSlide key={product}> 
                                    <div className="product">
                                        <a href="">
                                            <img
                                                alt=""
                                                className="product-img"
                                                src="img/ban/ban1/ban1.1.webp"
                                            />
                                            <div className="product-info">
                                                <p className="name-product text-center">
                                                    {product}
                                                </p>
                                                <div
                                                    className="price-product text-center d-flex align-items-center">
                                                    <p className="price">3.700.000 đ</p>
                                                    <p className="root-price">4000.000 đ</p>
                                                </div>
                                                <div className="rate d-flex">
                                                    <div className="stars">
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                    </div>
                                                    <div className="rate-number">
                                                        <p>21 đánh giá</p>
                                                    </div>
                                                </div>
                                                <div className="buttons d-flex ">
                                                    <button className="addCart">
                                                        <i className="fas fa-cart-plus"/> Thêm vào giỏ
                                                    </button>
                                                    {/* <button class="buyNow">Mua ngay</button> */}
                                                </div>
                                            </div>
                                        </a>
                                        <div className="discount">-16%</div>
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