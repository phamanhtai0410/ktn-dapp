

const DetailNFTSale = () => {

    return (
        <div className="flex flex-row justify-center md:justify-normal  gap-x-[50px] mt-[38px]">
            
            <div className="flex flex-col">
                <div className="flex items-center uppercase justify-center w-full md:w-[214px] h-[41px] px-[11px] md:px-[22px] py-[7px] text-[#F9C306] text-[10px] md:text-[20px] font-extrabold bg-[#000000] rounded-[12px]">
                    Public Sale
                </div>
                <div className="mt-[13px] text-center md:text-left uppercase text-[10px] md:text-[20px]">
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Price:</span> 0.040 Eth</p>
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">limit:</span> 75 NFTs</p>
                </div>
            </div>
        </div>
    )
}

export default DetailNFTSale