import { useEffect, useState } from 'react';
import './history.css'
import { FormatPrice } from '../../service/FormatPrice';
import 'react-toastify/dist/ReactToastify.css';
import { apiGetAllOrderByCustomer } from '../../service/OrdersService';
import { apiGetOrderDetailByOrder } from '../../service/OrderDetailService';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';
import {format} from "date-fns";
import { toDate } from 'date-fns-tz';
export const HistoryBuyProduct = () => {

    const [order, setOrder] = useState([]);
    const [orderData, setOrderData] = useState();
    const [orderDetails, setOrderDetails] = useState([])

    const fetchOrderList = async () => {
        const result = await apiGetAllOrderByCustomer(0);
        setOrder(result)
    }
    useEffect(() => {
        document.title = "Lịch sử đặt hàng"
        fetchOrderList();
    }, [])

    useEffect(() => {
        if (order?.content?.length) {
            setOrderData(order.content[0])
            handleChangeOrderDetail(order.content[0])
        }
    }, [order])

    const handleChangeOrderDetail = async (orderDetail) => {
        const result = await apiGetOrderDetailByOrder(orderDetail.idOrder);
        setOrderDetails(result)
        setOrderData(orderDetail)
    }

    const handlePageClick = async (currentPage) => {
        const data = await apiGetAllOrderByCustomer(currentPage.selected);
        setOrder(data)
    };

    return (
        <>
            <div className="banner-history">
                <div className="inner">
                    <div className="container text-center">
                        <p className="title-heading">Lịch sử mua hàng</p>
                        <p className="intro">
                        <a href="/">Trang chủ</a>/<a>Lịch sử mua hàng</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <h1 className='name mb-4' style={{ textAlign: 'center', fontSize: 24 }}>Lịch sử đặt hàng</h1>
                        <div className='col-lg-7'>
                            <table className="table">
                                <thead>

                                    <tr className="text-center">
                                        <th>STT</th>
                                        <th>Mã Đơn Hàng</th>
                                        <th>Ngày đặt hàng</th>
                                        <th>Tổng giá</th>
                                        <th>Đơn hàng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="cart-empty tbody text-center">
                                    {order?.content?.map((order, index) => (
                                        <tr key={order.idOrder}>
                                            <td className="name" data-label="STT">
                                                <p>{index + 1}</p>
                                            </td>
                                            <td className="name" data-label="Mã Đơn Hàng">
                                                <p>DH-{order?.idOrder}</p>
                                            </td>
                                            <td className="name" data-label="Ngày đặt hàng">
                                                <p>{format(toDate(order?.bookingDate),"dd/MM/yyyy")}</p>
                                            </td>
                                            <td className="name" data-label="Tổng giá">
                                                <p>{FormatPrice(order?.totalPayment)}<span> đ</span></p>
                                            </td>
                                            <td className="name" data-label="Đơn hàng">
                                                <p className={`detail-order ${order?.idOrder === orderData?.idOrder ? 'active' : ''}`} onClick={() => {
                                                    handleChangeOrderDetail(order)
                                                }}>Chi tiết</p>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        {orderDetails?.length == 0 ?
                
                            <div className="col-lg-5">
                                <img src="https://theme.hstatic.net/1000406288/1000797845/14/slideshow_4.jpg?v=150" />
                            </div>

                            : (

                                <div className="col-lg-5 history-detail">
                                    <p className="order-heading text-center">Chi tiết lịch sử đặt hàng số DH-{orderData?.idOrder} </p>
                                    <div className="order">
                                        {orderDetails.map((orderDetail, index) => (
                                            <div className="order-info">
                                                <div className="order-info mb-3">
                                                    <div className="row align-items-center">
                                                        <div className="col-3">
                                                            <img src={orderDetail?.image} height={60} />
                                                        </div>
                                                        <div className="col-9">
                                                            <div>

                                                            {orderDetail?.nameProduct}
                                                            </div>
                                                        <Link className="col-3 product-detail" to={`/detail/${orderDetail?.idProduct}`}>Mua lại</Link>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="row">
                                                        <div className="col-4">Giá:</div>
                                                        <div className="col-8 text-end">{FormatPrice(orderDetail?.salePrice)}<span> đ</span></div>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="row">
                                                        <div className="col-4">Số lượng:</div>
                                                        <div className="col-8 text-end">{orderDetail?.quantityOrder}</div>
                                                    </div>
                                                </div>
                                                <div className="tamtinh">
                                                    <div className="row">
                                                        <div className="col-4">Tạm tính: </div>
                                                        <div className="col-8 text-end order-price">{FormatPrice(orderDetail?.salePrice * orderDetail?.quantityOrder)}<span> đ</span></div>
                                                    </div>
                                                </div>
                                                <hr />

                                            </div>
                                        ))}

                                        <div className="total">
                                            <div className="row">
                                                <div className="col-4">Tổng cộng:</div>
                                                <div className="col-8 text-end tongtatca">{FormatPrice(orderData?.totalPayment)}<span> đ</span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        {order && (
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageCount={order.totalPages}
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


        </>

    );
}