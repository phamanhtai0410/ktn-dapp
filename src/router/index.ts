import Index from '@/pages/index/index'
import About from '@/pages/about/index'
import Cart from '@/pages/cart'
import homepage from '@/pages/home/index'

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: 'home',
    component: homepage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/cart',
    component: Cart,
  },
]
export default routes
