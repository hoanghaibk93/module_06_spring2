import axios from "axios"

export const apiFindCustomerByUserName = async (username) => {
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        const result = await axios(`http://localhost:8080/api/user/customer/?username=${username}`, { headers })
        return result.data;
    } catch (error) {

    }
}