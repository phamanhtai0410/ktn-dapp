import WalletConnect from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import { INFURA_ID } from '../constants/config'

const getProviderOptions = () => {
  const infuraId = INFURA_ID
  const providerOptions = {
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId,
        rpc: {
          56: 'https://bsc-dataseed.binance.org/',
        },
        network: 'binance',
        chainId: 56
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: 'CRP',
        infuraId,
      },
    },
  }
  return providerOptions
}

export { getProviderOptions }
