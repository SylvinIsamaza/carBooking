import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import CustomButton from "./CustomButton";
import user from "@/lib/model/user.model";
import { useAuth } from "@/useContext/context";
import Image from "next/image";

function ProfileModal({
  show,
  setIsShow,
}: {
  show: boolean;
  setIsShow: (value: boolean) => void;
}) {
  const { user } = useAuth();
  return (
<Transition appear show={show} as={Fragment}>
<Dialog as="div" className=" z-20 relative w-full" onClose={()=>setIsShow(false)}>
  <Transition.Child
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    as={Fragment}
  >
    <div className="fixed bg-[#00000016] inset-0 bg-opacity-25" />
  </Transition.Child>
  <div className="fixed inset-0 ">
    <div className="flex items-start h-screen py-6 w-full  justify-end px-4 text-center">
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        as={Fragment}
      >
        <Dialog.Panel className="relative   600px:max-w-fit  h-fit w-full  z-50 bg-white  overflow-y-scroll transform rounded-2xl text-left shadow-xl transition-all flex flex-col gap-5  p-6">
 
      
          <div  className="  py-6 h-fit w-full 600px:max-w-[250px] z-[90]">
          <div className="flex flex-col p-3 px-6 gap-3">
            <div className=" flex items-center justify-center">
              <Image
                src={user?.image ? user.image : "/profile.png"}
                alt="profile"
                width={70}
                height={70}
              />
            </div>

            <h3 className="text-center font-[600] py-3">{user?.email}</h3>
            <CustomButton
              title="Collection"
              containerStyle="bg-[#EFEFEF] font-[600] rounded-full gap-3  "
              leftIcon="/collection.png"
              textStyles="!max-w-fit"
            ></CustomButton>

            <CustomButton
              title="Log out"
              containerStyle="bg-primary-blue font-[600] text-white rounded-full gap-3  "
              leftIcon="/logout.png"
              textStyles="!max-w-fit"
            />
          </div>
        </div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition>
  );
}

export default ProfileModal;

