import axios from "axios";
import E from "react-script";

export const apiGetAllProducts = async (pageAndSearch) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/list?page=${pageAndSearch.page}&search=${pageAndSearch.search}&sort=${pageAndSearch.sort}&product_type=${pageAndSearch.product_type}&room_type=${pageAndSearch.room_type}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllProductByType = async (pageAndSearch) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/all?page=${pageAndSearch.page ? pageAndSearch.page : "0"}&sort=${pageAndSearch.sort}&room_type=${pageAndSearch.room_type}&product_type=${pageAndSearch.product_type}&name=${pageAndSearch.name}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllProductByTypeProduct = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/list/type?product_type=${id}`)
        return result.data;
        
    } catch (error) {
        console.log(error);
    }
}

export const apiGetAllProductType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product_type`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllRoomType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/room_type`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllProductByName = async (handleSearchByNameChange) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/search?page=${handleSearchByNameChange.page ? handleSearchByNameChange.page : 0}&name=${handleSearchByNameChange.name}`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const apiGetAllProductBySalePrice = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/list/price`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const apiFindProductByIdProduct = async(idProduct)=>{
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/${idProduct}`)
        console.log(result.data);
        return result.data;
    } catch (error) {
        
    }
}
export const apiGetAllProductPopular = async()=>{
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/list/popular`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}