/**
 * * Common
 */
 export const ROUTE = "dapp";

/**
 * * User
 * GET: https://api-stag-ktn.esollabs.com/v1/dapp/user?address={_address}
 * POST: https://api-stag-ktn.esollabs.com/v1/dapp/user
 */
 export const MODEL = "user";
 export const GET_MESSAGE = `${ROUTE}/${MODEL}`;// [GET] Get a message
 export const VERIFY_SIGN = `${ROUTE}/${MODEL}`;// [POST] Verify signature

/**
 * * NFTs
 */
export const NFT_ENDPOINT = "nft";
export const NFT_LIST_ITEMS = `${NFT_ENDPOINT}/items`;
export const NFT_LIST_COLLECTIONS = `${NFT_ENDPOINT}/collections`;
export const NFT_DETAIL = `${NFT_ENDPOINT}/item`;
