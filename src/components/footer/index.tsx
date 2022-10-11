import FooterFrm from "./FooterFrm";
import FooterMenu from "./FooterMenu";
import FooterPosts from "./FooterPosts";
import FooterProducts from "./FooterProducts";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="bg-black w-full">
        <div className="container mx-auto">

            <FooterSocial />

            <div className="grid grid-cols-4 gap-4 mt-20">
                <FooterFrm />
                <FooterProducts />
                <FooterMenu />
                <FooterPosts />
            </div>
           
        </div>
        <div className="w-full mt-14 items-center justify-center border-[#f3a511] border-b-4 text-center">
            <div className='leading-10 text-white py-4'>
                <span>KATANA INU IS A PROJECT FROM</span> <span className="text-[#e39a10]">CHAINVISION GAMES</span>
            </div>
        </div>
    </div>
  )
}

export default Footer;


