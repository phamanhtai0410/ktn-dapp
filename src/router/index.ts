import Index from '@/pages/index/index'
import About from '@/pages/about/index'
import Cart from '@/pages/cart'

const routes = [
  {
    path: '/',
    component: Index,
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
