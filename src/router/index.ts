import React from 'react';

const YOUR_DELAY = 500;
// const HomeComponent = React.lazy(() => import('@/pages/home/index'));
// const CartComponent = React.lazy(() => import('@/pages/cart'));
// const MintComponent = React.lazy(() => import('@/pages/mint'));

const HomeComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/home/index');
});

const CartComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/cart');
});

const MintComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/mint');
});

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
    path: '/mint/:id',
    component: MintComponent,
  },
]
export default routes
