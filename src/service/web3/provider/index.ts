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
        supportedChainIds: [5,56, 97],
        rpc: {
          97: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
          56: 'https://bsc-dataseed.binance.org',
        }
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
