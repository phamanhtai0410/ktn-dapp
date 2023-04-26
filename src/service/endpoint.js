/**
 * * Common
 */
export const ROUTE = 'dapp'

/**
 * * User
 * GET: https://api-stag-ktn.esollabs.com/v1/dapp/user?address={_address}
 * POST: https://api-stag-ktn.esollabs.com/v1/dapp/user
 */
export const MODEL = 'user'
export const GET_MESSAGE = `${ROUTE}/${MODEL}` // [GET] Get a message
export const VERIFY_SIGN = `${ROUTE}/${MODEL}` // [POST] Verify signature
export const USER_REFERRAL_CODE = `${ROUTE}/referral` // [POST] Verify signature

/**
 * * NFTs
 */
export const NFT_ENDPOINT = 'nft'
export const NFT_LIST_ITEMS = `${NFT_ENDPOINT}/items`
export const NFT_LIST_COLLECTIONS = `${NFT_ENDPOINT}/collections`
export const NFT_DETAIL = `${NFT_ENDPOINT}/item`
export const NFT_DASHBOARD = `${NFT_ENDPOINT}/nfts_show`
export const BOX_DETAIL = `${NFT_ENDPOINT}/box`
export const MY_NFTS = `${NFT_ENDPOINT}/my_nfts`

export const MINT_LIST_ITEM = `${ROUTE}/alls`
export const NFT_LIST_UPCOMING = `${ROUTE}/alls/upcoming`
export const NFT_LIST_CATEGORY = `${ROUTE}/category`

export const NFT_DETAIL_ITEMS = `${ROUTE}/nft/detail`
export const NFT_CHAINS_SUPPORT = `${ROUTE}/chain/support`

// PAYMENT
export const PAYMENT_CREATE_META = `${NFT_ENDPOINT}/metadata`
export const PAYMENT_CREATE_ORDER = `${NFT_ENDPOINT}/order`
export const PAYMENT_CHECK_CODE_PROMOTION = `${NFT_ENDPOINT}/promo_code`
export const PAYMENT_CHECK_REF_CODE = `${NFT_ENDPOINT}/referral_code`
export const CHAIN_LIST = `${ROUTE}/payment`

// BOX
export const CREATE_SIGN_BOX = `${NFT_ENDPOINT}/signature_box`

// SETTING
export const SETTING = `${ROUTE}/setting`
