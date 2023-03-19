import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, 
})

export type TConfig = AxiosRequestConfig<Object>
export default api
