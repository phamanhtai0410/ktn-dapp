
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from './header'
import Footer from './footer'
type Props = {
  children?: React.ReactNode
};

const MainLayout = ({ children }: Props) => {
  return(
    <section className='layout'>
      <aside className='sidebar' />
      <section>
        <Header />
          <main>
          <Outlet />
          </main>
          <Footer />
      </section>
    </section>
    )

}

export default MainLayout;