"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


export default function Modal({
  children ,
  show = false,
  maxWidth = "2xl",
  title = "",
  closeable = true,
  onClose = () => {},
}:{children:React.ReactNode ,show:boolean, maxWidth?:string, title:string ,closeable?:boolean,onClose:Function }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };

  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
  }[maxWidth];

  return (
    <Transition show={show} as={Fragment} leave="duration-200">
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all "
        onClose={close}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-300/75" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel
            className={`  mb-6 bg-gray-50   rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}
          >
            <div className="h-16 font-semibold bg-gray-100 px-5 text-gray-700  flex items-center  p-2">
              {title}
            </div>
            <div className="p-5 ">{children}</div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}