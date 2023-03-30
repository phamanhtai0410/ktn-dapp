
import React, { useEffect, useState } from 'react';
import BtnAutoActionConnectWallet from './BtnAutoActionConnectWallet';

import queryString from 'query-string';
import QrCode from '@/components/mint/QrCode';
import { fetchDetailNFTs } from '@/actions/nftActions';
import { setItemNFTs } from '@/reducers/cartSlice';
import { useAppDispatch } from '@/app/hooks';
interface IQueryQR {
    refCode: string & any,
    nft_id : string & any,
    collectionAddress:string & any,
    promotionCode:string & any,
    promotionDiscount:string & any,
    chainId: string & any,
  }

const QrScanLink = () => {

    const dispatch = useAppDispatch();

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

    useEffect(() => {
        if (dataAction.collectionAddress &&  dataAction.nft_id) {
          fetchCartItems(dataAction.collectionAddress,dataAction.nft_id)
        }
    }, [dataAction])
    
    const fetchCartItems = async (address, nft_id) => {
        const itemsCart = await dispatch(fetchDetailNFTs({ address, nft_id }))
        if (itemsCart) {
            dispatch(setItemNFTs(itemsCart.payload.items))
        }
    }

    return (
        <div className='bg-[#11151B]'>
            {dataAction && <BtnAutoActionConnectWallet dataAction={dataAction} /> }
            <div className='py-24'>
                <QrCode data={dataAction} />
            </div>
        </div>
    )
}

export default QrScanLink;