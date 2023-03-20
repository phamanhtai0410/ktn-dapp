import vector90 from '@/assets/images/footer/vector90.svg'
const FooterMenu = () => {

    const items = [
        {text:"Contact Us",link:"https://katanainu.com/#contact"},
        {text:"Discord",link:"https://discord.com/invite/sruA5AZPAS"},
        {text:"Medium",link:"https://medium.com/@katanainu/katana-inu-a-great-play2earn-battle-royale-pc-game-with-nft-marketplace-on-layer-2-a56f9bbcce79"},
        {text:"Reddit",link:"https://www.reddit.com/r/katanainu"},
        {text:"ChainVision Games",link:"https://katanainu.com/"},
        // {text:"Privacy",link:"https://katanainu.com/Katanainuprivacy.pdf"},
        // {text:"Terms Of Service",link:"https://katanainu.com/term-service"},
        // {text:"Cookies Policy",link:"https://katanainu.com/cookies-policy"}
    ]
    const listItems = items.map((number,index) =>
        <li key={index} className="text-[#b4b4b5] cursor-pointer mb-[16px]">
            <div className="p-[8px]"><a href={number.link} target="_blank">{number.text}</a></div>
            <div className='footer-line'></div>
        </li>
    );

    return (
        <div className="mt-[24px] ml-[24px]">
            <div>
                <img src={vector90} alt="" />
            </div>
            <p className="text-[#ffffff] font-blome">Need help? </p>
            <ul className="mt-4">
                {listItems}
            </ul>
        </div>
    )

}

export default FooterMenu;