import axios from 'axios';
import authService from './auth';
const userService = {
    userTestApi: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/user/test`,{
            headers: authService.authHeader()
        });
    }
}

export default userService;