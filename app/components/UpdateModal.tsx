import { useState } from "react";

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (scores: { rank: number; percentile: number; score: number }) => void;
  scores: { rank: number; percentile: number; score: number };
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  onSave,
  scores,
}) => {
  const [formData, setFormData] = useState(scores);

  //   const [rankFormData, setRankFormData] = useState({ rank: rank });
  //   const [percentilesFormData, setPercentilesFormData] = useState({
  //     percentiles: percentiles,
  //   });
  //   const [scroeFormData, setScoreFormData] = useState({ score: score });

  //   const handleChangeRank = (e: { target: { name: any; value: any } }) => {
  //     setRankFormData({
  //       ...rankFormData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleChangePercentiles = (e: {
  //     target: { name: any; value: any };
  //   }) => {
  //     setPercentilesFormData({
  //       ...percentilesFormData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleChangeScore = (e: { target: { name: any; value: any } }) => {
  //     setScoreFormData({
  //       ...scroeFormData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  const handleChange = (e: { target: { name: string; value: number } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };
  const onCloseModal = () => {
    onClose();
  };

  return (
    isOpen && (
      //   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      //     <div className="bg-white p-4 rounded">
      //       <h3 className="text-lg font-bold">Update Scores</h3>
      //       <input
      //         type="number"
      //         name="rank"
      //         value={formData.rank}
      //         onChange={handleChange}
      //         className="border p-2 mb-2 w-full"
      //         placeholder="Rank"
      //       />
      //       <input
      //         type="number"
      //         name="percentile"
      //         value={formData.percentile}
      //         onChange={handleChange}
      //         className="border p-2 mb-2 w-full"
      //         placeholder="Percentile"
      //       />
      //       <input
      //         type="number"
      //         name="score"
      //         value={formData.score}
      //         onChange={handleChange}
      //         className="border p-2 mb-2 w-full"
      //         placeholder="Score"
      //       />
      //     </div>
      //     <div>
      //       <button
      //         onClick={onCloseModal}
      //         className="bg-blue-500 text-white p-2 rounded"
      //       >
      //         Cancel
      //       </button>
      //       <button
      //         onClick={handleSave}
      //         className="bg-blue-500 text-white p-2 rounded"
      //       >
      //         Save
      //       </button>
      //     </div>
      //   </div>

      <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <h2 className="text-2xl font-bold mb-4">Update scores</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="rank" className="block font-medium mb-1">
                Update your Rank
              </label>
              <input
                type="number"
                name="rank"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={formData.rank}
                onChange={handleChange}
                placeholder="Rank"
              />
            </div>
            <div>
              <label htmlFor="percentile" className="block font-medium mb-1">
                Update your Percentile
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                name="percentile"
                value={formData.percentile}
                onChange={handleChange}
                placeholder="Percentile"
              />
            </div>
            <div>
              <label htmlFor="score" className="block font-medium mb-1">
                Update your Current Score (out of 15)
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                name="score"
                value={formData.score}
                onChange={handleChange}
                placeholder="Score"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2"
                onClick={onCloseModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default UpdateModal;
