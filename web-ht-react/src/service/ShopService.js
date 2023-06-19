import axios from "axios";

export const apiGetAllProducts = async (pageAndSearch) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/list?page=${pageAndSearch.page}&search=${pageAndSearch.search}&sort=${pageAndSearch.sort}&product_type=${pageAndSearch.product_type}&room_type=${pageAndSearch.room_type}`)
        console.log(result);
        return result.data
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllProductByType = async (pageAndSearch) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/all?page=${pageAndSearch.page}&room_type=${pageAndSearch.room_type}&product_type=${pageAndSearch.product_type}`)
        console.log(result);
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const apiGetAllProductType = async() =>{
    try {
        const result = await axios.get(`http://localhost:8080/product_type`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllRoomType = async() =>{
    try {
        const result = await axios.get(`http://localhost:8080/room_type`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllProductByName = async(name)=>{
    try {
        const result = await axios.get(`http://localhost:8080/search?name=${name}`)
        return result.data;  
    } catch (error) {
        console.log(error);
    }
}