"use client"
import { ShowMoreProps } from '@/types'
import React from 'react'

import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { updateSearchParms } from '@/utils'
const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
  const router=useRouter()
  const handleNavigation=()=>{
    const newLimit=(pageNumber+1)*10
    const newPathName=updateSearchParms("limit",`${newLimit}`)
    router.push(newPathName)
  }
  return (
    <div className='w-full flex-center'>
      {isNext&&(
        <CustomButton title='Show More' btnType='button' handleClick={handleNavigation} containerStyle='bg-primary-blue rounded-full text-white'/>
      )}
    </div>
  )
}

export default ShowMore