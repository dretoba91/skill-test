import React from "react";
import Image from "next/image";
import UpdateModal from "./UpdateModal";

interface LanguageProps<T> {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleSaveScores: (scores: T) => void;
  scores: T;
}

const Language: React.FC<LanguageProps<any>> = ({
  handleOpenModal,
  isModalOpen,
  handleCloseModal,
  handleSaveScores,
  scores,
}) => {
  return (
    <div className="border-2 rounded-lg p-4 mb-4 bg-white shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            aria-hidden
            src="/html-5.svg"
            alt="Globe icon"
            width={40}
            height={40}
          />
          <div className="pr-4">
            <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
            <p className="text-sm text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <button
          className="bg-indigo-800 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onClick={handleOpenModal}
        >
          Update
        </button>
      </div>
      <UpdateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveScores}
        scores={scores}
      />
    </div>
  );
};

export default Language;
