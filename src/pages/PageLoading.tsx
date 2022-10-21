// import Spinner from 'react-spinner-material';
import React from 'react';

import Preloader from '@/assets/images/preloader.svg'

const PageLoading: React.FC = (): JSX.Element => {
    return (
        <div className='w-full h-screen  backdrop-opacity-75 bg-[#171D22] flex items-center justify-center'>
          {/* <Spinner radius={120} color={"#333"} stroke={2} visible={true} /> */}
         <img src={Preloader} />
        </div>
    );
}

export default PageLoading;