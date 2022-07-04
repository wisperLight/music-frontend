import { get } from '@/request'



/* 二维码登录 */
// 获取二维码key
export const getQrKey = () => get('/login/qr/key', { timestamp: Date.now() })
// 生成二维码Base 64
export const createQr = (key, qrimg = true) => get('/login/qr/create', { key, qrimg, timestamp: Date.now() })
// 轮询二维码状态 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
export const checkQr = (key) => get('/login/qr/check', { key, timestamp: Date.now() })

/* 获取用户详情  */
export const getDetail = (uid) => get('/user/detail', { uid, timestamp: Date.now() })

/* 获取账号信息 */
export const getAcount = () => get('/user/account', { timestamp: Date.now() })

/* 获取用户歌单 */
export const getUserPlayList = (uid, offset, limit = 30) => get('/user/playlist', { uid, offset, limit, timestamp: Date.now() })

export const getLikeIdList = (uid) => get('/likelist', { uid, timestamp: Date.now() })