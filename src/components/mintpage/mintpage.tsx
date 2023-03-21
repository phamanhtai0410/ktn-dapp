import MintBanner from "../mint/MintBanner"
import MintTabs from "./minttabs"
import './index.scss'
import MintFilter from "./mintfilter"
import MintItem from "./mintitem"
import MintInfo from "./mintinfo"

const Mintpage = () => { 
    return (
        <div className='min-h-screen'>
            <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">
                <MintBanner />
            </div>
            
            <div className="max-w-[1900px] mx-auto bg-[#333]">
                <div className="bg-minttab flex w-full ">
                    <MintTabs />
                </div>
                <div className="flex w-full h-auto ">
                    <MintFilter />
                    <MintItem />
                </div>
                <div className="flex w-full ">
                    <MintInfo />
                </div>
            </div>
            
        </div>
    ) 
}

export default Mintpage