//路由懒加载
const Login = () => import('../pages/Login')
const PasswordLogin = () => import('../pages/login/PasswordLogin')
const QRcodeLogin = () => import('../pages/login/QRcodeLogin')

const Home = () => import('../pages/Home')

const Search = () => import('../pages/search/Search')

const Browse = () => import('../pages/browse/Browse')

const Recommend = () => import('../pages/user/Recommend')
const PersonalFM = () => import('../pages/user/PersonalFM')
const MyCollection = () => import('../pages/user/MyCollection')
const MyCloud = () => import('../pages/user/MyCloud')
const RecentPlay = () => import('../pages/user/RecentPlay')
const UserDetail = () => import('../pages/user/UserDetail')

const PlayListDetail = () => import('../pages/playlist/PlayListDetail')
const Setting = () => import('../pages/setting/Setting')


// 路由规则
const routes = [
  { path: '/', redirect: '/login/psw' },
  {
    path: '/login',
    component: Login,
    redirect: '/login/psw',
    meta: { check: false, title: '登录' },
    children: [
      {
        path: 'psw',
        component: PasswordLogin,
        meta: { check: false, title: '密码登录' },
      },
      {
        path: 'qr',
        component: QRcodeLogin,
        meta: { check: false, title: '二维码登录' },
      },
    ]
  },
  {
    path: '/home',
    component: Home,
    meta: { check: false, title: '首页' },
    children: [
      {
        path: 'search',
        component: Search,
        meta: { check: false, title: '搜索' }
      },
      {
        path: 'recommend',
        component: Recommend,
        meta: { check: false, title: '个性推荐' }
      },
      {
        path: 'browse',
        component: Browse,
        meta: { check: false, title: '浏览' }
      },
      {
        path: 'personalfm',
        component: PersonalFM,
        meta: { check: false, title: '私人FM' }
      },
      {
        path: 'mycollection',
        component: MyCollection,
        meta: { check: false, title: '我的收藏' }
      },
      {
        path: 'mycloud',
        component: MyCloud,
        meta: { check: false, title: '音乐云盘' }
      },
      {
        path: 'recentplay',
        component: RecentPlay,
        meta: { check: false, title: '最近播放' }
      },
      {
        path: 'playlistdetail/:id',
        component: PlayListDetail,
        props: true,
        meta: { check: false, title: '歌单详情' }
      },
      {
        path: "userdetail/:id",
        component: UserDetail,
        meta: { check: false, title: '用户主页' }
      },
      {
        path: "setting",
        component: Setting,
        props: true,
        meta: { check: false, title: '设置' }
      },

    ]
  }

]

export default routes