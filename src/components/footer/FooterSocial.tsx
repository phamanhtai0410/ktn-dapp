
import React from 'react';
import icLogo from '@/assets/images/footer/f_logo.png'
import icSocial from '@/assets/images/footer/f_ic_social.png'

const FooterSocial:React.FC = () =>{
    return (
        <div className="flex justify-between pt-8">
            <div className='content'>
                <img src={icLogo} className='w-48' alt='logo' />
            </div>
            <div className='content'>
                <img src={icSocial} className='' alt='logo' />
            </div>
        </div>
    )
}

export default FooterSocial;