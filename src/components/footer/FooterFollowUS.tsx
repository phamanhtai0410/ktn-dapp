import Twitter from '@/assets/images/footer/Twitter.svg'
import Telegram from '@/assets/images/footer/Telegram.svg'
import Game from '@/assets/images/footer/Game.svg'
import Insta from '@/assets/images/footer/Insta.svg'
import Linkedin from '@/assets/images/footer/Linkedin.svg'
import Facebook from '@/assets/images/footer/Facebook.svg'
import vector90 from '@/assets/images/footer/vector90.svg'


const FooterFollowUS = () =>{
    const items = [
        {text:"Terms of Service",link:"https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205"},
        {text:"Cookies Policies",link:"https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15"},
    ];

    const listItems = items.map((number,index) =>
        <li key={index} className="text-[#b4b4b5] w-[140px] cursor-pointer mb-[16px]">
            <div className='p-[8px]'><a href={number.link} target="_blank">{number.text}</a></div>
            <div className='footer-line'></div>
        </li>
    );

    return (
        <div className='mt-[32px] md:mt-[120px]'>
            <div>
                <img src={vector90} alt="" className='hidden md:flex' />
            </div>
            <p className="text-[#ffffff] font-blome capitalize">Follow us</p>
            <div className='md:flex md:flex-row grid grid-cols-4 gap-x-[16px] mt-[24px] '>
                <a href="https://twitter.com/katanainu" target='_blank'>
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://t.me/katanainu" target='_blank'>
                    <img src={Telegram} alt="Telegram" />
                </a>
                <a href="https://discord.com/invite/katanainu" target='_blank'>
                    <img src={Game} alt="Game" />
                </a>
                <a href="https://www.instagram.com/katanainu/" target='_blank'>
                    <img src={Insta} alt="Insta" />
                </a>
                <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                </a>
                <a href="/">
                    <img src={Facebook} alt="Facebook" />
                </a>
            </div>
            <ul className="mt-4">
                {listItems}
            </ul>
        </div>
    )
}

export default FooterFollowUS
