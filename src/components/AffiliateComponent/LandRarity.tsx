
const data = [
    {
        id: 0,
        name: 'Tier 1',
        rarity: 'EPIC',
        buy: 4,
        total: 400
    },
    {
        id: 1,
        name: 'Tier 1',
        rarity: 'RARE',
        buy: 4,
        total: 400
    },
    {
        id: 2,
        name: 'Tier 1',
        rarity: 'EPIC',
        buy: 4,
        total: 400
    },
    {
        id: 3,
        name: 'Tier 1',
        rarity: 'EPIC',
        buy: 4,
        total: 400
    },
]

const LandRarity = () => {

    return (
        <div className="w-full flex-col lg:flex-row lg:mt-0 mt-[36px]">
            <p className="text-[#F9C306] text-[26px] font-semibold">Land Rarity and other info:</p>
            <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] mt-[24px]">
                {
                    data?.map((item) => (
                        <div className="land_rarity_item bg-[#0F1218] px-[20px] py-[15px] text-[#DADADA]"
                            key={item.id}
                        >
                            <div className="flex flex-row justify-between">
                                <span className="text-[15px]">{item.name}</span>
                                <span className="text-[#F9C306] text-[20px] font-extrabold">{item.rarity}</span>
                            </div>
                            <div className="flex items-center flex-row justify-between mt-[28px]">
                                <span className="text-[13px]">People can buy:</span>
                                <span className="text-[16px] font-bold">{item.buy}</span>
                            </div>
                            <div className="flex items-center flex-row justify-between mt-[14px]">
                                <span className="text-[13px]">Total Residents:</span>
                                <span className="text-[16px] font-bold">{item.total}</span>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default LandRarity
