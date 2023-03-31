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
const NFTsPageComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/nfts/index');
});
const LandingPage = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/landingpage/index');
});
const MintDetailComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/mintDetailNFT/index');
});

const QrScanLinkComponent = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, YOUR_DELAY));
  return import('@/pages/qrScanLink/index');
});



const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/store',
    component: StoreComponent,
  },
  // {
  //   path: '/landingpage',
  //   component: LandingPage,
  // },
  {
    path: '/cart/:id',
    component: CartComponent,
  },
  // {
  //   path: '/mint/:id',
  //   component: MintComponent,
  // },
  {
    path: '/box',
    component: BoxComponent,
  },
  
  {
    path: '/nfts',
    component: NFTsPageComponent,
  },

  {
    path: '/mint/:address/:id',
    component: MintDetailComponent,
  },

  {
    path: '/qr-scan-link',
    component: QrScanLinkComponent,
  }

]
export default routes
