import AddNew from "../components/Addnew";
import { useState } from "react";
export default function NewUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="p-6">
      <button
        onClick={openModal}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring"
      >
        Add New
      </button>

      {isModalOpen && <AddNew onClose={closeModal} />}
    </div>
  );
}
