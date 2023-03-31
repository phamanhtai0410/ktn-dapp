
import { useSelector, shallowEqual } from "react-redux";
import queryString from 'query-string';

import Countdown from './Countdown';

const SummaryTimeEvent = ({ data, checkTimeOpen, checkTimeEnd }) => {

    // const checkTimeEnd = () => {
    //     return tokenIdCounter < totalBox;
    // }

    const showTitle = () => {
        // return "Egg Baskets Sales Coming Soon";
        if (!account) {
            return "Egg Baskets";
        } else if (checkTimeOpen() === false) {
            return "Egg Baskets Sales Coming Soon";
        } else if (checkTimeEnd() === true) {
            return 'Egg Baskets Sales Now Online'
        } else {
            return 'Egg Baskets Sales Ended';
        }

    }

    return (

        <div className="text-[#FFFFFF] font-medium text-[24px] py-[20px]">

            <p className="text-[#FFFFFF] font-medium text-[24px] py-[20px]">21.10.2021 - starting at 06:00 PM CET</p>

            <h4 className="box-title-msg">
                {showTitle()}
            </h4>

        </div>
    )

}

export default SummaryTimeEvent;