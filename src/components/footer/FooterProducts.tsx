import React from 'react';

const FooterProducts:React.FC = () =>{

    const items = ["Pancakeswap","Uniswap","Whitepaper","Roadmap","Tokenomics","FAQ"];
    const listItems = items.map((number) =>
        <li className="text-[#b4b4b5] pt-[10px]">{number}</li>
    );

    return (
        <div>
            <p className="text-[#ffffff]">Products</p>
            <ul className="mt-4">
                {listItems}
            </ul>
        </div>
    )

}

export default FooterProducts;