"use client";
import useQnA from "@/hooks/useQna";
import { TbHandClick } from "react-icons/tb";
import React, { useState } from "react";

const CSS3 = () => {
  const { allQnA, loading } = useQnA();
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedQuestionId(expandedQuestionId === id ? null : id);
  };

  return (
    <div className=" flex flex-col gap-4 p-2 ">
      <div className="bg-white p-2 text-center md:w-[30%] mx-auto font-semibold flex flex-col items-center justify-center rounded-lg">
        <img
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS3 Badge"
           className="rounded-md w-20 h-7 md:w-36 md:h-11"
        />
        <p className="flex items-center gap-2 text-sm md:text-base"><TbHandClick className="hidden md:flex"/>click on the question to see answer</p>
        
      </div>
      {loading ? (
        <p className="flex justify-center items-center text-[#ff7777]">
           <span className="loading loading-ball loading-lg min-h-screen"></span>
        </p>
      ) : (
        allQnA
          ?.filter((filteredQna) => filteredQna.qtype === "CSS3")
          .map((qna, index) => (
            <div key={qna._id} className="">
             <div
                className="bg-white p-3 cursor-pointer rounded-md shadow-md"
                onClick={() => toggleAnswer(qna._id)}
              >
                <p className="text-violet-600 font-semibold text-sm md:text-base">
                  {index + 1}. {qna.question}
                </p>
                {expandedQuestionId === qna._id && (
                  <div className="mt-2 text-sm md:text-base">{qna.answer} {qna.code &&(<p className="bg-gray-200 p-1 rounded-md text-blue-600">Example code: {qna.code}</p>)}</div>
                 
                )}
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default CSS3;