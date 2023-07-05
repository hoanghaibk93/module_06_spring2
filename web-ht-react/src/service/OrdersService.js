import axios from "axios"

export const apiGetAllOrderByCustomer =async(page)=>{
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
       const result = await axios.get(`http://localhost:8080/api/user/orders?&page=${page}`,{headers}) 
       return result.data
    } catch (error) {
      throw error 
    }
}