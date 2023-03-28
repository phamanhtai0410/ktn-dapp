import { QRCode } from 'react-qrcode-logo';
import queryString from 'query-string';
import { selectCartItems, selectRefCode } from '@/reducers/cartSlice';
import { useSelector } from 'react-redux';

const hostname = import.meta.env.VITE_APP_HOSTNAME.toString() || ''

const QrCode = ({data}) => {

    if(!data){
        return <></>
    }

    console.log("QrCode",data);

    const refCode = useSelector(selectRefCode);
    const listItems = useSelector(selectCartItems);

    const paramQuery = {
        nft_id: data?.nft_id,
        collectionAddress: data?.address,
        refCode,
        promotionCode: data?.promotionCode,
        promotionDiscount: data?.promotionDiscount
        // items:[...listItems].map(item => item.nft_id)
    }

    const linkAction =  queryString.stringify(paramQuery, {
        skipNull: true
    });

    const qrScanlink = `https://metamask.app.link/dapp/${hostname}/qr-scan-link?${linkAction}`

    console.log("qrScanlink",qrScanlink);

    return (
        <div className='flex justify-center'>
            <QRCode 
                //value={`https://metamask.app.link/dapp/<client_mint_url>?nft_id=1&collection_address=0xa68674a298101fc32bb8eff2fbf126288de86588&address=0x3F3450321D31cED280D7A79f93684d42a2791271&ref_code=KEQ58Y60&items[]=1,1,1`}
                value={qrScanlink}
                logoImage="https://katana-stag.esollabs.com/assets/ic-logo.14b238df.png" 
                ecLevel="H" 
                size={370} 
                logoWidth={250}
                logoOpacity={0.5} 
                qrStyle="dots" 
            />
        </div>

    )
}
export default QrCode;