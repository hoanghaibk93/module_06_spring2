import { useEffect, useState } from 'react';
import AllProductList from './AllProductList';
import './Shop.css'
import ReactPaginate from "react-paginate";
import { apiGetAllProductByName, apiGetAllProductByType, apiGetAllProductPopular, apiGetAllProductType, apiGetAllProducts, apiGetAllRoomType } from '../../service/ShopService';
import { Link, useNavigate } from 'react-router-dom';
import { apiCreateCart } from '../../service/CartService';
import { useContext } from 'react';
import { ValueIconCartContext } from '../../service/ValueIconCartProvider';
import { FormatPrice } from '../../service/FormatPrice';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const Shop = () => {
    const [productTypes, setProductTypes] = useState([]);
    const [roomTypes, setRoomTypes] = useState([]);
    const [productList, setProductList] = useState([]);
    const [productListPopular, setProductListPolular] = useState();
    const [searchAndPage, setSearchAndPage] = useState({
        page: 0,
        sort: 'idProduct',
        product_type: 0,
        room_type: 0,
        name: ''
    })
    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const username = localStorage.getItem("username");
    const displayMaxCount = 4;
    let displayCount = 0;
    const handleAddCartItem = async (product) => {
        try {
            const value = {
                quantity: 1,
                product: product
            }
            const data = await apiCreateCart(value);
            if (data?.status === 201) {
                setValueIconCart(valueIconCart + 1);
                toast.success("Sản phẩm đã được thêm vào giỏ hàng", { autoClose: 3000 });
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.error("Sản phẩm trong kho đã hết, vui lòng chọn sản phẩm khác", { autoClose: 3000 })
            }
        }
    }
    const fetchProductPopular = async () => {
        const data = await apiGetAllProductPopular();
        setProductListPolular(data);
    }

    const fetchProductTypes = async () => {
        const data = await apiGetAllProductType();
        setProductTypes(data);
    }
    const featchRoomType = async () => {
        const data = await apiGetAllRoomType();
        setRoomTypes(data);
    }
    useEffect(() => {
        document.title = "Sản phẩm"
        fetchProductTypes()
        featchRoomType();
        fetchProductPopular();
    }, [])
    const fetchProductList = async () => {
        const data = await apiGetAllProductByType(searchAndPage);
        setProductList(data);
    }
    useEffect(() => {
        if (searchAndPage.name != "") {
            fetchProductListByName()
        } else {
            fetchProductList()
        }

    }, [searchAndPage])

    const handlePageClick = async (event) => {
        console.log(event.selected);
        setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
    }


    const handleTypeRoomChange = (event) => {
        console.log(event.target.value);
        console.log(searchAndPage);
        setSearchAndPage((prev) => ({ ...prev, room_type: +event.target.value, page: 0}))
    }
    const handleTypeProductChange = (event) => {
        console.log(event.target.value);
        console.log(searchAndPage);
        setSearchAndPage((prev) => ({ ...prev, product_type: +event.target.value, page: 0}))
    }

  
    const handleSearchByNameChange = async (event) => {
        setSearchAndPage((prev) => ({ ...prev, name: event.target.value, page: 0}))
        //  setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
        console.log(event.target.value);
    }
    const fetchProductListByName = async () => {
        const data = await apiGetAllProductByName(searchAndPage);
        setProductList(data);
    }
    const handSortByPriceDsc = async () => {
        if (searchAndPage.sort != 'salePrice') {
            setSearchAndPage((prev) => ({ ...prev, sort: 'salePrice' }))
        } else {
            setSearchAndPage((prev) => ({ ...prev, sort: 'idProduct' }))
        }
    }

    const handleSortByPriceAsc = async () => {
        if (searchAndPage.sort != 'originalPrice') {
            setSearchAndPage((prev) => ({ ...prev, sort: 'originalPrice' }))
        } else {
            setSearchAndPage((prev) => ({ ...prev, sort: 'idProduct' }))
        }
    }

    return (
        <>
            <>
                <div className="banner-shop">
                    <div className="inner">
                        <div className="container text-center">
                            <p className="title-heading">SẢN PHẨM</p>
                            <p className="intro">
                                <a href="/">Trang chủ</a>/ <Link href="/shop">Sản phẩm</Link>
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

                                </div>
                                <div className="selling-products">
                                    <p className="selling-title">Sản phẩm bán chạy</p>
                                    {productListPopular?.map((pro, index) => {
                                        if (displayCount < displayMaxCount) {
                                            displayCount++
                                            return (
                                                <Link to={`/detail/${pro.idProduct}`}>
                                                    <div className="row">
                                                        <div className="col-5 ">
                                                            <img src={pro.image} alt="" />
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="selling-name">{pro.nameProduct}</div>
                                                            <div className="selling-price">{FormatPrice(pro.salePrice)}<span> đ</span></div>
                                                            <div className="selling-star">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                        return null;
                                    })}

                                </div>
                            </div>
                            <div className="col-lg-9 col-12">
                                <div className="boloc d-flex">
                                    <div className="search-name">
                                        <input
                                            style={{}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Tìm kiếm..."
                                            onChange={handleSearchByNameChange}
                                            value={searchAndPage.name}
                                        />
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <p className={`giacao ${searchAndPage.sort === 'salePrice' ? 'active' : ''}`} onClick={handSortByPriceDsc}>
                                            <i className="fas fa-sort-amount-up" />
                                            Giá cao
                                        </p>
                                        <p className={`giathap ${searchAndPage.sort === 'originalPrice' ? 'active' : ''}`} onClick={handleSortByPriceAsc}>
                                            <i className="fas fa-sort-amount-down-alt" />
                                            Giá thấp
                                        </p>

                                    </div>
                                </div>
                                <div className="trang1 trang">
                                    <div className="row">
                                        {productList?.content?.length === 0 ?
                                            <div>
                                                <h3 className='search-name'>Tìm kiếm không có kết quả</h3>
                                                <p className='search-name2'>Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</p>
                                                <i className="fas fa-search icon-search" />
                                            </div> :
                                            productList?.content?.map((pro, index) => (
                                                <div key={index} className="col-lg-4 col-md-6 p-2  ban">
                                                    <div className="product">
                                                        <Link to={`/detail/${pro.idProduct}`}>
                                                            <img
                                                                src={pro.image}
                                                                alt=""
                                                                className="product-img"
                                                            />
                                                        </Link>
                                                        <div className="product-info">
                                                            <Link to={`/detail/${pro.idProduct}`}>
                                                                <p className="name-product text-center">
                                                                    {pro.nameProduct}
                                                                </p>
                                                                <div className="price-product text-center d-flex align-items-center">
                                                                    <p className="price">{FormatPrice(pro.salePrice)}<span> đ</span></p>
                                                                    {pro.salePrice != pro.originalPrice ? (
                                                                        <p className="root-price">{FormatPrice(pro.originalPrice)}<span> đ</span></p>
                                                                    ) : ''
                                                                    }
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
                                                            </Link>
                                                            {pro?.quantity > 0 ?
                                                                (<div className="buttons d-flex ">
                                                                    {username !== null ?
                                                                        (<button className="addCart" onClick={() => { handleAddCartItem(pro) }}>

                                                                            <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                                                        </button>) :
                                                                        (<button className="addCart" data-bs-target="#exampleModal"
                                                                            data-bs-toggle="modal">
                                                                            <i className="fas fa-cart-plus" /> Thêm vào giỏ
                                                                        </button>)
                                                                    }
                                                                </div>) :

                                                                <div className="buttons d-flex ">
                                                                    <button className="addCart-empty">
                                                                        <i className="fas fa-exclamation-circle" /> Hết hàng
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>

                                                        {pro.originalPrice != pro.salePrice ? (
                                                            <div className="discount">{(-(pro.originalPrice - pro.salePrice) / pro.originalPrice * 100).toFixed(0)}<span>%</span></div>) : ''}
                                                    </div>
                                                </div>
                                            ))}
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