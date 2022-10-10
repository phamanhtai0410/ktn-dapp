
import icLogo from '@/assets/logo.png'
import icSocial from '@/assets/footer/f_ic_social.png'

const FooterSocial = () =>{
    return (
        <div className="flex justify-between pt-8">
            <div className='content'>
                <img src={icLogo} className='w-32' alt='logo' />
            </div>
            <div className='content'>
                <img src={icSocial} className='' alt='logo' />
            </div>
        </div>
    )
}

export default FooterSocial;