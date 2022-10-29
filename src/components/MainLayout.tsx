
import { Outlet } from "react-router-dom";

import Header from './header'
import HeaderMobile from './header/mobile'
import Footer from './footer'
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { fetchReferralCode } from "@/actions/userActions";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    fetchLayout()
  },[])

  const fetchLayout = () =>{

    const address  = localStorage.getItem("_acc")
    console.log("address",address);
    dispatch(fetchReferralCode({
      address
    }))
  }
  

  return(
    <section className='layout'>
      <aside className='sidebar' />
      <section>
        <div className="lg:hidden">
          <HeaderMobile />
        </div>
        <div className="hidden lg:block">
           <Header />
        </div>
          <main className="overflow-hidden">
            <Outlet />
          </main>
        <Footer />
      </section>
    </section>
  )
}

export default MainLayout;