/* eslint-disable no-extend-native */
import { NFTModel } from "@/models/redux-models";
import { selectReferralRefCode } from "@/reducers/referralSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ethers , FixedNumber } from 'ethers';

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
  // console.log("---percentToPrice",price,discount);

  // return ( 100-discount) 

  return  ( price * (100-discount) ) /100 ;// 100% - discount%
  
  // console.log("percentToPrice",FixedNumber.from(price).mulUnsafe(FixedNumber.from(percent)));
  // return  FixedNumber.from(price).mulUnsafe(FixedNumber.from(percent)).divUnsafe(FixedNumber.from("100")).toUnsafeFloat() // (price * (percent))/100;
}

export function sumFixedPrice(sum ,price) {

  // const total =  FixedNumber.from(ethers.utils.parseUnits(sum.toString(), 18)).addUnsafe(FixedNumber.from(ethers.utils.parseUnits(price.toString(), 18))).toUnsafeFloat();
  // console.log("sumFixedPrice",ethers.utils.formatUnits(total, 18));
  return  sum +price;
}

export function sumFixedDiscount(sum ,discount) {
  return FixedNumber.from(sum).subUnsafe(FixedNumber.from(discount)).toUnsafeFloat();
}

export const sumCartTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sumFixedPrice(sum,price), 0)
export const sumCartDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) =>  sumFixedPrice(sum,percentToPrice(price,discount)) , 0)