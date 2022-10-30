
import { Outlet, useSearchParams } from "react-router-dom";

import Header from './header'
import HeaderMobile from './header/mobile'
import Footer from './footer'
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { fetchReferralCode } from "@/actions/userActions";

const MainLayout = () => {

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    setReplaceRefCode()
  },[])

  // Set new ref_code 
  const setReplaceRefCode = () => {
    const refCode = searchParams.get('r');
    if(refCode){
      localStorage.setItem("_refCode",refCode);
    }
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