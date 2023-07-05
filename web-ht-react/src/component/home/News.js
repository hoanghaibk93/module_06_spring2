import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";

import 'swiper/css';

const News = () => {
    const news = [1, 2, 3, 4, 5]
    return (
        <div className="news text-center">
            <div className="container">
                <p className="feature-heading">Bảng tin</p>
                <p className="feature-intro">Tin tức về các sản phẩm nội thất</p>
                <div className="news-slider">
                    <div className="container">
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
                            {news.map(newItem => (
                            <SwiperSlide key={newItem}>
                                <div className="new news1">
                                    <a href="">
                                        <img alt="" src="img/banner/banner4.jpg" style={{height: 160}} />
                                        <div className="news-footer">
                                            <p className="news-title">
                                                ĐỒ NỘI THẤT ĐEM TỚI VẺ ĐẸP VINTAGE CHO NGÔI NHÀ
                                            </p>
                                            <div className="view-news d-flex">
                                                <div className="author">
                                                    <i className="fas fa-user-edit" />
                                                    TH Interior
                                                </div>
                                                <div className="comment-news">
                                                    <i className="fas fa-comment" />
                                                    10
                                                </div>
                                            </div>
                                        </div>
                                        <div className="date">
                                            <p>13/06/2023</p>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>

                            // <SwiperSlide>
                            // <div className="new news1">
                            //     <a href="">
                            //         <img alt="" src="img/banner/banner3.jpg" style={{height: 160}} />
                            //         <div className="news-footer">
                            //             <p className="news-title">
                            //                 CĂN HỘ ẤM ÁP NHỜ BIẾT CÁCH SỬ DỤNG NỘI THẤT
                            //             </p>
                            //             <div className="view-news d-flex">
                            //                 <div className="author">
                            //                     <i className="fas fa-user-edit" />
                            //                     TH Interior
                            //                 </div>
                            //                 <div className="comment-news">
                            //                     <i className="fas fa-comment" />
                            //                     12
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="date">
                            //             <p>14/06/2021</p>
                            //         </div>
                            //     </a>
                            // </div>

                            // </SwiperSlide>
                            // <SwiperSlide>
                            // <div className="new news1">
                            //     <a href="">
                            //         <img alt="" src="img/news/guong.jpg" />
                            //         <div className="news-footer">
                            //             <p className="news-title">
                            //                 KIỂU TỦ GƯƠNG VỪA XINH VỪA TIỆN CHO NHÀ CHẬT HẸP
                            //             </p>
                            //             <div className="view-news d-flex">
                            //                 <div className="author">
                            //                     <i className="fas fa-user-edit" />
                            //                     TH Interior
                            //                 </div>
                            //                 <div className="comment-news">
                            //                     <i className="fas fa-comment" />
                            //                     10
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="date align-items-center">
                            //             <p>15/06/2023</p>
                            //         </div>
                            //     </a>
                            // </div>

                            // </SwiperSlide>
                            // <SwiperSlide>
                            // <div className="new news1">
                            //     <a href="">
                            //         <img alt="" src="img/news/moctreo.jpg" />
                            //         <div className="news-footer">
                            //             <p className="news-title">
                            //                 MÓC TREO ĐỒ ĐÀN ACCORDION TREO ĐÂU CŨNG THÀNH XINH
                            //             </p>
                            //             <div className="view-news d-flex">
                            //                 <div className="author">
                            //                     <i className="fas fa-user-edit" />
                            //                     TH Interior
                            //                 </div>
                            //                 <div className="comment-news">
                            //                     <i className="fas fa-comment" />
                            //                     19
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="date">
                            //             <p>16/06/2023</p>
                            //         </div>
                            //     </a>
                            // </div>

                            // </SwiperSlide>
                            // <SwiperSlide>
                            // <div className="new news1">
                            //     <a href="">
                            //         <img alt="" src="img/news/tu.png" />
                            //         <div className="news-footer">
                            //             <p className="news-title">
                            //                 ĐI TÌM GỖ ĐÓNG TỦ VẠN NĂNG GHÉP ĐƯỢC MUÔN VÀN KIỂU
                            //             </p>
                            //             <div className="view-news d-flex">
                            //                 <div className="author">
                            //                     <i className="fas fa-user-edit" />
                            //                     TH Interior
                            //                 </div>
                            //                 <div className="comment-news">
                            //                     <i className="fas fa-comment" />6
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="date">
                            //             <p>17/06/2023</p>
                            //         </div>
                            //     </a>
                            // </div>
                            // </SwiperSlide>
                             ))} 
                        </Swiper>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default News;