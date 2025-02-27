import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function CityModal({ isOpen, closeModal, city }) {
  if (!city) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[1000]"
        onClose={closeModal}
      >
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"></div>

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center z-[1000] p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative z-[1000]"
            >
              <Dialog.Title className="text-xl font-bold text-gray-800">
                {city.name}
              </Dialog.Title>
              <img
                src={city.image}
                alt={city.name}
                className="mt-3 w-full h-96 object-center rounded-lg"
              />
              <p className="mt-3 text-gray-600">{city.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={closeModal}
              >
                Yopish
              </button>
            </motion.div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
