
import React, { useEffect, useState } from 'react';
import BtnAutoActionConnectWallet from './BtnAutoActionConnectWallet';
import BtnAutoActionMint from './BtnAutoActionMint';

const QrScanLink = () => {

    return (
            <>
                <BtnAutoActionConnectWallet />
                <BtnAutoActionMint />
            </>
    )
}

export default QrScanLink;