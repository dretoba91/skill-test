import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface QuestionAnalysisProps {
  scores: { rank: number; percentile: number; score: number };
}

const Question: React.FC<QuestionAnalysisProps> = ({ scores }) => {
  const data = [
    { name: "Correct", value: scores.score },
    { name: "Incorrect", value: 15 - scores.score },
  ];

  const COLORS = ["#007bff", "#d6d6d6"]; // Tailwind's blue-500 and gray-300

  return (
    <div className="border-2 rounded-lg p-4 mb-4 bg-white shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <h2 className="text-xl font-bold">Question Analysis</h2>
        <h4 className="text-blue-800 text-lg">{`${scores.score}/15`}</h4>
      </div>
      <p className="text-sm font-normal mb-6">
        <span className="font-bold">
          You scored {scores.score} questions correctly out of 15.
        </span>{" "}
        However, it still needs some improvements.
      </p>
      <div className="flex justify-center items-center">
        <div className="w-32 h-32 md:w-48 md:h-48">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Question;
