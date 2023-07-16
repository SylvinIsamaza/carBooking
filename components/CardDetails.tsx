"use client"
import { carProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { Fragment } from 'react'
interface cardDetailProps{
  isOpen:boolean,
  closeModal:()=>void,
  car:carProps

}
const  CardDetails = ({isOpen,closeModal,car}:cardDetailProps) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}> 
<Dialog as="div" className=" z-30 relative w-[100vh] height-[100vh]" onClose={closeModal}>
<Transition.Child as={Fragment}>
  <div className="fixed bg-black inset-0 bg-opacity-0 w-full h-full"/>

</Transition.Child>
</Dialog>
    </Transition>
    </>
  )
}

export default CardDetails