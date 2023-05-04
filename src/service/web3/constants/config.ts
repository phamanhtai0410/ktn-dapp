import { networks } from './../helper/networks';
export const INFURA_ID = import.meta.env.VITE_INFURA_ID || ''
export const CHAIN_ID_BSC = import.meta.env.VITE_CHAINID_BSC || ''

export const ADDRESS_CREATOR: string = import.meta.env.VITE_ADDRESS_CREATOR?.toString() || ''

export const ADDRESS_NFT: string = import.meta.env.VITE_ADDRESS_NFT?.toString() || ''

export const ADDRESS_CREATOR_BOX : string = import.meta.env.VITE_CREATOR_BOX?.toString() || ''

export const TOKEN_USDT : string = import.meta.env.VITE_TOKEN_USDT?.toString() || ''

export const chainNetworks: string[] = [
    import.meta.env.VITE_CHAINID_BSC, // 97 BSC (TESTNET)
    import.meta.env.VITE_CHAINID_AVAX, // 43113  AVAX (Avalanche Fuji Testnet)
    import.meta.env.VITE_CHAINID_BOBA, // 9728  BOBA (Boba BNB Testnet)
    import.meta.env.VITE_CHAINID_GOERLI_ETH, // 5 ETH (Goerli)
]