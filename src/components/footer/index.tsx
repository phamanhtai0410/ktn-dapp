import FooterFrm from "./FooterFrm";
import FooterMenu from "./FooterMenu";
import FooterPosts from "./FooterPosts";
import FooterProducts from "./FooterProducts";
import FooterSocial from "./FooterSocial";

import icHr from '@/assets/images/footer/f_hr_shadow.png'
import FooterFollowUS from "./FooterFollowUS";

const Footer = () => {
  return (
    <div className="bg-footer w-full relative">

        {/* <div className="flex items-center justify-center absolute w-full top-[-40px]">
            <img className="w-full h-16" src={icHr} />
            <hr className="" />
        </div> */}

        <div className="container mx-auto py-[68px]">

            {/* <FooterSocial /> */}

            <div className="block lg:flex justify-between md:gap-x-[43px]">
                <FooterFrm />
                <div className="flex flex-col md:flex-row justify-space-around lg:place-content-center lg:justify-between  gap-2 pl-4 lg:pl-0">
                    <div className="flex flex-row">
                        <FooterProducts />
                        <FooterMenu />
                    </div>
                    {/* <FooterPosts /> */}
                    <FooterFollowUS />
                </div>
            </div>

        </div>
        {/* <div className="w-full mt-4 lg:mt-20 items-center justify-center border-[#f3a511] border-b-4 text-center">
            <div className='leading-10 text-white py-7 text-sm lg:text-base'>
                <span>KATANA INU IS A PROJECT FROM</span> <span className="text-[#e39a10]">CHAINVISION GAMES</span>
            </div>
        </div> */}
        
    </div>
  )
}

export default Footer;


