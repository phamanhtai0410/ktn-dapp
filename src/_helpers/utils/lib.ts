/* eslint-disable no-extend-native */
import { NFTModel } from "@/models/redux-models";
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

export function fixedBalanceEtherZero(valueStr) {
  const stringArr = valueStr.toString().split(".");
  if (stringArr[1] === "0") {
    return stringArr[0];
  }
  return valueStr;
}

// get Link RefCode
export const getUserRefcode = () => {
  return localStorage.getItem("_refCode")
}

export const getLinkRefCode = (link:string,refCode:string) =>{
  if(refCode){
    return `${link}?r=${refCode}`
  }else{
    return link;
  }
}

// price after discount
export const percentToPrice = (price,discount)=>{
  if(!discount){
    return price;
  }
  const percent = 100 - discount; // 100% - discount%
  const total = FixedNumber.from(ethers.utils.parseUnits(price.toString(), 18)).mulUnsafe(FixedNumber.from(percent.toString())).divUnsafe(FixedNumber.from("100")).toString()  // (price * (percent))/100;
  return  Number(ethers.utils.formatUnits(fixedBalanceEtherZero(total), 18));
}

// price to percent discount
export const percentToDiscountPrice = (price,discount)=>{
  if(!discount){
    return price;
  }
  const total = FixedNumber.from(ethers.utils.parseUnits(price.toString(), 18)).mulUnsafe(FixedNumber.from(discount.toString())).divUnsafe(FixedNumber.from("100")).toString() ;
  return  Number(ethers.utils.formatUnits(fixedBalanceEtherZero(total), 18));
}

//sum add items
export function sumFixedPrice(sum ,price) {
  const total = FixedNumber.from(ethers.utils.parseUnits(sum.toString(), 18)).addUnsafe(FixedNumber.from(ethers.utils.parseUnits(price.toString(), 18))).toString();
  return  Number(ethers.utils.formatUnits(fixedBalanceEtherZero(total), 18));
}

//sum sub discount
export function sumFixedDiscount(sum ,discount) {
  if(!discount){
    return sum;
  }
  const total = FixedNumber.from(ethers.utils.parseUnits(sum.toString(), 18)).subUnsafe(FixedNumber.from(ethers.utils.parseUnits(discount.toString(), 18))).toString();
  return  Number(ethers.utils.formatUnits(fixedBalanceEtherZero(total), 18));
}

export const sumCartTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price }) => sumFixedPrice(sum,price), 0)
export const sumCartDiscountTotal = (arr:NFTModel[]) => arr.reduce((sum:number, { price ,discount}) =>  sumFixedPrice(sum,percentToPrice(price,discount)) , 0)