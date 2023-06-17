const AllProduct = () => {

    return (
        <div className="all-product text-center">
                        <div className="container">
                            <p className="all-heading">Sản phẩm</p>
                            <p className="all-intro">Tất cả sản phẩm có sẵn tại cửa hàng</p>
                            <div className="products">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        alt=""
                                                        className="product-img"
                                                        src="img/sofa/sofa4/sofa4.1.webp"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Sofa gỗ Olio xanh
                                                        </p>
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
                                                            <p className="price">15.600.000 đ</p>
                                                            {/* <p class="root-price">1.500.000 đ</p> */}
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
                                                {/* <div class="discount">
                              -20%
                          </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        alt=""
                                                        className="product-img"
                                                        src="img/ban/ban1/ban1.1.webp"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Bàn cà phê Mara Walnut
                                                        </p>
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
                                                            <p className="price">3.700.000 đ</p>
                                                            <p className="root-price">4.000.000 đ</p>
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
                                                                <p>21 đánh giá</p>
                                                            </div>
                                                        </div>
                                                        <div className="buttons d-flex ">
                                                            <button className="addCart" onClick="">
                                                                <i className="fas fa-cart-plus"/> Thêm vào giỏ
                                                            </button>
                                                            {/* <button class="buyNow">Mua ngay</button> */}
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="discount">-20%</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        alt=""
                                                        className="product-img"
                                                        src="img/sofa/sofa2/sofa2.1.webp"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Ghế sofa màu trắng Abisko
                                                        </p>
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
                                                            <p className="price">20.400.000 đ</p>
                                                            <p className="root-price">25.000.000 đ</p>
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
                                                                <p>15 đánh giá</p>
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
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
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
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        alt=""
                                                        className="product-img"
                                                        src="img/ban/ban3/ban3.1.webp"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Bàn Narro Black Side
                                                        </p>
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
                                                            <p className="price">2.200.000 đ</p>
                                                            <p className="root-price">2.500.000 đ</p>
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
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        alt=""
                                                        className="product-img"
                                                        src="img/ge/ge3/ge3.1.webp"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Ghế salon da đen Lento
                                                        </p>
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
                                                            <p className="price">1.700.000 đ</p>
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
                                        <div className="col-lg-3 col-md-6 col-12 nopadding">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        alt=""
                                                        className="product-img"
                                                        src="img/sofa/sofa3/sofa3.1.webp"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Sofa Sven Charme Tan
                                                        </p>
                                                        <div
                                                            className="price-product text-center d-flex align-items-center">
                                                            <p className="price">14.500.000 đ</p>
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
                            <a href="">
                                <button className="all-button">Xem thêm</button>
                            </a>
                        </div>
                    </div>
    )
}
export default AllProduct;