import { useSelector, useDispatch } from 'react-redux'
import { fetchListCategoryNFTs } from '@/actions/nftActions'
import { selectCategoryNFTs } from '@/reducers/categoryNFTs'
import { useAppDispatch } from '@/app/hooks'
import { useEffect, useState } from 'react'
import NFTsCharacterList from './NFTsCharacterList'

function NFTCharacter() {
  const listItems = useSelector(selectCategoryNFTs)
  const dispatch = useAppDispatch()
  useEffect(() => {
    fetchCollections()
  }, [])
  const fetchCollections = async () => {
    await dispatch(fetchListCategoryNFTs({}))
  }

  return (
    <div className="w-full bg-[#13121F] pb-[71px]">
      <div className="h-[66px] flex items-center justify-center uppercase text-center font-bold text-[32px] text-[#FFFFFF] bg-[rgba(16,17,36,0.1)] border-y-[3px] border-solid border-slate-900">
        <span className="text-[#F9C306]">CHOOSE your NFTs</span>
        <span className="ml-[10px]">on katana inu game</span>
      </div>
      {listItems.map((item) => {
        return <NFTsCharacterList data={item?.categories} />
      })}
    </div>
  )
}

export default NFTCharacter
