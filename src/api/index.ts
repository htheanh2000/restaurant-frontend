import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'http://localhost:4000/v1/'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, 
})

export type TConfig = AxiosRequestConfig<Object>
export default api
