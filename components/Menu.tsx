import { useAuth } from '@/useContext/context'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import CustomButton from './CustomButton'

export default function Menu({handleLogout}) {
  const handleCars = (close) => {
    const carContainer = document.getElementById("discover");
    carContainer?.scrollIntoView({ behavior: "smooth" });
    close();
  }

  const { user } = useAuth();

  return (
    <div className="600px:hidden flex items-end justify-end max-w-sm px-4">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <div className='flex 600px:hidden items-center w-fit py-2'>
                <Image src="/menu.png" alt='menu' width={30} height={30} />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen px-4 sm:px-0 lg:max-w-3xl">
                <div className="h-screen">
                  <div className="h-screen w-[80%] min-w-[280px] gap-8 bg-white p-7 ">
                    {user == undefined ? (
                      <div className="flex flex-col justify-between gap-2 600px:hidden">
                        <CustomButton title='Cars' btnType='button' containerStyle='rounded-full font-[600] bg-white' handleClick={() => handleCars(close)} />
                        <CustomButton title='Sign in' btnType='link' containerStyle='font-[600] text-primary-blue' url="/login" />
                        <CustomButton title='Get started' btnType='link' containerStyle='rounded-full text-white bg-primary-blue min-w-[130px]' url="/register" />
                      </div>
                    ) : (
                      <div className="600px:hidden flex-col items-start px-5 justify-between gap-4 flex ">
                        <CustomButton title='Cars' leftIcon='/car2.png' btnType='button' containerStyle='rounded-full gap-3 font-[600] bg-white' handleClick={() => handleCars(close)} />
                        <CustomButton
                          title="Profile"
                          containerStyle="font-[600] rounded-full gap-3"
                          leftIcon="/profile.png"
                            textStyles="!max-w-fit"
                          handleClick={() => close()}
                        ></CustomButton>
                        <CustomButton
                          title="Collection"
                          containerStyle="font-[600] rounded-full gap-3"
                          leftIcon="/collection.png"
                            textStyles="!max-w-fit"
                            handleClick={() => close()}
                        ></CustomButton>
                        <CustomButton
                          title="Log out"
                          containerStyle="font-[600] gap-3"
                          leftIcon="/logout1.png"
                            textStyles="!max-w-fit"
                            handleClick={() =>handleLogout()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
