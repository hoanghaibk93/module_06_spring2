import axios from "axios"

export const apiGetAllProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product`);
        return result.data;
    } catch (e) {
        console.log(e)
    }

}