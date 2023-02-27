import api from "."

const BASE_PATH = '/auth'

export type ApiLoginProps = {
  email: string
  password: string
}


export const ApiLogIn = async (params: ApiLoginProps) => {
  const url = `${BASE_PATH}/login`
    const data = await api.post(url, params)
    return data
}

export type ApiSignUpProps = {
  name: string,
  email: string
  password: string
}


export const ApiSignUp = async (params: ApiSignUpProps) => {
  const url = `${BASE_PATH}/register`
    const data = await api.post(url, params)
    return data
}
