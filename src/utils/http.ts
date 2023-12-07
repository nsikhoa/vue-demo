import type { AxiosInstance } from "axios";
import axios from "axios";

class Http {
    instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3004/',
            
        })
    }
}

const http = new Http().instance

export default http