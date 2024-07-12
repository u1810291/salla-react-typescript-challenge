import { AxiosResponse } from 'axios'

export default async function AllExceptionFilter<T>(
  resolve: (data: T) => void,
  func: () => Promise<AxiosResponse<T>>,
  reject: (error: string) => void
) {
  try {
    const res: AxiosResponse<T> = await func()
    const data: T = res.data
    resolve(data)
  } catch (error) {
    console.error(error.response?.data || error.message)
    reject(error.response?.data || error.message)
  }
}
