"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Language from "../components/Language";
import QuickStat from "../components/QuickStat";
// import ComparisonGraph from "../components/ComparisonGraph";
import Syllabus from "../components/Syllabus";
import Question from "../components/Question";
import { useState } from "react";


// const dataPoints = [0, 25, 50, 75, 100];
const data = [
  { title: "HTML Tools, Forms, History", percentage: 80, color: "blue" },
  { title: "Tags & References in HTML", percentage: 60, color: "orange" },
  { title: "Tables & References in HTML", percentage: 24, color: "red" },
  { title: "Tables & CSS Basics", percentage: 96, color: "green" },
];

const SkillSet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scores, setScores] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveScores = (updatedScores: {
    rank: number;
    percentile: number;
    score: number;
  }) => {
    setScores(updatedScores);
    console.log("Updated Scores:", updatedScores);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <div className="flex-1 py-8 px-4 md:px-8">
          <h1 className="text-2xl font-medium text-gray-400 mb-4">
            Skill Test
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 p-4">
              <div className="flex flex-col space-y-4">
                <Language
                  handleOpenModal={handleOpenModal}
                  handleCloseModal={handleCloseModal}
                  handleSaveScores={handleSaveScores}
                  isModalOpen={isModalOpen}
                  scores={scores}
                />
                <QuickStat scores={scores} />
                {/* <ComparisonGraph
                  dataPoints={dataPoints}
                  percentile={scores.percentile}
                  lineColor="gray"
                  pointColor="blue"
                /> */}
              </div>
            </div>
            <div className="w-full md:w-2/5 p-4">
              <div className="flex flex-col space-y-4">
                <Syllabus data={data} />
                <Question scores={scores} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
