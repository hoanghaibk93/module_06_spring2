import './informationPersonal.css'
import { apiFindCustomerByUserName } from '../../service/CustomerService';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import { toDate } from 'date-fns-tz';
export const InformationPersonal = () => {
    const [customerData, setCustomerData] = useState();
    const username = localStorage.getItem("username")
    const fetchCustomerData = async () => {
        const data = await apiFindCustomerByUserName(username)
        setCustomerData(data);
    }
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Thông tin cá nhân"
        fetchCustomerData();
    }, [])
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <>
            <div className="banner-history">
                <div className="inner">
                    <div className="container text-center">
                        <p className="title-heading">Tài khoản của tôi</p>
                        <p className="intro">
                            <a href="/">Trang chủ</a>/<a>Tài khoản của tôi</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="container">
                    <div className="row profile">

                        <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="profile-userpic">
                                    <img
                                        alt="Thông tin cá nhân"
                                        className="img-responsive mt-2"
                                        src="https://mimosawedding.net/wp-content/uploads/2022/07/cach-chup-anh-chan-dung-9.jpg"
                                    />
                                </div>
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">{customerData?.nameCustomer}</div>

                                </div>
                                <div className="profile-userbuttons">
                                    <Link to="/">
                                        <button className="button-modal2" type="button">
                                            Trang chủ
                                        </button>
                                    </Link>
                                    <button className="button-modal2" type="button" onClick={handleLogout}>
                                        Đăng xuất
                                    </button>
                                </div>
                                <div className="profile-usermenu">
                                    <ul className="nav">
                                        <li>
                                            <a href="">
                                                <i className="fas fa-lock m-3" />
                                                Cập nhật thông tin cá nhân
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fas fa-edit m-3"></i>
                                                Thay đổi mật khẩu
                                            </a>
                                        </li>
                                        <li>
                                            <Link to={`/product/history`} >

                                                <i className="fas fa-history m-3" /> Lịch sử đặt hàng
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">


                            <div className="wrapper">

                                <div className="content">
                                    <div className="container bg-white pt-5">
                                        <div className="row px-3 pb-2">
                                            <h1 className="text-center info">Thông tin cá nhân</h1>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary" />
                                                <h4 className="font-weight-bold">Địa chỉ</h4>
                                                <p>{customerData?.address}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-phone-alt mb-3 text-primary" />
                                                <h4 className="font-weight-bold">Số điện thoại</h4>
                                                <p>{customerData?.phoneNumber}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="far fa-2x fa-envelope mb-3 text-primary" />
                                                <h4 className="font-weight-bold">Email</h4>
                                                <p>{customerData?.email}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="far fa-2x fa-heart mb-3 text-primary" />
                                                <h4 className="font-weight-bold">Ngày sinh nhật</h4>
                                                <p>{customerData?.dateOfBirth}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-user mb-3 text-primary" />
                                                <h4 className="font-weight-bold">Tài khoản</h4>
                                                <p>{username}</p>
                                            </div>
                                            <div className="col-sm-4 text-center mb-3">
                                                <i className="fa fa-2x fa-transgender mb-3 text-primary" />
                                                <h4 className="font-weight-bold">Giới tính</h4>
                                                <p>{customerData?.gender}</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}