import vector_up from '@/assets/images/mintpage/vector_up.svg'

const MintFilter = () => {

    return(
        <div className="md:flex flex-col bg-mintfilter border-t-2 border-[#F9C306] md:w-[300px] hidden">
            <div className="flex flex-col ">
                <div className="flex flex-row justify-between px-[32px] py-[32px] text-[16px] border-b border-[#44425f]">
                    <p className="font-bold text-[#F9C306]">Filters</p>
                    <p className="font-medium text-[#FFFFFF]">Clear All</p>
                </div>
                <div className='flex flex-col py-[24px] px-[32px] border-b border-[#44425f]'>
                    <div className='flex flex-row justify-between text-[#FFFFFF] font-bold uppercase'>
                        <p className='text-[16px]'>Chain</p>
                        <img src={vector_up} alt="vector up" />
                    </div>
                    <ul className='flex flex-col list-none pl-[12px] text-[14px] text-[#FFFFFF]'>
                        <li>BNB Smart Chain</li>
                        <li>Ethereum Chain</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default MintFilter