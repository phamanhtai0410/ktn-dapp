

const DetailNFTSale = () => {

    return (
        <div className="flex flex-row justify-center md:justify-normal  gap-x-[50px] mt-[38px] pt-[32px] border-t-[0.5px] border-[#C7C7C7]">
            <div className="flex flex-col">
                <div className="flex items-center uppercase justify-center w-full md:w-[214px] h-[41px] px-[22px] py-[7px] text-[#F9C306] text-[10px] md:text-[20px] font-extrabold bg-[#000000] rounded-[12px]">
                    Whitelist Sale
                </div>
                <div className="mt-[13px] text-center md:text-left uppercase text-[10px] md:text-[20px]">
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Date:</span> 10th May</p>
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Time:</span> 6pm CET - 12PM EST</p>
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Price:</span> 0.035 Eth</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center uppercase justify-center w-full md:w-[214px] h-[41px] px-[22px] py-[7px] text-[#F9C306] text-[10px] md:text-[20px] font-extrabold bg-[#000000] rounded-[12px]">
                    Public Sale
                </div>
                <div className="mt-[13px] text-center md:text-left uppercase text-[10px] md:text-[20px]">
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Date:</span> 11th May</p>
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Time:</span> 6pm CET - 12PM EST</p>
                    <p className="text-[#D4D4D4]"><span className="text-[#F9C306] font-semibold">Price:</span> 0.04 Eth</p>
                </div>
            </div>
        </div>
    )
}

export default DetailNFTSale