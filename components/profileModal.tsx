import { Transition } from "@headlessui/react";
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
    <Transition
      show={show}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-1 scale-1"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-1 scale-1"
      leaveTo="opacity-0 scale-0"
    >
      <Transition.Child className="fixed h-screen top-0 left-0 bg-[#00000008] w-full z-[90] flex justify-end  sm:px-10 3xl:px-[30%] px-6 py-4">
        <div className="bg-white rounded-xl  py-6 h-fit w-full 600px:max-w-[250px]">
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
      </Transition.Child>
    </Transition>
  );
}

export default ProfileModal;
