import { useEffect, useState } from 'react'
import './payment.css'
import { apiDistricts, apiCitys, apiPayment } from '../../service/PaymentService';
import { event } from 'jquery';
import { apiFindCustomerByUserName } from '../../service/CustomerService';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiGetAllCart } from '../../service/CartService';
import { useNavigate } from 'react-router';
import { FormatPrice } from '../../service/FormatPrice';
import { Link } from 'react-router-dom';
export const Payment = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [customerData, setCustomerData] = useState();
  const [cartList, setCartList] = useState([]);
  const [addressShipping, setAddressShipping] = useState(null);
  const [nameCustomer, setNameCustomer] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null)
  const [note, setNote] = useState(null);
  const [selectedOption, setSelectedOption] = useState('option1');
  const username = localStorage.getItem("username")
  const navigate = useNavigate()

  const fetchApiCitys = async () => {
    const data = await apiCitys()
    setCities(data);
  }
  const fetchCustomerData = async () => {
    const data = await apiFindCustomerByUserName(username)
    setCustomerData(data);
  }
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
  const totalPrice = () => {
    const value = cartList.map((it) => (it.quantity * it.product.salePrice)).reduce((a, b) => a + b, 0)
    console.log("tong", value);
    return value;
  }

  useEffect(() => {
    document.title = "Đặt hàng"
    fetchApiCitys();
    fetchCustomerData();
    fetchCartList();
  }, [])

  const handleChangeCity = (event) => {
    const selectedCityCode = event.target.value;
    setSelectedCity(selectedCityCode);
    const selectedCity = cities.find((city) => city?.code == selectedCityCode);
    if (selectedCity) {
      const districts = selectedCity.districts;
      setFilteredDistricts(districts);
    }
  };
  const handlePayment = async (totalPrice, phoneNumberShipping, addressShipping, nameCustomer, listCartId, note, email) => {
    const payment = {
      totalPrice: totalPrice
    }
    try {
      const dataPayment = await apiPayment(payment)

      window.location.href = dataPayment.url;
      // window.location.href = '/cart/payment';
      localStorage.setItem('listCartId', JSON.stringify(listCartId))
      localStorage.setItem('phoneNumberShipping', phoneNumberShipping)
      localStorage.setItem('nameCustomer', nameCustomer)
      localStorage.setItem('addressShipping', addressShipping)
      localStorage.setItem('customer', JSON.stringify(customerData))
      localStorage.setItem('priceTotal', totalPrice)
      localStorage.setItem('note', note)
      localStorage.setItem('email', email)

    } catch (error) {
      console.log(error);
    }
  }

  const handlePaymentByOrder = async (totalPrice, phoneNumberShipping, addressShipping, nameCustomer, listCartId, note, email) => {
    const payment = {
      totalPrice: totalPrice
    }
    try {
      const dataPayment = await apiPayment(payment)

      // window.location.href = dataPayment.url;
      window.location.href = '/cart/payment';
      localStorage.setItem('listCartId', JSON.stringify(listCartId))
      localStorage.setItem('phoneNumberShipping', phoneNumberShipping)
      localStorage.setItem('nameCustomer', nameCustomer)
      localStorage.setItem('addressShipping', addressShipping)
      localStorage.setItem('customer', JSON.stringify(customerData))
      localStorage.setItem('priceTotal', totalPrice)
      localStorage.setItem('note', note)
      localStorage.setItem('email', email)

    } catch (error) {
      console.log(error);
    }
  }


  const listCartId = () => {
    const data = [...cartList].map(cart => cart.idCart)
    return data;
  }
  const handleChangeAddress = (value) => {
    setAddressShipping(value)
  }
  const handleChangeEmail = (value) => {
    setEmail(value)
  }
  const handleChangePhoneNumber = (value) => {
    setPhoneNumber(value)
  }
  const handleChangeName = (value) => {
    setNameCustomer(value)
  }
  const handleChangeNote = (value) => {
    setNote(value)
  }
  const handleOptionChange = (value) => {
    setSelectedOption(value.target.value)
  }
  

  return (

    <>
      <div className="banner">
        <div className="inner">
          <div className="container text-center">
            <p className="title-heading">THANH TOÁN</p>
            <p className="intro">
            <a href="/">Trang chủ</a>/<Link to={"/cart"}>Giỏ hàng</Link> /Thanh toán
            </p>
          </div>
        </div>
      </div>
      <div className="checkout-payment">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <p className="transport"></p>
              <p className="tran-heading">1.Thông tin giao hàng</p>
              <div className="row">
                <div className="col-7">
                  <input type="name" onChange={(e) => { handleChangeName(e.target.value) }} value={(nameCustomer !== null && nameCustomer !== "") ? nameCustomer : customerData?.nameCustomer} placeholder="Họ Tên" />
                </div>
                <div className="col-5">
                  <input type="number" onChange={(e) => { handleChangePhoneNumber(e.target.value) }} value={(phoneNumber !== null && phoneNumber !== "") ? phoneNumber : customerData?.phoneNumber} placeholder="Số điện thoại" />
                </div>
              </div>
              <input type="email" onChange={(e) => { handleChangeEmail(e.target.value) }} value={(email !== null && email !== "") ? email : customerData?.email} placeholder="Email" />
              <div className="row">
                <div className="col-6">
                  <select value={selectedCity} onChange={handleChangeCity} name="calc_shipping_provinces" id="city123" required="">
                    <option value="">Tỉnh / Thành phố</option>
                    {cities.map((city) => (
                      <option key={city?.code} value={city?.code}>{city?.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">

                  <select name="calc_shipping_district" required="">
                    <option value="">Quận / Huyện</option>
                    {filteredDistricts.map((dis) => (
                      <option key={dis?.code} value="index">{dis?.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <input type="text" onChange={(e) => { handleChangeAddress(e.target.value) }} value={(addressShipping !== null && addressShipping !== "") ? addressShipping : customerData?.address} placeholder="Địa chỉ" />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Lưu ý cho người bán"
                onChange={(e) => { handleChangeNote(e.target.value) }}
                value={note}

              />
              <p />
              <div className="payment">
                <p className="pay-heading">2. Phương thức thanh toán </p>
                <div className="live d-flex align-items-center">
                  <input type="radio" value="option1" checked={selectedOption === 'option1'}
                    onChange={handleOptionChange} className="radio1" name="ok" />
                  <i className="fas fa-truck" />
                  <p>THANH TOÁN TRỰC TIẾP KHI NHẬN HÀNG</p>
                </div>
                <div className="oline d-flex align-items-center">
                  <input type="radio" value="option2" checked={selectedOption === 'option2'}
                    onChange={handleOptionChange} className="radio1" name="ok" />
                  <i className="fas fa-id-card" />
                  <p>THANH TOÁN TRỰC TUYẾN BẰNG VNPAY </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <p className="order-heading">3. Đặt hàng </p>
              <div className="order">
                {cartList?.map((cart, index) => (
                  <div className="order-info">
                    <div className="order-info">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <img src={cart?.product?.image} />
                        </div>
                        <div className="col-6" style={{width: "75%"}}>{cart?.product?.nameProduct}</div>
                      </div>
                    </div>
                    <div className="price">
                      <div className="row">
                        <div className="col-4">Giá:</div>
                        <div className="col-8 text-end">{FormatPrice(cart?.product?.originalPrice)}<span> đ</span></div>
                      </div>
                    </div>
                    <div className="price">
                      <div className="row">
                        <div className="col-4">Số lượng:</div>
                        <div className="col-8 text-end">{cart?.quantity}</div>
                      </div>
                    </div>
                    <div className="price">
                      <div className="row">
                        <div className="col-4">Khuyến mãi:</div>
                        <div className="col-8 text-end">{FormatPrice(cart?.product?.originalPrice - cart?.product?.salePrice)}<span> đ</span></div>
                      </div>
                    </div>
                    <div className="tamtinh">
                      <div className="row">
                        <div className="col-4">Tạm tính: </div>
                        <div className="col-8 text-end order-price">{FormatPrice(cart?.quantity * cart?.product?.salePrice)}<span> đ</span></div>
                      </div>
                    </div>
              

                  </div>
                ))}
                <hr />
                <div className="total">
                  <div className="row d-flex">
                    <div className="col-4">Tổng cộng:</div>
                    <div className="col-8 text-end tongtatca ">{FormatPrice(totalPrice())}  đ</div>

                  </div>
                </div>
                {selectedOption === 'option1' ? (
                  <div className="text-center" style={{height: 75}}>
                    <button onClick={() => {
                      handlePaymentByOrder(
                        totalPrice(),
                        (phoneNumber !== null && phoneNumber !== "") ? phoneNumber : customerData?.phoneNumber,
                        (addressShipping !== null && addressShipping !== "") ? addressShipping : customerData.address,
                        (nameCustomer !== null && nameCustomer !== "") ? nameCustomer : customerData?.nameCustomer,
                        listCartId(),
                        note,
                        (email !== null && email !== "") ? email : customerData?.email
                      )
                    }} className="btn">Đặt hàng</button>
                  </div>

                ) :
                  (
                    <div className="text-center"style={{height: 75}}>
                      <button onClick={() => {
                        handlePayment(
                          totalPrice(),
                          (phoneNumber !== null && phoneNumber !== "") ? phoneNumber : customerData?.phoneNumber,
                          (addressShipping !== null && addressShipping !== "") ? addressShipping : customerData.address,
                          (nameCustomer !== null && nameCustomer !== "") ? nameCustomer : customerData?.nameCustomer,
                          listCartId(),
                          note,
                          (email !== null && email !== "") ? email : customerData?.email
                        )
                      }} className="btn">Đặt hàng</button>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}