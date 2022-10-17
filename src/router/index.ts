import React from 'react';

const HomeComponent = React.lazy(() => import('@/pages/home/index'));
const CartComponent = React.lazy(() => import('@/pages/cart'));
const MintComponent = React.lazy(() => import('@/pages/mint'));

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/cart/:id',
    component: CartComponent,
  },
  {
    path: '/mint',
    component: MintComponent,
  },
]
export default routes
