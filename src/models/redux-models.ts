export interface IPagination{
    page: number,
    page_size: number,
    num_of_page: number,
}
export interface IQueryNFTs {
    nft_id: string
}
export interface NFTModel{
    chain:string,
    chain_id:number | string,
    nft_id: number,
    name: string,
    rarity: number | string,
    description: string,
    image: string,
    animation_model_url:string | any,
    address:string,
    dapp_creator_address: string,
    gateway_address:string | any,
    pay_token_symbol:string | any,
    pay_token_address:string | any,
    discount: number,
    price: number,
    whitelist_price: number,
    total_supply: number,
    total_minted: number,
    whitelist: IwhiteList,
    is_paid_by_native:boolean
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

export interface IwhiteList{
    end_time: number,
    start_time: number
}
export interface ICartModel{
    items: NFTModel[],
    promotion: IPromotionCart,
    MAX_TOKENS_IN_ORDER:number,
    addressNFT: string,
    userNFT: NFTModel | any,
    addressCreator: string,
    addressGateway:string,
    payToken:string,
    whiteListNFT: IwhiteList,
    _refCode:string,
    _ref_p_code: string
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

export interface IChainList{
    asset: string,
    chain: string,
    chain_id:number,
    asset_logo:string,
    chain_logo:string,
    is_active:boolean
}

export interface IWalletModel{
    address: string,
    chainList: any | IChainList[],
    chainId: number,
    balance: string,
    easyWeb3:any | void,
    network: any | INetworkChain
}

export interface IReferralCode{
    address: string,
    code: string,
    address_linked: string,
    code_linked: string,
    total_user_linked: number,
    items: {}
}

export interface IBoxRoundModel{
    TOTAL_BOX: number,
    tokenIdCounter: number,
}

export interface IBoxAccountModel{
    whiteList: number,
    boxIdsByOwner: number | any
}

export interface IBoxInfoModel{
    boxPrice: string,
    boxLimit: number,
    payToken: string
}
export interface IBoxModel{
    addressBox: string,
    priceBox: string,
    items: ItemBoxModel[],
    ownerItems:[],
    boxInfo: IBoxInfoModel,
    account: IBoxAccountModel,
    round: IBoxRoundModel,
    promotion: IPromotionCart,
    _ref_p_code: string,
    openBoxStatus: string,
    openNFTs: NFTBoxModel[]
}

export interface ItemBoxModel{
    box_id: number,
    address: string,
    discount: number,
    price: number,
    image: string,
    description: string
}


export interface NFTBoxModel{
    token_id: number,
    nft_type: string,
    contract: string,
    image: string,
    name:string,
    address: string,
    description: string
}
