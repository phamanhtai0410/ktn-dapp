/* eslint-disable no-extend-native */
import { NFTModel } from "@/models/redux-models";
import { selectReferralRefCode } from "@/reducers/referralSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { FixedNumber } from 'ethers';

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

// Cart Total ethereum
export const percentToPrice = (price,discount)=>{
  const percent = FixedNumber.from(100).subUnsafe(FixedNumber.from(discount)).toString() // 100% - discount%
  return  FixedNumber.from(price).mulUnsafe(FixedNumber.from(percent)).divUnsafe(FixedNumber.from("100")).toUnsafeFloat() // (price * (percent))/100;
}

export function sumFixedPrice(sum ,price) {
  return FixedNumber.from(sum).addUnsafe(FixedNumber.from(price)).toUnsafeFloat();
}

export function sumFixedDiscount(sum ,discount) {
  return FixedNumber.from(sum).subUnsafe(FixedNumber.from(discount)).toUnsafeFloat();
}

export const sumCartTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sumFixedPrice(sum,price), 0)
export const sumCartDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) =>  sumFixedPrice(sum,percentToPrice(price,discount)) , 0)