import Axios from 'axios'
import { BASE_URL } from './constants'

export default class API {
    get(path, params) {
        const requestUrl = BASE_URL + path

        return Axios.get(requestUrl, { params }).then(res => res.data)
    }

    post(path, body) {
        const requestUrl = BASE_URL + path

        return Axios.post(requestUrl, body)
    }

    delete() {}
}

export const api = new API()
