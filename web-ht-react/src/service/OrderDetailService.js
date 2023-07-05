import axios from "axios"

export const apiGetOrderDetailByOrder =async(id)=>{
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
       const result = await axios.get(`http://localhost:8080/api/user/order_detail/order?id=${id}`,{headers}) 
       return result.data
    } catch (error) {
      throw error 
    }
}