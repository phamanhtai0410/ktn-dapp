import Index from '@/pages/index/index'
import About from '@/pages/about/index'
import Cart from '@/pages/cart'
import homepage from '@/pages/home/index'
import Mint from '@/pages/mint'
import Staking from '@/pages/staking'

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
  {
    path: '/staking',
    component: Staking,
  },
]
export default routes
