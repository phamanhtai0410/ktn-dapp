const FooterFrm = () =>{
    return (
        <div>
            <div className='text-white'>
                <h4>Don't miss our latest news</h4>
                <div className='pt-6'>
                    <input placeholder='Email Address' />
                    <button type='submit' className=''>
                        Get News
                    </button>
                </div>
            </div>
            <div className="mt-10">
                <h4 className='text-white'>Disclaimer</h4>
                <p className='text-[#b4b4b5] pt-6'>Nothing in this website constitutes financial advice, and it is</p>
            </div>
        </div>
    )

}

export default FooterFrm;