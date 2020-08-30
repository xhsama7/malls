import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Shop = () => import('../views/shop/Shop')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const My = () => import('../views/my/My')


const routes = [
  {
    path:'',
    redirect:'/shop'
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/my',
    component: My
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router