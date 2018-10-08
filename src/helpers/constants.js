import axios from 'axios';

//  * MENU OPTIONS
export const HOME = 'home';
export const LOGIN = 'login';
export const MENU = 'menu';
export const CADASTRO = 'cadastro';

export class Config {
    constructor(url, contentType) {
        this.url = url;
        this.contentType = contentType;
    }
}

export const API_URL = 'http://localhost:XXXX/api/';
export const API_CONTENT_TYPE = 'application/json';
export const configAPI = new Config(API_URL, API_CONTENT_TYPE);

setAxiosInstance(configAPI);

export var axiosInstance = axios.create();

/**
 * @param {Config} config
 */
export function setAxiosInstance(config) {
    axiosInstance = axios.create({
        baseURL: config.url
    });
    axiosInstance.interceptors.response.use(
        response => { return response },
        error => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // localStorage.removeItem("authToken");
            }
            return Promise.reject(error);
        }
    );
}