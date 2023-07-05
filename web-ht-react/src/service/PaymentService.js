import { logDOM } from "@testing-library/react"
import axios from "axios"

export const apiCitys = async()=>{
    try {
        const result = await axios.get(`https://provinces.open-api.vn/api/?depth=2`)
        console.log(result.data);
        return result.data
    } catch (error) {
     console.log(error);   
    }
}
export const apiPayment = async(payment)=>{
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        const result = await axios.post(`http://localhost:8080/api/user/payment`, payment, {headers})
        return result.data
    } catch (error) {
        console.log(error);
    }
}
export const apiCartPayment = async(paymentForm) =>{
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
       const result = await axios.post(`http://localhost:8080/api/user/cart/payment`, paymentForm,{headers}) 
       return result.data
    } catch (error) {
      throw error 
    }
}
