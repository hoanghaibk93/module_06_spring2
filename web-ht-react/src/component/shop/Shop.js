import { useEffect, useState } from 'react';
import AllProductList from './AllProductList';
import './Shop.css'
import ReactPaginate from "react-paginate";
import { apiGetAllProductByType, apiGetAllProductType, apiGetAllProducts, apiGetAllRoomType } from '../../service/ShopService';
import { da } from 'date-fns/locale';
import { event } from 'jquery';
export const Shop = () => {
    const [productTypes, setProductTypes] = useState([]);
    const [roomTypes, setRoomTypes] = useState([]);
    const [productList, setProductList] = useState(null);
    const [searchAndPage, setSearchAndPage] = useState({
        page: 0,
        product_type: 0,
        room_type: 0
    })

    const fetchProductTypes = async () => {
        const data = await apiGetAllProductType();
        setProductTypes(data);
    }
    const featchRoomType = async () => {
        const data = await apiGetAllRoomType();
        setRoomTypes(data);
    }
    useEffect(() => {
        fetchProductTypes()
        featchRoomType();
    }, [])

   


    const handlePageClick = async (event) => {
        console.log(event.selected);
        setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
    }

    const handleTypeRoomChange = (event) => {
        console.log(event.target.value);
        console.log(searchAndPage);
        setSearchAndPage((prev) => ({ ...prev, room_type: +event.target.value }))
    }
    const handleTypeProductChange = (event) => {
        console.log(event.target.value);
        console.log(searchAndPage);
        setSearchAndPage((prev) => ({ ...prev, product_type: +event.target.value }))
    }

    const formatPrice = (n) => {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
        });
    };
    const fetchProductList = async () => {
        const data = await apiGetAllProductByType(searchAndPage);
        console.log(data);
        setProductList(data);
    }
    useEffect(() => {
        console.log(searchAndPage);
        fetchProductList()
    }, [searchAndPage])


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
                                    {/* <div className="loaihang">

                                        <div className="form-label">
                                            <select
                                                aria-label="Default select example"
                                                className=" type form-select"
                                                name=""
                                                onChange={handleSortChange}
                                            >
                                                <option value="idProduct">Sắp xếp theo</option>
                                                <option value="nameProduct">Tên sản phẩm</option>
                                                <option value="brand">Tên Thương hiệu</option>
                                                <option value="color">Màu sắc</option>
                                                <option value="countryOfOrigin">Quốc gia</option>
                                                <option value="originalPrice">Giá</option>

                                            </select>
                                        </div>

                                    </div> */}

                                    <div className="loaihang">
                                        
                                        <div className="form-label">
                                            <select
                                                aria-label="Default select example"
                                                className=" type form-select"
                                                name=""
                                                onChange={handleTypeRoomChange}
                                            >
                                                <option value="0" selected="">Loại phòng</option>
                                                {roomTypes.map((room, index) => (
                                                    <option key={index} value={room.idRoomType}>{room.nameRoomType}</option>
                                                ))}

                                            </select>
                                        </div>
                                       
                                    </div>
                                    <div className="loaihang">
                                    
                                        <div className="form-label">
                                            <select
                                                aria-label="Default select example"
                                                className=" type form-select"
                                                name=""
                                                onChange={handleTypeProductChange}
                                            >
                                                <option value="0" selected="">Loại sản phẩm</option>
                                                {productTypes.map((pro, index) => (
                                                    <option key={index} value={pro.idProductType}>{pro.nameProductType}</option>
                                                ))}

                                            </select>
                                        </div>
                                    
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
                                        {productList &&
                                            productList.content.map((pro, index) => (
                                                <div key={index} className="col-lg-4 col-md-6  nopadding ban">
                                                    <div className="product">
                                                        <a href="">
                                                            <img
                                                                src={pro.image}
                                                                alt=""
                                                                className="product-img"
                                                            />
                                                            <div className="product-info">
                                                                <p className="name-product text-center">
                                                                    {pro.nameProduct}
                                                                </p>
                                                                <div className="price-product text-center d-flex align-items-center">
                                                                    <p className="price">{formatPrice(pro.originalPrice)}<span> đ</span></p>
                                                                    <p className="root-price">{formatPrice(pro.salePrice)}<span> đ</span></p>
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
                                                        {pro.originalPrice != pro.salePrice ? (
                                                            <div className="discount">{(-(pro.originalPrice - pro.salePrice) / pro.originalPrice * 100).toFixed(0)}<span>%</span></div>) : ''}
                                                    </div>
                                                </div>
                                            ))};
                                    </div>
                                </div>
                                {productList && (
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=">"
                                        onPageChange={handlePageClick}
                                        pageCount={productList.totalPages}
                                        previousLabel="< "
                                        containerClassName="pagination"
                                        pageLinkClassName="page-num"
                                        nextLinkClassName="page-num"
                                        previousLinkClassName="page-num"
                                        activeClassName="active"
                                        disabledClassName="d-none"
                                    />
                                )}
                            </div>

                        </div>
                    </div>
                </div>

            </>


        </>
    );
};