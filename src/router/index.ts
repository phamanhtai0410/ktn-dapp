
import About from '@/pages/about/index'
import Cart from '@/pages/cart'
import homepage from '@/pages/home/index'
import Mint from '@/pages/mint'

const routes = [
  {
    path: '/',
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
  {
    path: '/mint',
    component: Mint,
  },
]
export default routes
