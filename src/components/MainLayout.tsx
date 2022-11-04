
import { Outlet,  useSearchParams  } from "react-router-dom";
import Header from './header'
import HeaderMobile from './header/mobile'
import Footer from './footer'
// import { useEffect } from "react";
// import { useAppDispatch } from "@/app/hooks";
// import { setPromotionRefCode, setRefCodeCart } from "@/reducers/cartSlice";
// import { fetchCheckRefCode } from "@/actions/paymentActions";

const MainLayout = () => {

  // const dispatch = useAppDispatch();

  // const [searchParams,setSearchParams] = useSearchParams();

  // useEffect(()=>{
  //   setReplaceRefCode()
  //   checkPromotionRefCode()
  // },[searchParams])

  // // Set new ref_code 
  // const setReplaceRefCode = async () => {

  //   const refCode = searchParams.get('r');

  //   if(refCode){

  //     const refData = await dispatch(fetchCheckRefCode({code:refCode}))

  //     if(refData.meta.requestStatus === "fulfilled"){
  //       localStorage.setItem("_refCode",refCode);
  //       dispatch(setRefCodeCart(refCode))
  //     }
      
  //     //clear ref_code invalidation
  //     if(refCode  && refData.meta.requestStatus ==="rejected"){
  //       localStorage.removeItem("_refCode")
  //       searchParams.delete("r")
  //       setSearchParams(searchParams.toString())
  //     }
      
  //   }

  // }

  // const checkPromotionRefCode = () => {
  //   const refCode = searchParams.get('p');
  //   if(refCode){
  //     dispatch(setPromotionRefCode(refCode))
  //   }
  // }

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