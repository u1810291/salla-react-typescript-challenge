import axios, { Axios, InternalAxiosRequestConfig } from 'axios'

const BASE_URL: string = process.env.API_URL || ''

let instance: Axios
const singleInstance = (): Axios => {
  if(instance instanceof Axios) {
    return instance
  }
  instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 30000
  })
  return instance
}

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log(config.url)
  config.params['token'] = localStorage.getItem('token')
  return config
}, (error) => {
  console.error(error)
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  console.log(response)
  return response
}, (error) => {
  console.error(error)
  return Promise.reject(error)
})

export default singleInstance()
