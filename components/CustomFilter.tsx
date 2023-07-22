"use client"

import { CustomFilterProps } from '@/types'
import { updateSearchParms } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

import React, { Fragment, useState } from 'react'

function CustomFilter({title,option}:CustomFilterProps) {
  const router=useRouter()
  const [selected,setSelected]=useState(option[0])
  const handleUpdateParams=(e:{title:string,value:string})=>{
   const newPathName=updateSearchParms(title,e.value)
   console.log(newPathName)
    router.push(newPathName)
  }
  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e)=>{setSelected(e)
         handleUpdateParams(e)}}>
        <div className='relative z-10 w-fit'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
             <Image src='chevron-up-down.svg' alt='Chevron up down' width={20} height={20} className='ml-4 object-contain'/>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
<Listbox.Options className='custom-filter__options'>
  {option.map((selected)=>(
    <Listbox.Option key={selected.value} value={selected} className={({active})=>`relative cursor-default select-none py-2 px-4 ${active?'bg-primary-blue text-white':'text-gray-900'}`}>
<span className={`block truncate ${selected?'font-medium':'font-normal'}`}>{selected.title}</span>
    </Listbox.Option>
  ))}
</Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter