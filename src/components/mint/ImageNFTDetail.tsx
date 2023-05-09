
import {
  selectCartItems,
} from '@/reducers/cartSlice'
import { useSelector } from 'react-redux'
import QrCode from './QrCode'
import { useState } from 'react'
import NavQrCode from './NavQrcode'
import ImageLoading from './ImageLoading'

const ImageNFTDetail = () => {

  const listItems = useSelector(selectCartItems)
  const [checkQr,setCheckQr] = useState(false)

  const _filename = listItems[0]?.image?.split('.').pop();

  return (
    <>
       
        <div className="relative group bg-[#0D0F14] w-[400px] h-[440px] md:border-[8px] md:border-[#242632] mr-[40px] rounded-[10px]">
            {
                !checkQr ? 
                  <div className="w-full h-full flex justify-center items-center">
                    {
                      listItems[0]?.animation_model_url ?
                      
                        <model-viewer
                          style={{width: "100%", height: "75%"}}
                          alt="3D image" 
                          src={listItems[0]?.animation_model_url} ar ar-modes="webxr scene-viewer quick-look" 
                          seamless-poster shadow-intensity="1" camera-controls auto-rotate
                        />
                        
                      : 
                      
                      (
                        listItems[0]?.image ?
                          <div className='h-[75%]'>
                            {
                              _filename === 'mp4' ?
                                <video controls autoPlay muted className='h-full'>
                                    <source src={listItems[0]?.image} type="video/mp4" className='h-full' />
                                    Your browser does not support the video tag.
                                </video> 
                                :
                                <img
                                  src={listItems[0]?.image}
                                  alt="cart"
                                  className="mint__bounce-in-top animate-delay-1200 object-cover object-center rounded-[10px] h-full"
                                />
                            }
                            
                          </div> : 
                          <ImageLoading />
                      )
                    
                    }

                  </div>
              : <QrCode data={listItems[0]} />
            }
            <NavQrCode checkQr={checkQr} setCheckQr={setCheckQr} />

            
            
        </div>

    </>
  )
}

export default ImageNFTDetail
