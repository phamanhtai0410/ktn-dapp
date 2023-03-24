import React from 'react';

const YOUR_DELAY = 400;
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
const BoxComponent= React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/box');
});
const StoreComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/store');
});
const MintPageComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/mintCollection/index');
});
const MintDetailComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/mintDetailNFT/index');
});

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/store',
    component: StoreComponent,
  },
  {
    path: '/cart/:id',
    component: CartComponent,
  },
  {
    path: '/mint/:id',
    component: MintComponent,
  },
  {
    path: '/box',
    component: BoxComponent,
  },
  {
    path: '/mint-page',
    component: MintPageComponent,
  },
  {
    path: '/mint-page/:id',
    component: MintDetailComponent,
  },
]
export default routes
