export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12">
                                <img alt="" className="footer-img" src="img/LOGO4.jpg" />
                                <div className="address">
                                    <i className="fas fa-home" />
                                    70 Trần Văn Dư, Đà Nẵng
                                </div>
                                <div className="phone-footer">
                                    <i className="fas fa-phone" />
                                    (+84)816 195 246
                                </div>
                                <div className="supports">
                                    <i className="far fa-envelope" />
                                    hoanghaibk93@gmail.com
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12 cot2">
                                <h4 className="title-col2">DỊCH VỤ KHÁCH HÀNG</h4>
                                <p>
                                    <a href="">Hướng dẫn đặt mua hàng</a>
                                </p>
                                <p>
                                    <a href="">Kinh nghiệm mua hàng</a>
                                </p>
                                <p>
                                    <a href="">Đối tác và đại lý</a>
                                </p>
                                <p>
                                    <a href="">Hình thức thanh toán</a>
                                </p>
                                <p>
                                    <a href="">Mua hàng và đổi trả</a>
                                </p>
                            </div>
                            <div className="col-lg-3 col-sm-12 cot3">
                                <h4 className="title-col3">HỖ TRỢ</h4>
                                <p>
                                    <a href="">Đổi trả</a>
                                </p>
                                <p>
                                    <a href="">Chính sách bảo hành</a>
                                </p>
                                <p>
                                    <a href="">Chính sách vận chuyển</a>
                                </p>
                                <p>
                                    <a href="">Điều khoản dịch vụ</a>
                                </p>
                                <p>
                                    <a href="">Chính sách quyền riêng tư</a>
                                </p>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <h4 className="title-col4">LIKE TRÊN MẠNG XÃ HỘI</h4>
                                <div className="col4-item">
                                    <a href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="fab fa-youtube" />
                                    </a>
                                    <a href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                </div>
                                <h4 className="title-col4">ĐĂNG KÝ NHẬN TIN</h4>
                                <div className="col4-input d-flex">
                                    <input placeholder="Nhập email của bạn..." type="text" />
                                    <button>
                                        <a href="">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};