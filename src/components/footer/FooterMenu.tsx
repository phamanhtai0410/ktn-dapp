const FooterMenu = () =>{

    const items = ["Contact Us","Discord","Medium","Reddit","Games","Privacy","Term"];
    const listItems = items.map((number) =>
        <li className="text-[#b4b4b5] pt-[10px]">{number}</li>
    );

    return (
        <div>
            <p className="text-[#ffffff]">Need help? </p>
            <ul className="mt-4">
                {listItems}
            </ul>
        </div>
    )

}

export default FooterMenu;