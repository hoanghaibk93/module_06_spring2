import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";

import 'swiper/css';

export const Service = () => {

    return (
        <div className="service text-center">
            <div className="container">
                <div className="service-slider">
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
                        <SwiperSlide>
                            <div className="service1">
                                <div className="service-icon">
                                    <i className="fas fa-share" />
                                </div>
                                <div className="service-title">Phương thức đổi trả</div>
                                <hr className="slash" />
                                <div className="service-text">
                                    Đổi trả miễn phí trong vòng 30 ngày
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service1">
                                <div className="service-icon">
                                    <i className="fas fa-truck" />
                                </div>
                                <div className="service-title">Miễn phí giao hàng</div>
                                <hr className="slash" />
                                <div className="service-text">Áp dụng với tất cả các sản phẩm</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="service1">
                                <div className="service-icon">
                                    <i className="fas fa-headphones-alt" />
                                </div>
                                <div className="service-title">Hỗ trợ trực tuyến</div>
                                <hr className="slash" />
                                <div className="service-text">Luôn hỗ trợ về mọi câu hỏi</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service1">
                                <div className="service-icon">
                                    <i className="fab fa-angellist" />
                                </div>
                                <div className="service-title">Ưu đãi và khuyến mại</div>
                                <hr className="slash" />
                                <div className="service-text">Luôn có nhiều mã giảm giá cho bạn</div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>
    );
}