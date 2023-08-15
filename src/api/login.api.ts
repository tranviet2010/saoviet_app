import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_LOGIN

export const LoginApi = (value: any) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: apiUrl,
        headers: {
            'client-id': 'client_app',
            'secret': 'kahdjahsdjkashdjkahsdkas',
            'device-id': 'hungvm',
            'app-code': 'appcode',
            'username': `${value?.username}`,
            'password': `${value?.password}`,
            'Cookie': 'JSESSIONID=866318468810F24EC74DB1471D8644EF'
        }
    };

    return axios.request(config)
        .then((response: any) => {
            return response
        })
        .catch((error: any) => {
            return error
        });
}