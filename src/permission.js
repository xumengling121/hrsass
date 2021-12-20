
import router from '@/router'
import store from '@/store'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login', '404']//定义白名单
router.beforeEach(function (to, from, next) {
    Nprogress.start()
    if (store.getters.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/login')
        }
    }
    Nprogress.done()
    router.afterEach(function () {
        Nprogress.done()
    })
})