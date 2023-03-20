import icLogo from '@/assets/images/footer/f_logo.png'
import arrow_up_right_small from '@/assets/images/mintpage/arrow_up_right_small.svg'

const FooterFrm = () =>{
    return (
        <div className="flex-none w-full lg:w-[536px] p-4 lg:p-0">
            <div className='text-white'>
                <div className='content cursor-pointer'>
                    <img src={icLogo} className='w-48 mx-auto lg:mx-0' alt='logo' />
                </div>
                <h4 className="font-blome tracking-[.175em] mt-[36px]">Don’t miss our latest News</h4>
                <div className='mt-[16px] relative lg:w-[424px]'>
                    <input
                        placeholder='Email Address'
                        className='bg-[#242731] appearance-none border border-zinc-500 rounded-3xl w-full py-2 px-4 h-14 text-gray-300 leading-relaxed focus:outline-none'
                    />
                    {/* <button type='submit' className='btn-footer bg-[#F9C306]'>
                        Get News
                    </button> */}
                    <div
                            className='absolute top-[8px] right-[8px] flex items-center justify-between w-[126px] h-[40px] bg-[#F9C306] pl-[12px] pr-[8px] rounded-[20px]'
                        >
                            <span>Subscribe</span>
                            <div className='flex items-center justify-center bg-[#15103C] rounded-full w-[36px] h-[36px]'>
                                <img src={arrow_up_right_small} alt="arrow_up_right_small" className='w-auto' />
                            </div>
                        </div>
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