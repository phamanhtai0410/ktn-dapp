import React from 'react';

const FooterProducts: React.FC = () => {

    const items = [
        {text:"Pancakeswap",link:"https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205"},
        {text:"Uniswap",link:"https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15"},
        {text:"Whitepaper",link:"https://katanainu.com/katanainuwhitepaper.pdf"},
        {text:"Roadmap",link:"https://katanainu.com/roadmap.png"},
        {text:"Tokenomics",link:"https://katanainu.com/katanainutokenomics.pdf"},
        {text:"FAQ",link:"https://katanainu.com/faq"}
    ];


    const listItems = items.map((number,index) =>
        <li key={index} className="text-[#b4b4b5] pt-[10px] cursor-pointer"><a href={number.link} target="_blank">{number.text}</a></li>
    );

    return (
        <div className='mt-10'>
            <p className="text-[#ffffff] font-blome">Products</p>
            <ul className="mt-4">
                {listItems}
            </ul>
        </div>
    )

}

export default FooterProducts;