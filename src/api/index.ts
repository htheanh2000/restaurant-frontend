import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://restaurant-management-0411.herokuapp.com/v1/'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, 
})

export type TConfig = AxiosRequestConfig<Object>
export default api
