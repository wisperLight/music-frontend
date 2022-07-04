//创建路由器
import VueRouter from "vue-router";
import Vue from 'vue'
import routes from './routes'
import store from '../store/index'



Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  routes
})

// 解决路由重复报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.check === true) {
    if (store.state.isLogin === true) next()
    else {
      Vue.prototype.$message.error('需要登录')
      next('/login')
    }
  } else {
    next()
  }
})


export default router