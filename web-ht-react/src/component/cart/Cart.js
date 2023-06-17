import './cart.css'
export const Cart =()=>{
    return(
        <>
            <div className="banner">
                <div className="inner">
                    <div className="container text-center">
                        <p className="title-heading">GIỎ HÀNG</p>
                        <p className="intro">
                            <a href="">Trang chủ</a>/<a href="">Giỏ hàng</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="cart">
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr className="text-center">
                            <th>Hình ảnh</th>
                            <th>Tên</th>
                            <th>Giá gốc</th>
                            <th>Giảm giá</th>
                            <th>Số lượng</th>
                            <th>Tạm tính</th>
                        </tr>
                        </thead>
                        <tbody className="tbody text-center">
                        <tr>
                            <td className="image" data-label="">
                                <img alt="" src="img/ge/ge1/ge1.1.webp" />
                            </td>
                            <td className="name" data-label="Tên">
                                <p>Ghế gỗ</p>
                            </td>
                            <td className="price" data-label="Giá gốc">
                                <p>100.000 đ</p>
                            </td>
                            <td className="discount justify-content-end" data-label="Giảm giá">
                                <p>50.000 đ</p>
                            </td>
                            <td className="quantity" data-label="Số lượng">
                                <div className="soluong d-flex align-items-center">
                                    <i className="fas fa-plus" />
                                    <input type="number" defaultValue={1} />
                                    <i className="fas fa-minus" />
                                </div>
                            </td>
                            <td className="total" data-label="Tổng">
                                <p>50.000 đ</p>
                            </td>
                            <td className="delete" data-label="">
                                <i className="fas fa-times" />
                            </td>
                        </tr>
                        <tr>
                            <td className="image" data-label="">
                                <img alt="" src="img/ban/ban3/ban3.1.webp" />
                            </td>
                            <td className="name" data-label="Tên">
                                <p>Bàn Narro Black Side</p>
                            </td>
                            <td className="price" data-label="Giá gốc">
                                <p>2.500.000 đ</p>
                            </td>
                            <td className="discount" data-label="Giảm giá">
                                <p>2.200.000 đ</p>
                            </td>
                            <td className="quantity text-end" data-label="Số lượng">
                                <div className="soluong d-flex align-items-center">
                                    <i className="fas fa-plus" />
                                    <input type="number" defaultValue={1} />
                                    <i className="fas fa-minus" />
                                </div>
                            </td>
                            <td className="total" data-label="Tổng">
                                <p>2.200.000 đ</p>
                            </td>
                            <td className="delete justify-content-start" data-label="Xoa">
                                <i className="fas fa-times" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
                                {/*                         <div class="">*/}
                                {/*                            <div class="row">*/}
                                {/*                                <div class="col-6"><p>Giá gốc : </p></div>*/}
                                {/*                                <div class="col-6"><p class="giagoc"></p></div>*/}
                                {/*                            </div>*/}
                                {/*                        </div>*/}
                                {/*                        <div class="">*/}
                                {/*                            <div class="row">*/}
                                {/*                                <div class="col-6"><p>Giảm giá : </p></div>*/}
                                {/*                                <div class="col-6"><p class="giagoc"></p></div>*/}
                                {/*                            </div>*/}
                                {/*                        </div> */}
                                <div className="">
                                    <div className="row">
                                        <div className="col-6">
                                            <p>Tổng tiền :</p>
                                            <p /> <p />
                                        </div>
                                        <div className="col-6">
                                            <p className="tongtien">2.250.000 đ</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="">
                                    <button className="checkout">Thanh toán</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}