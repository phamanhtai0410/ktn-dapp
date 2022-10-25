
export interface IPagination{
    page: number,
    page_size: number,
    num_of_page: number,
}

export interface IQueryNFTs {
    nft_id: string
}
export interface NFTModel{
    nft_id: number,
    name: string,
    rarity: number | string,
    description: string,
    image: string,
    price: number
}

export interface NFTArrayModel{
    items: NFTModel[],
    pagination:IPagination,
    loading: boolean
}

export interface ICollectionModel{
    collection_id: number,
    collection_name: string,
    collection_description: string,
    collection_rarity: string,
    collection_image:string
}

export interface ICollectionArrayModel{
    items: ICollectionModel[],
    pagination:IPagination,
    loading: boolean
}

export interface IPromotionCart{
    code:string,
    discount:number
}
export interface ICartModel{
    items: NFTModel[],
    promotion: IPromotionCart
}

/** WALLET */

export interface IWeb3Model{
    connectState:number,
    subscribeProvider: any | void,
    web3Provider:any | void,
    web3Modal:any | void,
    walletInfo: IWalletModel
}

export interface INetworkChain{
    chainId: number,
    ensAddress:string,
    name:string
}

export interface IWalletModel{
    address: string,
    chainId: number,
    balance: string,
    easyWeb3:any | void,
    network: any | INetworkChain
}