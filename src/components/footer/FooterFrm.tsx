import icLogo from '@/assets/images/footer/f_logo.png'
import arrow_up_right_small from '@/assets/images/mintpage/arrow_up_right_small.svg'
import FormSubscribe from './FormSubscribe';

const FooterFrm = () =>{
    return (
        <div className="flex-none w-full lg:w-[482px] p-4 lg:p-0">
            <div className='text-white'>
                <div className='content cursor-pointer'>
                    <img src={icLogo} className='w-48 mx-auto lg:mx-0' alt='logo' />
                </div>
                <h4 className="font-blome tracking-[.175em] mt-[36px]">Don’t miss our latest News</h4>
                <div className='mt-[16px] relative lg:w-[424px]'>
                    <FormSubscribe />
                </div>
            </div>
            <div className="mt-[38px]">
                <h4 className='text-white text-[16px] font-blome'>KATANA INU is a project from 
                    <span className='text-[#F9C306]'> CHAINVISION GAMES</span>
                </h4>
                <p className='text-[#b4b4b5] text-[13px] pt-6'>Nothing on this website constitutes financial advice, and it is always recommended to consult a qualified financial advisor before participating in any token or NFT purchases.</p>
                <p className='text-[#b4b4b5] text-[13px] pt-6'>Buy Katana Inu NFTs only from katanainu.com or kainu.io subdomains to be safe. Check the website's address for on our main website www.katanainu.com and go to the "Minting NFTs" section to verify.</p>
                <p className='text-[#F9C306] text-[13px]'>Ask in our telegram or discord channel for confirmation. Avoid other websites!</p>
            </div>
        </div>
    )

}

export default FooterFrm;