interface QuickStatProps {
  scores: { rank: number; percentile: number; score: number };
}

const QuickStat: React.FC<QuickStatProps> = ({ scores }) => {
  return (
    <div className="border-2 rounded-lg p-4 mb-4 bg-white shadow-md">
      <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* Rank Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex item-center justify-center w-12 h-12 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gold"
              className="bi bi-trophy"
              viewBox="0 0 16 16"
              style={{ display: "block", margin: "auto" }}
            >
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold">{scores.rank}</p>
            <p className="text-sm font-medium text-gray-400">YOUR RANK</p>
          </div>
        </div>

        {/* Percentile Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex item-center justify-center w-12 h-12 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard2"
              viewBox="0 0 16 16"
              style={{ display: "block", margin: "auto" }}
            >
              <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z" />
              <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold">{scores.percentile}%</p>
            <p className="text-sm font-medium text-gray-400">PERCENTILE</p>
          </div>
        </div>

        {/* Score Section */}
        <div className="flex items-center">
          <div className="flex item-center justify-center w-12 h-12 bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-file-check"
              viewBox="0 0 16 16"
              style={{ display: "block", margin: "auto" }}
            >
              <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold">{scores.score}</p>
            <p className="text-sm font-medium text-gray-400">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStat;
