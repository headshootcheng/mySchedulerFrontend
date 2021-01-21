import axios from 'axios';
import authService from './auth';
const userService = {
    getUserInfo: async() => {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/userInfo`,{
            headers: authService.authHeader()
        });
        return data;
    }
}

export default userService;