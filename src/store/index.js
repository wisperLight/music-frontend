import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
  /* 登录状态 */
  isLogin: window.sessionStorage.getItem('isLogin') === 'true' ? true : false,
  /* 账号信息 */
  account: {},
  /* 用户信息 */
  profile: {},
  /* 我的歌单 */
  myPlayList: [],
  /* 喜欢的音乐列表 */
  likeIdList: [],
  test: 'vuex良好'
}

const getters = {

}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store