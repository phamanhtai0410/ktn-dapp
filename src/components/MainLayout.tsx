
import { Outlet } from "react-router-dom";

import Header from './header'
import Footer from './footer'

const MainLayout = () => {
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