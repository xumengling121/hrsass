import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

// 状态
const state = {
  token: getToken() // 设置token 初始状态
}
// 修改状态
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  // 删除缓存
  removeToken(state) {
    state.token = null
    removeToken()
  }
}
// 执行异步
const actions = {
  async login(context, data) {
    const result = await login(data)
    // if (result.data.success) {
    //   context.commit('setToken', result.data.data)
    // }
    context.commit('setToken', result)
  }
}

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions

}
