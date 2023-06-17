import './Shop.css'
export const Shop = () => {
    return (
        <>
            <>
                <div className="banner">
                    <div className="inner">
                        <div className="container text-center">
                            <p className="title-heading">SẢN PHẨM</p>
                            <p className="intro">
                                <a href="index.html">Trang chủ</a>/ <a href="shop.html">Sản phẩm</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-12">
                                <div className="filter">
                                    <div className="loaihang">
                                        {/*                            <div class="accordion" id="accordionExample">*/}
                                        {/*                                <div class="accordion-item">*/}
                                        <div className="form-label">
                                            <select
                                                aria-label="Default select example"
                                                className=" type form-select"
                                                name=""
                                            >
                                                <option selected="">Loại phòng</option>
                                                <option value={1}>Phòng ngủ</option>
                                                <option value={2}>Phòng khách</option>
                                                <option value={3}>Phòng bếp</option>
                                            </select>
                                        </div>
                                        {/*                                </div>*/}
                                        {/*                            </div>*/}
                                    </div>
                                    <div className="loctheogia">
                                        <div
                                            className="accordion accordion-flush"
                                            id="accordionFlushExample"
                                        >
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne"
                                                        aria-expanded="false"
                                                        aria-controls="flush-collapseOne"
                                                    >
                                                        Mức giá
                                                    </button>
                                                </h2>
                                                <div
                                                    id="flush-collapseOne"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingOne"
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div className="accordion-body text-center">
                                                        <div className="ranger-slider">
                                                            <div id="slider-range" />
                                                            <div className="price-filter d-flex align-items-center justify-content-center">
                                                                <p>Giá:</p>
                                                                <strong /> <span id="slider-range-value1" />
                                                                <span>-</span>
                                                                <strong /> <span id="slider-range-value2" />
                                                            </div>
                                                        </div>
                                                        <button className="button-filter">Lọc</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="selling-products">
                                    <p className="selling-title">Sản phẩm bán chạy</p>
                                    <hr />
                                    <a href="">
                                        <div className="row">
                                            <div className="col-5 ">
                                                <img src="img/ban/ban1/ban1.1.webp" alt="" />
                                            </div>
                                            <div className="col-7">
                                                <div className="selling-name">Bàn Mara Walnut</div>
                                                <div className="selling-price">3.700.000đ</div>
                                                <div className="selling-star">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="row">
                                            <div className="col-5 ">
                                                <img src="img/ge/ge2/ge2.1.webp" alt="" />
                                            </div>
                                            <div className="col-7">
                                                <div className="selling-name">Ghế Nosh Grey Walnut</div>
                                                <div className="selling-price">1.500.000đ</div>
                                                <div className="selling-star">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="row">
                                            <div className="col-5 ">
                                                <img src="img/sofa/sofa1/sofa1.1.webp" alt="" />
                                            </div>
                                            <div className="col-7">
                                                <div className="selling-name">Sofa gỗ Charme Tan</div>
                                                <div className="selling-price">19.500.000đ</div>
                                                <div className="selling-star">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12">
                                <div className="boloc d-flex">
                                    <div className="search-name">
                                        <input
                                            style={{}}
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Tìm kiếm..."
                                        />
                                        {/*                            <i class="fas fa-search"></i>*/}
                                    </div>
                                    <p className="giacao">
                                        <i className="fas fa-sort-amount-up" />
                                        Giá cao
                                    </p>
                                    <p className="giathap">
                                        <i className="fas fa-sort-amount-down-alt" />
                                        Giá thấp
                                    </p>
                                    {/*                        <p class="xemnhieu"><i class="fas fa-eye"></i>Xem nhiều</p>*/}
                                </div>
                                <div className="trang1 trang">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6  nopadding ban">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        src="img/ban/ban3/ban3.1.webp"
                                                        alt=""
                                                        className="product-img"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Bàn Narro Black Side
                                                        </p>
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
                                        </div>
                                        <div className="col-lg-4 col-md-6 nopadding ban">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        src="img/ban/ban2/ban2.1.webp"
                                                        alt=""
                                                        className="product-img"
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
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <div className="rate-number">
                                                                <p>8 đánh giá</p>
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
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 nopadding ge">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        src="img/ge/ge2/ge2.1.webp"
                                                        alt=""
                                                        className="product-img"
                                                    />
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
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <div className="rate-number">
                                                                <p>17 đánh giá</p>
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
                                                <div className="discount">-16%</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 nopadding ge">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        src="img/ge/ge4/ge4.1.webp"
                                                        alt=""
                                                        className="product-img"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Ghế đẩu màu đen Anco
                                                        </p>
                                                        <div className="price-product text-center d-flex align-items-center">
                                                            <p className="price">1.850.000 đ</p>
                                                            {/* <p class="root-price">300.000 đ</p> */}
                                                        </div>
                                                        <div className="rate d-flex">
                                                            <div className="stars">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <div className="rate-number">
                                                                <p>33 đánh giá</p>
                                                            </div>
                                                        </div>
                                                        <div className="buttons d-flex ">
                                                            <button className="addCart">
                                                                <i className="fas fa-cart-plus" />
                                                                Thêm vào giỏ
                                                            </button>
                                                            {/* <button class="buyNow">Mua ngay</button> */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 nopadding sofa">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        src="img/sofa/sofa3/sofa3.1.webp"
                                                        alt=""
                                                        className="product-img"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Sofa Sven Charme Tan
                                                        </p>
                                                        <div className="price-product text-center d-flex align-items-center">
                                                            <p className="price">14.500.000 đ</p>
                                                            <p className="root-price">16.000.000 đ</p>
                                                        </div>
                                                        <div className="rate d-flex">
                                                            <div className="stars">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <div className="rate-number">
                                                                <p>18 đánh giá</p>
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
                                        </div>
                                        <div className="col-lg-4 col-md-6 nopadding sofa">
                                            <div className="product">
                                                <a href="">
                                                    <img
                                                        src="img/sofa/sofa4/sofa4.1.webp"
                                                        alt=""
                                                        className="product-img"
                                                    />
                                                    <div className="product-info">
                                                        <p className="name-product text-center">
                                                            Sofa gỗ Olio xanh
                                                        </p>
                                                        <div className="price-product text-center d-flex align-items-center">
                                                            <p className="price">15.600.000 đ</p>
                                                            {/* <p class="root-price">300.000 đ</p> */}
                                                        </div>
                                                        <div className="rate d-flex">
                                                            <div className="stars">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                            <div className="rate-number">
                                                                <p>17 đánh giá</p>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination justify-content-center d-flex">
                                    <div className="btn btn-prev align-items-center d-flex">
                                        <i className="fas fa-angle-double-left" />
                                    </div>
                                    <div className="btn btn-number" page={1}>
                                        1
                                    </div>
                                    <div className="btn btn-number" page={2}>
                                        2
                                    </div>
                                    <div className="btn btn-number" page={3}>
                                        3
                                    </div>
                                    <div className="btn btn-next align-items-center d-flex">
                                        <i className="fas fa-angle-double-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </>
    );
};