const Banner = () => {
    return (
        <div className="banner text-center">
            <div className="inner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div
                                className="carousel slide"
                                data-bs-ride="carousel"
                                id="banner-carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval={3000}>
                                        <p className="banner-sub-heading">Khuyến Mãi Lớn</p>
                                        <hr className="dashed" />
                                        <h2 className="banner-heading">
                                            (Giảm tới 50% tất cả các mặt hàng trong dịp đặc biệt nhằm
                                            chi ân khách hàng đã ủng hộ chúng tôi).
                                        </h2>
                                        <a className="btn btn-white btn-animated" href="#">
                                            Chi Tiết
                                        </a>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={3000}>
                                        <p className="banner-sub-heading">
                                            THIẾT KẾ ẤN TƯỢNG, ĐỘC ĐÁO
                                        </p>
                                        <hr className="dashed" />
                                        <h2 className="banner-heading">
                                            Chúng tôi mang đến những thiết kế độc đáo cho không gian
                                            sống của bạn thêm mới mẻ
                                        </h2>
                                        <a className="btn btn-white btn-animated" href="#">
                                            Chi Tiết
                                        </a>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={3000}>
                                        <p className="banner-sub-heading">SỰ KẾT HỢP MỚI MẺ</p>
                                        <hr className="dashed" />
                                        <h2 className="banner-heading">
                                            Với những sáng tạo không ngừng, chúng tôi luôn kết hợp các
                                            sản phẩm đẹp mắt, phù hợp và ấn tượng.
                                        </h2>
                                        <a className="btn btn-white btn-animated" href="#">
                                            Chi Tiết
                                        </a>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={3000}>
                                        <p className="banner-sub-heading">PHONG CÁCH HỆN ĐẠI</p>
                                        <hr className="dashed" />
                                        <h2 className="banner-heading">
                                            Luôn cập nhập xu hướng mới nhất để đêm cho khách hàng
                                            sản
                                            phẩm tốt nhất phục vụ khách hàng
                                        </h2>
                                        <a className="btn btn-white btn-animated" href="#">
                                            Chi Tiết
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-indicators">
                                    <div
                                        aria-current="true"
                                        aria-label="Slide 1"
                                        className="indicator active"
                                        data-bs-slide-to={0}
                                        data-bs-target="#banner-carousel"
                                    >
                                        <div className="timmer" />
                                    </div>
                                    <div
                                        aria-label="Slide 2"
                                        className="indicator"
                                        data-bs-slide-to={1}
                                        data-bs-target="#banner-carousel"
                                    >
                                        <div className="timmer" />

                                    </div>
                                    <div
                                        aria-label="Slide 3"
                                        className="indicator"
                                        data-bs-slide-to={2}
                                        data-bs-target="#banner-carousel"
                                    >
                                        <div className="timmer" />
                                    </div>
                                    <div
                                        aria-label="Slide 4"
                                        className="indicator"
                                        data-bs-slide-to={3}
                                        data-bs-target="#banner-carousel"
                                    >
                                        <div className="timmer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Banner;