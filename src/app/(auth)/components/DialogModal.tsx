import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from "lucide-react";

interface DialogModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function DialogModal({ isOpen, onClose, children }: DialogModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
      <Transition.Child
  as={Fragment}
  enter="ease-out duration-300"
  enterFrom="opacity-0"
  enterTo="opacity-100"
  leave="ease-in duration-200"
  leaveFrom="opacity-100"
  leaveTo="opacity-0"
>
          {/* Backdrop with blur */}
          <div className="fixed inset-0 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
  <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-8">

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            <Dialog.Panel className="relative w-full max-w-md sm:max-w-lg md:max-w-xl transform overflow-hidden rounded-2xl bg-neutral-800 p-6 sm:p-8 text-left align-middle shadow-xl transition-all">

  <button
    onClick={onClose}
    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white bg-transparent hover:bg-white/10 transition-colors"
  >
    <X size={20} />
  </button>

  {children}
</Dialog.Panel>

            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
