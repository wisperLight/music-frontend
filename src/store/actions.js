import { getAcount, getUserPlayList, getLikeIdList } from '@/api/user'
export default {
  // 设置登录状态以及获取用户信息
  async getAccount({ commit, dispatch }) {
    const res = await getAcount();
    console.log(res);
    if (res.code !== 200) return
    if (res.account !== null) {
      commit('setLoginInfo', res);
      commit('setIsLogin', true);
      dispatch('getMyPlayList');
      // dispatch('getLikeList');
    }

  },
  /* 获取喜欢的音乐列表 */
  async getLikeList({ commit, state }) {
    const res = await getLikeIdList(state.profile.userId)
    if (res.code !== 200) return
    console.log("getLikeList", res)
    if (res.ids instanceof Array) {
      commit('setLikeIdList', {
        type: 'get',
        data: res.ids
      })
    }
  },
  // 获取个人歌单 
  async getMyPlayList({ commit, state }) {
    if (!state.isLogin) return
    const res = await getUserPlayList(state.profile.userId)
    console.log("getMyplayList", res);
    if (res.code !== 200) return
    commit('setMyPlayList', res.playlist)
  },
}