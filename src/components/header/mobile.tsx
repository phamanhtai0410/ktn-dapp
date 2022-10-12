import InfoIcon from '@mui/icons-material/Info'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Logo from '../common/Logo'
import ConnectWallet from '../ConnectWallet'


const HeaderMobile = () => {
  const drawerAnchor = 'left'
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { t } = useTranslation()
  const toggleDrawer = (open: boolean) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }
  const menuList = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Cart',
      link: '/cart',
    },
    
  ]
  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuList.map((item, index) => (
          <a href={item.link} key={item.title}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {index == 0 ? <HomeIcon /> : <span></span>}
                  {index == 1 ? <InfoIcon /> : <span></span>}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
    </Box>
  )
  return (
    <div className="flex items-center w-full px-2 py-2 fixed z-[9999] bg-[#0000006b]">
      <React.Fragment key={drawerAnchor}>
        <MenuIcon onClick={toggleDrawer(true)} style={{color:"#FFF"}}  />
        <Drawer
          anchor={drawerAnchor}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerList()}
        </Drawer>
      </React.Fragment>
      <div className="flex-1 flex items-center justify-center">
        <a href='/'>  <Logo /></a>
        <span className="ml-2 hidden md:block">{t('app_name')}</span>
      </div>
      <div className="ml-auto">
          <button
            type="button"
            className="home-btn text-white cursor-pointer uppercase bg-transparent font-medium rounded-xl text-sm lg:text-base px-2 lg:px-5 py-1 lg:py-2.5 text-center"
          >
            Opensea
          </button>

        {/* <ConnectWallet /> */}
      </div>
    </div>
  )
}


export default HeaderMobile;