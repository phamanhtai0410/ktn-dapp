/* eslint-disable no-extend-native */
import { NFTModel } from "@/models/redux-models";
import { selectReferralRefCode } from "@/reducers/referralSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const addressWalletCompact = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

export async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

export const randomKeyUUID = () => {
  return uuidv4();
};

// get Link RefCode
export const getUserRefcode = () => {
  return localStorage.getItem("_refCode")|| useSelector(selectReferralRefCode);
 }

export const getLinkRefCode = (link:string) =>{
  const _refCode = getUserRefcode();
  if(_refCode){
    return `${link}?&r=${_refCode}`
  }else{
    return link;
  }
}

// Cart Total
export const percentToPrice = (price,discount)=>{
  return (price * (100 - discount))/100;
}
export const sumCartTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sum + price, 0)
export const sumCartDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) => sum + percentToPrice(price,discount), 0)