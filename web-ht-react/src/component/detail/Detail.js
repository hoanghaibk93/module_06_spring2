import './detail.css';

export const Detail = () => {
    return (
        <>
            <div className="banner">
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
                                    alt=""
                                    href="img/sofa/sofa3/sofa3.1.webp"
                                    src="img/sofa/sofa3/sofa3.1.webp"
                                />
                                <div className="row">
                                    <div className="col-4">
                                        <img
                                            alt=""
                                            href="img/sofa/sofa3/sofa3.2.webp"
                                            src="img/sofa/sofa3/sofa3.2.webp"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            alt=""
                                            href="img/sofa/sofa3/sofa3.3.webp"
                                            src="img/sofa/sofa3/sofa3.3.webp"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <img
                                            alt=""
                                            href="img/sofa/sofa3/sofa3.4.webp"
                                            src="img/sofa/sofa3/sofa3.4.webp"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-info">
                                <div className="product-info">
                                    <p className="name-product">Sofa Sven Charme Tan</p>
                                    <div className="price-product text-center d-flex align-items-center">
                                        <p className="price">14.500.000 đ</p>
                                        {/* <p class="root-price">4.000.000 đ</p> */}
                                    </div>
                                    <p className="text-intro">
                                        Một chiếc bàn nhỏ gọn phù hợp với phong cách đơn giản nhưng đầy
                                        tinh tế và sang trọng.
                                    </p>
                                    <div className="soluong d-flex align-items-center">
                                        <p className="sl-text">Số lượng: </p>
                                        <i className="fas fa-plus"/>
                                        <input type="text" defaultValue={1}/>
                                        <i className="fas fa-minus"/>
                                    </div>
                                    <div className="rate d-flex">
                                        <div className="stars">
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="far fa-star"/>
                                        </div>
                                        <div className="rate-number text-end">
                                            <p>12 đánh giá</p>
                                        </div>
                                    </div>
                                    <div className="buttons d-flex ">
                                        <button className="addCart">
                                            <i className="fas fa-cart-plus"/> Thêm vào giỏ
                                        </button>
                                        {/* <button class="buyNow">Mua ngay</button> */}
                                    </div>
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
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    aria-controls="home"
                                    aria-selected="true"
                                    className="nav-link active"
                                    data-bs-target="#home"
                                    data-bs-toggle="tab"
                                    id="home-tab"
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
                                aria-labelledby="home-tab"
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                            >
                                Những năm 50 đã nhắn tin - họ đã trở lại. Ghế Svelti mang tính biểu
                                tượng của chúng tôi đặt một góc quay hiện đại vào một thiết kế cổ
                                điển giữa thế kỷ, khiến nó trở thành chiếc ghế trong nhà hoặc ngoài
                                trời hoàn hảo. Đa năng, dễ chăm sóc và cũng dễ dàng cho mắt. Ghế
                                được bán và vận chuyển theo cặp. Giá được hiển thị trên mỗi ghế. 282
                                / 5000 Một diện mạo hiện đại duyên dáng giữa thế kỷ được đặt trong
                                đá. Chân gỗ chắc chắn được bao phủ bởi một phiến đá cẩm thạch trang
                                nhã để tạo nên vẻ ngoài gọn gàng, nhỏ gọn, hoàn hảo cho không gian
                                nhỏ. Đó là một thiết kế cổ điển sẽ chuyển đổi qua bất kỳ phong cách
                                chỗ ngồi nào. Trộn và kết hợp với bàn gỗ rắn.
                            </div>
                            <div
                                aria-labelledby="profile-tab"
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                            >
                                <ul className="list-thongso">
                                    <li>Trọng lượng: 50kg</li>
                                    <li>
                                        Ghế được bán và vận chuyển theo cặp. Giá được hiển thị trên mỗi
                                        ghế
                                    </li>
                                    <li>Polypropylene đúc chất lượng cao</li>
                                    <li>Thích hợp cho sử dụng trong nhà và ngoài trời</li>
                                    <li>Yêu cầu lắp ráp đơn giản (khoảng 15 phút)</li>
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
                                                    <i className="fas fa-star"/>
                                                    <p>Rất tệ</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star"/>
                                                    <p>Tệ</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star"/>
                                                    <p>Bình thường</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star"/>
                                                    <p>Tốt</p>
                                                </div>
                                                <div className="star1">
                                                    <i className="fas fa-star"/>
                                                    <p>Rất tốt</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit text-center">
                                            <button className="btn">Gửi đánh giá</button>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="comment text-start">
                                            <div className="row">
                                                <div className="col-1">
                                                    <img alt="" src="img/portrait-user/comment1.jpg"/>
                                                </div>
                                                <div className="col-11">
                                                    <div className="comment-name">Lê Văn Chính</div>
                                                    Một sản phẩm tốt
                                                    <div className="stars">
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                        <i className="fas fa-star"/>
                                                        <i className="far fa-star"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-1">
                                                    <img alt="" src="img/portrait-user/user2.png"/>
                                                </div>
                                                <div className="col-11">
                                                    <div className="comment-name">Nguyễn Văn Minh</div>
                                                    Sản phẩm quá tệ
                                                    <div className="stars">
                                                        <i className="fas fa-star"/>
                                                        <i className="far fa-star"/>
                                                        <i className="far fa-star"/>
                                                        <i className="far fa-star"/>
                                                        <i className="far fa-star"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="suggest">
                        <div className="suggest-heading">Sản phẩm gợi ý</div>
                        <div className="slider">
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
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                            </div>
                                            <div className="rate-number">
                                                <p>16 đánh giá</p>
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
                                <div className="discount">-20%</div>
                            </div>
                            <div className="product">
                                <a href="">
                                    <img
                                        alt=""
                                        className="product-img"
                                        src="img/ban/ban2/ban2.1.webp"
                                    />
                                    <div className="product-info">
                                        <p className="name-product text-center">
                                            Bàn hình bầu dục Lenia Walnut
                                        </p>
                                        <div className="price-product text-center d-flex align-items-center">
                                            <p className="price">3.200.000 đ</p>
                                            {/* <p class="root-price">300.000 đ</p> */}
                                        </div>
                                        <div className="rate d-flex">
                                            <div className="stars">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="far fa-star"/>
                                            </div>
                                            <div className="rate-number">
                                                <p>8 đánh giá</p>
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
                            </div>
                            <div className="product">
                                <a href="">
                                    <img alt="" className="product-img" src="img/ge/ge2/ge2.1.webp"/>
                                    <div className="product-info">
                                        <p className="name-product text-center">
                                            Ghế Nosh Grey Walnut{" "}
                                        </p>
                                        <div className="price-product text-center d-flex align-items-center">
                                            <p className="price">1.500.000 đ</p>
                                            <p className="root-price">1.700.000 đ</p>
                                        </div>
                                        <div className="rate d-flex">
                                            <div className="stars">
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="fas fa-star"/>
                                                <i className="far fa-star"/>
                                            </div>
                                            <div className="rate-number">
                                                <p>17 đánh giá</p>
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
                            <div className="product">
                                <a href="">
                                    <img
                                        alt=""
                                        className="product-img"
                                        src="img/ban/ban4/ban4.1.webp"
                                    />
                                    <div className="product-info">
                                        <p className="name-product text-center">
                                            Bàn Amoeba Wild Walnut
                                        </p>
                                        <div className="price-product text-center d-flex align-items-center">
                                            <p className="price">2.200.000 đ</p>
                                            {/* <p class="root-price">300.000 đ</p> */}
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
                                                <p>12 đánh giá</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};