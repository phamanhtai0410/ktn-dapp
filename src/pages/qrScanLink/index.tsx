
import React, { useEffect, useState } from 'react';
import BtnAutoActionConnectWallet from './BtnAutoActionConnectWallet';
import BtnAutoActionMint from './BtnAutoActionMint';
import queryString from 'query-string';
import QrCode from '@/components/mint/QrCode';
interface IQueryQR {
    refCode: string & any,
    nft_id : string & any,
    collectionAddress:string & any,
    promotionCode:string & any,
    promotionDiscount:string & any,
    chainId: string & any,
  }

const QrScanLink = () => {

    const [dataAction, setDataAction] = useState<IQueryQR>({
        refCode: null,
        nft_id : null,
        collectionAddress:null,
        promotionCode:null,
        promotionDiscount:null,
        chainId: null
    });


    useEffect(() => {
        const parsed = queryString.parse(location.search);
        if(parsed){
            setDataAction({
                refCode: parsed?.refCode,
                nft_id : parsed?.nft_id,
                collectionAddress:  parsed?.collectionAddress,
                promotionCode:  parsed?.promotionCode,
                promotionDiscount:  parsed?.promotionDiscount,
                chainId: parsed?.chainId,
            })
        }
    },[location])

    return (
            <div className='flex bg-[#11151B] my-28 justify-center'>
                {dataAction && <BtnAutoActionConnectWallet dataAction={dataAction} /> }
                <QrCode data={dataAction} />
            </div>
    )
}

export default QrScanLink;