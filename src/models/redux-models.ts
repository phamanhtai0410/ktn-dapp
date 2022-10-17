
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
    rarity: string,
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


export interface ICartModel{
    items: NFTModel[],
    code:string,
}