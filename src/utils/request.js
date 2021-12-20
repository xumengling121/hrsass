
import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
}) // 创建一个axios实例
service.interceptors.request.use()// 请求拦截器
service.interceptors.response.use(
    response => {
        //解构赋值
        const { success, message, data } = response.data
        if (success) {
            return data
        } else {
            Message.error(message) //提示错误信息
            return Promise.reject(new Error(message))
        }
    }, error => {
        Message.error(error.message)
        return Promise.reject(error)
    }
)// 响应拦截器
export default service
