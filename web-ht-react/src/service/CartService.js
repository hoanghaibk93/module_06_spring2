import axios from "axios"


export const apiGetAllCart = async () => {
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        const result = await axios.get(`http://localhost:8080/api/user/list/cart`, { headers })
        return result.data;
    } catch (error) {
        console.log(error);
        throw error
    }

}
export const apiGetCart = async (id) => {
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        const result = await axios.get(`http://localhost:8080/api/user/cart/${id}`, { headers })
        return result.data;
    } catch (error) {
        console.log(error);
    }

}
export const apiCreateCart = async (cart) => {
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        return await axios.post(`http://localhost:8080/api/user/add/cart`, { ...cart }, { headers })
    } catch (error) {
        console.log(error);
        throw error
    }
}
export const apiUpdateCart = async (cart) => {
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        console.log("123");
        return await axios.put(`http://localhost:8080/api/user/cart/update`, { ...cart }, { headers })
       
    } catch (error) {
        console.log(error);
    }
}

export const apiDeleteCart = async (id) =>{
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        return await axios.delete(`http://localhost:8080/api/user/delete/cart/${id}`, { headers })
    } catch (error) {
        console.log(error);
    }

}