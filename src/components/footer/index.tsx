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

            <div className="grid grid-cols-4 gap-4 mt-8">
                <FooterFrm />
                <FooterProducts />
                <FooterMenu />
                <FooterPosts />
            </div>
            <div className="w-full flex items-center justify-center px-4 relative">
                <div className='w-full border-[#f3a511] bottom-1 text-center'>
                    <p className='h-10'>KATANA INU IS A PROJECT FROM CHAINVISION GAMES</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;


