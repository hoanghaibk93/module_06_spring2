import axios from "axios";

export const apiSendEmail =async(emailData)=>{
    const auth = localStorage.getItem('token')
    const headers = {
        Authorization: "Bearer " + auth
    }
    try {
        const result = await axios.post(`http://localhost:8080/api/user/send_email`, emailData,{headers})     
    } catch (error) {
        console.log(error);
    }
}