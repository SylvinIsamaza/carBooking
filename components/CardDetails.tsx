"use client";
import { carProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
import carImage from "@/assets/car.png"
interface cardDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}
const CardDetails = ({ isOpen, closeModal, car }: cardDetailProps) => {
  const colors = [{ name: "Blue Pearl", color: "primary-blue" }, { name: "Silver", color: "gray-300" }, { name: "Red", color: "red-800" }, { name: "White", color: "white"}]
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" z-20 relative w-full" onClose={closeModal}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div className="fixed bg-black inset-0 bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 ">
            <div className="flex items-center h-screen py-[80px] w-full   justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                as={Fragment}
              >
                <Dialog.Panel className="relative  h-[99vh] 600px:max-h-[95%] w-full max-w-[1000px] z-50 bg-white  overflow-y-scroll transform rounded-2xl text-left shadow-xl transition-all flex flex-col gap-5  p-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit bg-primary-blue-100 rounded-full p-1"
                  >
                    <Image
                      src="/close.svg"
                      width={18}
                      height={18}
                      alt="close"
                      className="object-contain "
                    />
                  </button>
                  <div className="flex 600px:flex-row flex-col-reverse gap-3 items-center py-2 justify-between">
                    <div className="mt-3 flex flex-col-reverse 600px:flex-col flex-1 flex-wrap w-full gap-4 px-0 600px:px-16">
                      <p className="text-center w-full font-[600] text-xl mb-3">Specs</p>
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex w-full justify-between  text-right gap-5">
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-black-100">
                            {value}
                          </p>
                        </div>
                      ))}
                      <div className="border  flex-col gap-3 w-full  rounded-lg py-2 border-gray-300 flex items-center justify-center ">
                        <p className="text-[24px] font-bold">Exterior color</p>
                        <p>Bleue pearl</p>
                        <div className="flex py-3 gap-3">
                          {colors.map(color => (
                            <div className={`w-[50px] h-[50px] rounded-full bg-${color.color}`}></div>
                          ))}
                        </div>
                     </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-[20px] justify-center">
                      <Image className="w-[90%]" src={carImage} alt="Car" />
                      <button className="bg-primary-blue py-3 rounded-full text-white font-[600] w-[130px]">Drag to Rotate</button>
                      </div>
</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetails;
