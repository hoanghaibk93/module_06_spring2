import { useEffect, useState } from 'react';
import './cart.css'
import { apiDeleteCart, apiGetAllCart, apiGetCart, apiUpdateCart } from '../../service/CartService';
import { useContext } from 'react';
import { ValueIconCartContext } from '../../service/ValueIconCartProvider';
import { FormatPrice } from '../../service/FormatPrice';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export const Cart = () => {
    const [cartData, setCartData] = useState();
    const [cartList, setCartList] = useState([]);
    const { valueIconCart, setValueIconCart } = useContext(ValueIconCartContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDisabledOne, setIsDisabledOne] = useState(false);
    const navigate = useNavigate();

    const fetchCartList = async () => {
        try {
            const result = await apiGetAllCart();
            setCartList(result);
        } catch (error) {
            if (error.response.status === 401) {
                navigate('/')
                toast.error("Bạn không có quyền truy cập, vui lòng đăng nhập trước khi quy cập", { autoClose: 3000 })
            }
        }
    }
    const fetchCartData = async (id) => {
        try {
            const result = await apiGetCart(id);
            setCartData(result || [])
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleDeleteCart = async () => {
        try {
            const data = await apiDeleteCart(cartData.idCart);
            console.log('data', data);
            if (data?.status === 200) {
                fetchCartList();
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeCartQuantity = (value, cart) => {
        const updateQuantity = (qt) => {
            return value === 'increase' ? qt + 1 : value === 'descrease' ? qt - 1 : "0" ? 1 : +value
        }
        const cartListAfterChange = [...cartList]
            .map((it) => {
                if (it?.idCart === cart?.idCart) {
                    if ((value === 'increase') && it?.quantity >= cart?.product?.quantity) {

                        toast.error(`Chỉ còn ${cart?.product?.quantity} sản phẩm có sẵn `, { autoClose: 3000 });
                        updateCartItem({ ...cart, quantity: cart?.product?.quantity });
                        return ({ ...it, quantity: cart?.product?.quantity })
                    } else if (value >= cart?.product?.quantity) {
                        toast.error(`Chỉ còn ${cart?.product?.quantity} sản phẩm có sẵn `, { autoClose: 3000 });
                        updateCartItem({ ...cart, quantity: cart?.product?.quantity });
                        return ({ ...it, quantity: cart?.product?.quantity })
                    } else if (value === 'descrease' && it.quantity < 2) {
                        updateCartItem({ ...cart, quantity: 1 });
                        return ({ ...it, quantity: updateQuantity(it.quantity + 1) })
                    } else {
                        updateCartItem({ ...cart, quantity: updateQuantity(cart.quantity) });
                        return ({ ...it, quantity: updateQuantity(it.quantity) })

                    }
                } else {
                    return it
                }
            })
        setCartList(cartListAfterChange)
    }
    const updateCartItem = async (cart) => {
        await apiUpdateCart(cart)
    }

    useEffect(() => {
        document.title = "Giỏ hàng"
        fetchCartList();
    }, [])

    useEffect(() => {
        const countIconCart = cartList?.map(item => item.quantity).reduce((a, b) => a + b, 0);
        setValueIconCart(countIconCart)
    }, [cartList])

    const totalPrice = () => {
        const value = cartList.map((it) => (it.quantity * it.product.salePrice)).reduce((a, b) => a + b, 0)
        return value;
    }

    return (
        <>
            <div className="banner-cart">
                <div className="inner">
                    <div className="container text-center">
                        <p className="title-heading">GIỎ HÀNG</p>
                        <p className="intro">
                            <a href="/">Trang chủ</a>/<Link to={"/cart"}>Giỏ hàng</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="cart">
                <div className="container">
                    {cartList?.length === 0 ?
                        <div>
                            <img className='image-cart' src="https://image-us.eva.vn/upload/1-2019/images/2019-02-25/nan-nhan-tiep-theo-cua-hang-online-day-roi-vay-goi-cam-gi-ma-to-ho-ca-cho-ay-the-con-gai-dung-la-thuc-the-kho-hieu-nhat-hanh-tinh-1-1551092631-123-width900height603.jpg"></img>
                            <h6 className='search-name2'>Không có sản phẩm nào trong giỏ hàng</h6>
                            <a href='/'>
                                <button className='buy-button btn-outline-danger'>Tiếp tục mua hàng</button>
                            </a>
                            <i className="fas fa-buy" />
                        </div> : (
                            <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th>Hình ảnh</th>
                                        <th>Tên</th>
                                        <th>Giá gốc</th>
                                        <th>Giảm giá</th>
                                        <th>Số lượng</th>
                                        <th>Tạm tính</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="cart-empty tbody text-center">
                                    {cartList?.map((cart, index) => (
                                        <tr key={cart.idCart}>
                                            <td className="image" data-label="">
                                                <img alt="" src={cart?.product?.image} />
                                            </td>
                                            <td className="name" data-label="Tên">
                                                <p>{cart?.product?.nameProduct}</p>
                                            </td>
                                            <td className="price" data-label="Giá gốc">
                                                <p>{FormatPrice(cart?.product?.originalPrice)}<span> đ</span></p>
                                            </td>
                                            <td className="price">
                                                <p>{FormatPrice(cart?.product?.originalPrice - cart?.product?.salePrice)}<span> đ</span></p>
                                            </td>
                                            <td className="quantity" data-label="Số lượng">
                                                <div className="soluong d-flex align-items-center">
                                                    <i className={`fas fa-plus icon-plus ${isDisabledOne ? 'disabledOne' : ''}`} onClick={() => changeCartQuantity('increase', cart)} />
                                                    <input className="hideNumberArrows" type="number" onChange={(e) => changeCartQuantity(e.target.value, cart)} value={cart?.quantity} />
                                                    <i className={`fas fa-minus icon-minus ${isDisabled ? 'disabled' : ''}`} onClick={() => changeCartQuantity('descrease', cart)} />
                                                </div>
                                                {/* <div className='mt-1'>{cart?.product?.quantity} sản phẩm có sẳn</div> */}
                                            </td>
                                            <td className="total" data-label="Tổng">
                                                <p>{FormatPrice(cart?.quantity * cart?.product?.salePrice)}<span> đ</span></p>
                                            </td>
                                            <td className="delete" data-label="">
                                                <i onClick={() => {
                                                    fetchCartData(cart?.idCart)
                                                }} className="fas fa-times icon-delete" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal1" />
                                                <div className="modal fade" id="exampleModal1" tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog" >
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Xóa khỏi giỏ hàng</h5>

                                                            </div>
                                                            <div className="modal-body" style={{ textAlign: "left" }}>
                                                                <span>Bạn có đồng ý loại bỏ sản phẩm: </span> <span
                                                                    className="text-danger">{cartData?.product.nameProduct}</span>
                                                                <span> khỏi giỏ hàng không?</span>
                                                            </div>
                                                            <div className="modal-footer" >
                                                                <button type="button" className="button-modal"
                                                                    data-bs-dismiss="modal">Hủy
                                                                </button>
                                                                <button onClick={() => handleDeleteCart()} type="button"
                                                                    className="button-modal" data-bs-dismiss="modal">Đồng ý
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        )}
                </div>
            </div>
            {cartList?.length > 0 ? (
                <div className="thanhtoan">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="coupon align-items-center d-flex">
                                    <input
                                        className="input-coupon"
                                        placeholder="Mã giảm giá"
                                        type="text"
                                    />
                                    <button className="coupon-btn">Thêm</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="totall text-center">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-6">
                                                <p>Tổng tiền :</p>
                                                <p /> <p />
                                            </div>
                                            <div className="col-6">
                                                <p className="tongtien">{FormatPrice(totalPrice())}<span> đ</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/payment">
                                        <button className="checkout">Thanh toán</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : ''}

        </>

    );
}