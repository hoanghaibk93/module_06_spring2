import { useEffect } from "react"
import { apiCartPayment } from "../../service/PaymentService"
import { useNavigate } from "react-router"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiSendEmail } from "../../service/SendEmail";

export const PaymentStatus = () => {
    const navigate = useNavigate();
    const getObjectFromLocalStorage = (key) => {
        const storedObject = localStorage.getItem(key);
        if (storedObject) {
            return JSON.parse(storedObject);
        }
        return null;
    }
    const phoneNumberShipping = localStorage.getItem("phoneNumberShipping");
    const addressShipping = localStorage.getItem("addressShipping");
    const nameCustomer = localStorage.getItem("nameCustomer")
    const note = localStorage.getItem("note")
    const listCartId = getObjectFromLocalStorage("listCartId")
    const customer = getObjectFromLocalStorage("customer")
    const priceTotal = localStorage.getItem("priceTotal")
    const email = localStorage.getItem("email")


    const fetchApiPaymentStatus = async () => {
        try {
            const paymentForm = {
                customer: customer,
                phoneNumberShipping: phoneNumberShipping,
                addressShipping: addressShipping,
                name: nameCustomer,
                note: note,
                priceTotal: priceTotal,
                email: email,
                listCartId: listCartId,
            }
            const data = await apiCartPayment(paymentForm);
            toast.success("Thanh toán thành công", { autoClose: 3000 })
            navigate("/cart")
            fetchApiSendEmail();
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(`Thanh toán thất bại, ${error.response.data.message} sản phẩm`, { autoClose: 3000 })
            }
            navigate("/cart")

        }
    }
    const fetchApiSendEmail = async () => {
        try {
            const emailData = {
                phoneNumberShipping: phoneNumberShipping,
                addressShipping: addressShipping,
                nameCustomer: customer?.nameCustomer,
                nameReceiver: nameCustomer,
                note: note,
                priceTotal: priceTotal,
                email: email,
            }
            const data = await apiSendEmail(emailData);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchApiPaymentStatus()
    }, [])


}