
import { Outlet, useSearchParams } from "react-router-dom";

import Header from './header'
import HeaderMobile from './header/mobile'
import Footer from './footer'
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { setPromotionRefCode } from "@/reducers/cartSlice";

const MainLayout = () => {

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    setReplaceRefCode()
    checkPromotionRefCode()
  },[])

  // Set new ref_code 
  const setReplaceRefCode = () => {
    const refCode = searchParams.get('r');
    console.log("setReplaceRefCode",refCode);
    if(refCode){
      localStorage.setItem("_refCode",refCode);
    }
  }

  const checkPromotionRefCode = () => {
    const refCode = searchParams.get('p');
    console.log("checkPromotionRefCode",refCode);
    if(refCode){
      dispatch(setPromotionRefCode(refCode))
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