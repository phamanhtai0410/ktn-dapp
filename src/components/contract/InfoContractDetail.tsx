import {
    selectCartItems, selectWhiteListNFT,
  } from '@/reducers/cartSlice'
  import { useSelector } from 'react-redux'
  import characters_icon_new from '@/assets/images/mintpage/characters_icon_new.svg'
  
  const InfoContractDetail = () => {
  
    const listItems = useSelector(selectCartItems) 
  
    return (
      <>
        <div className="mt-[24px] lg:ml-[40px] lg:mt-0 flex flex-1  gap-2 flex-col items-start">
            {/* <div className="mt-[24px] lg:mt-0 flex flex-1  gap-y-[12px] flex-col items-start">
                <span className="font-normal text-[24px] lg:text-[40px] leading-[40px] text-[#FFFFFF] ">
                    We deployed new contract
                    
                </span>
                <span className="font-extrabold text-[24px] lg:text-[40px] leading-[40px] text-[#F9C306]">
                    PLease Mint here:
                </span>
            </div>
            
            <a 
                href="http://mint.katanainu.com"
                // target='_blank'
                className='flex items-center justify-center rounded-[19px] mt-[28px] font-extrabold lg:w-[523px] w-full h-[60px] lg:h-[128px] text-[24px] lg:text-[48px] bg-[#F9C306] uppercase'
            >
                Click Here
            </a>

            <div className='text-[#FFFFFF] flex flex-col mt-[28px] gap-y-[8px] lg:text-[16px] text-[12px]'>
              <p>Heads up! Our mint page now redirects to <span className='text-[#F9C306]'>mint.katanainu.com</span>.</p>
              <p>No worries, you can still access it by simply opening the URL on your browser. We switched to a new system to avoid high gas fees.</p>
              <p>Thanks for your continued support!</p>
            </div>
             */}
            <div className='text-[#FFFFFF] text-[16px] md:text-[20px]'>
              <p>🔔NFT Forging Collection!</p>
              <p>Mint Postponement Due to Technical Difficulties for 24hr later! 🙌🏻 </p>
              <p className='my-[20px]'>Dear #KataFam🙏🏼 </p>
              <p className='my-[20px]'>
               We regret to inform you that we have encountered some technical issues with our online minting platform for the Forge NFT collection. In order to ensure a seamless and error-free experience for all our users, we have made the decision to temporarily postpone the minting process for the next day 24hr. 

              </p>
              <p>📅11 of May 4pm UTC - For Whitelist </p>
              <p>📅12 of May 4PM UTC - For Public </p>
              <p>The same time just 1 day later.</p>
              <p className='my-[20px]'>
                Visit again <span>mint.katanainu.com</span>
              </p>
              <p className='my-[20px]'>
                Our team is working diligently to resolve the issues and ensure that the minting onboarding page functions flawlessly. We apologize for the postponement and deeply appreciate your continued support and understanding  🙏🏼 

              </p>
              <p className='my-[20px]'>
                Stay tuned for updates on the progress, and we look forward to
                sharing the revamped and improved minting experience with you
                soon.
              </p>
              <p>
                
                  Your <span>#Katanainu</span> Team®
              </p>
            </div>
            
        </div>
    
      </>
    )
  }
  
  export default InfoContractDetail
  