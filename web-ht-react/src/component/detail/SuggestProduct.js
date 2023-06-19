import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";

import 'swiper/css';


const SuggestProduct = () => {
    const suggestProduct = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="suggest">
            <div className="suggest-heading">Sản phẩm gợi ý</div>
            <div className="slider">
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
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {suggestProduct.map(product => (
                        <SwiperSlide>
                            <div className="product">
                                <a href="">
                                    <img
                                        alt=""
                                        className="product-img"
                                        src="img/ban/ban3/ban3.1.webp"
                                    />
                                    <div className="product-info">
                                        <p className="name-product text-center">Bàn Narro Black Side</p>
                                        <div className="price-product text-center d-flex align-items-center">
                                            <p className="price">2.200.000 đ</p>
                                            <p className="root-price">2.500.000 đ</p>
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
                                                <p>16 đánh giá</p>
                                            </div>
                                        </div>
                                        <div className="buttons d-flex ">
                                            <button className="addCart">
                                                <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                            </button>
                                            {/* <button class="buyNow">Mua ngay</button> */}
                                        </div>
                                    </div>
                                </a>
                                <div className="discount">-20%</div>
                            </div>
                        </SwiperSlide>
                    ))}
                     </Swiper>
            </div>
        </div>
    );
}
export default SuggestProduct;