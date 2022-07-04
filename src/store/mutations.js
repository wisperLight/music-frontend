export default {
  // 设置登录状态
  setIsLogin(state, isLogin) {
    // 第一次登录设置登录状态
    state.isLogin = isLogin
    if (isLogin) {
      window.sessionStorage.setItem('isLogin', true)
    } else {
      window.sessionStorage.removeItem('isLogin')
    }
  },
  // 设置用户账号信息
  setLoginInfo(state, LoginInfo) {
    state.account = LoginInfo.account
    state.profile = LoginInfo.profile
  },
  // 获取个人歌单
  setMyPlayList(state, list) {
    state.myPlayList = list
  },
  // 设置音乐为喜欢
  setLikeIdList(state, payload) {
    if (payload.type === 'get') {
      // 获取喜欢
      state.likeIdList = payload.data
    } else if (payload.type === 'unshift') {
      // 添加喜欢
      state.likeIdList.unshift(payload.data)
    } else if (payload.type === 'remove') {
      // 删除喜欢
      state.likeIdList.splice(
        state.likeIdList.indexOf(payload.data), 1
      )
    }
  },
}