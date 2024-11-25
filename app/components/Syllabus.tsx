interface SyllabusWiseProps {
  data: {
    title: string;
    percentage: number;
    color: string;
  }[];
}

const Syllabus: React.FC<SyllabusWiseProps> = ({ data }) => {
  return (
    <div className="border-2 rounded-lg p-4 mb-4 bg-white shadow-md">
      <h3 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h3>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-700 mb-2">{item.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex-1 bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`bg-${item.color}-500 h-2 rounded-full`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <p className={`text-${item.color}-500 text-sm font-bold ml-4`}>
              {item.percentage}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
