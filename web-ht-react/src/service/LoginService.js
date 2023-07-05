import axios from "axios"

export const apiLogin = async (dataUser) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/public/signin`, dataUser)
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }

}