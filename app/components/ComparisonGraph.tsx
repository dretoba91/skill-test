"use client";

import React from "react";
import { Chart } from "react-chartjs-2";
// import Chart from 'chart.js/auto';

import {
  Chart as ChartJS,
  CategoryScale, LineController, LineElement, PointElement, LinearScale, Title, Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  LineController,
  Title,
  Tooltip,
  Legend
);

interface PercentileChartProps {
  dataPoints: number[];
  percentile: number;
  lineColor: string;
  pointColor: string;
}

const ComparisonGraph: React.FC<PercentileChartProps> = ({
  dataPoints,
  percentile,
  lineColor,
  pointColor,
}) => {
  const labels = Array.from(
    { length: dataPoints.length },
    (_, i) => i * (100 / (dataPoints.length - 1))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Percentile Distribution",
        data: dataPoints,
        borderColor: lineColor,
        backgroundColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: pointColor,
        pointRadius: 4,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        title: { display: true, text: "Percentile" },
        grid: { display: false },
      },
      y: {
        title: { display: true, text: "Frequency" },
        beginAtZero: true,
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
    annotations: {
      annotations: [
        {
          type: "line",
          xMin: percentile,
          xMax: percentile,
          borderColor: "gray",
          borderWidth: 2,
          label: {
            content: "Your Percentile",
            enabled: true,
            position: "start",
            color: "gray",
          },
        },
      ],
    },
  };

  return (
    <div className="border-2 rounded-lg p-4 mb-4 bg-white shadow-md">
      <h3 className="text-lg font-bold mb-4">Comparison Graph</h3>
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <p className="text-sm font-normal md:w-2/3 pr-4 mb-4 md:mb-0">
          <span className="text-sm font-bold">You scored {percentile}%</span>{" "}
          which is lower than the average percentile of 72% of all the engineers
          who took this assessment.
        </p>
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2zm-6 2h8v2h-8V4zm0 4h8v2h-8V8zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
        </svg>
      </div>
      <div className="w-full h-64 md:h-80">
        <Chart data={data} options={options} type="line" />
      </div>
    </div>
  );
};

export default ComparisonGraph;
