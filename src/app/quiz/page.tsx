"use client";
import React, { useState } from "react";
import { quiz } from "./data";
import { link } from "fs";
import { list } from "postcss";
import Link from "next/link";
export default function Question() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSeletedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSeletedAnswerIndex] = useState(null);
  const [showresult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctanswer: 0,
    wronganswer: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];
  //select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSeletedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSeletedAnswer(true);
      console.log("true");
    } else {
      setSeletedAnswer(false);
      console.log("false");
    }
  };
  //calculate score and increment next question
  function nextQuestion() {
    setSeletedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctanswer: prev.correctanswer + 1,
        }
        : {
          ...prev,
          wronganswer: prev.wronganswer + 1,
        }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  }
  //store local
  localStorage.setItem('quizScore', JSON.stringify(result));
  return (
    <section className="flex justify-center">
      <div
        className="mt-40  h-40 w-4/5 sm:w-1/2 sm:h-[15.5rem] bg-blue-300 rounded-xl 
      drop-shadow-[10px_5px_2px_rgba(0,0,0,0.25)] border-solid border-2 border-gray-400"
      >
        <div>
          {!showresult ? (
            <div className="m-4">
              <h3 className="ml-2 mt-1 font-mono">
                Question:{activeQuestion + 1}
                <span>/{questions.length}</span>
              </h3>
              <h2 className="m-2 font-bold tracking-wide">
                {questions[activeQuestion].question}
              </h2>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={
                    selectedAnswerIndex === idx
                      ? "m-2 border-solid border-slate-400 border rounded-md list-none font-bold bg-blue-400"
                      : "list-none m-2 border-solid border-slate-400 border rounded-md hover:font-bold hover:bg-blue-400 font-serif"
                  }
                >
                  <span className="ml-2">{answer}</span>
                </li>
              ))}
              {checked ? (
                <div className="flex items-center justify-center">
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-[1px] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    {activeQuestion === questions.length - 1
                      ? "Finesh"
                      : "Next"}
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <button
                    onClick={nextQuestion}
                    disabled
                    className="px-6 py-[1px] text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    {activeQuestion === questions.length - 1
                      ? "Finesh"
                      : "Next"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="felx felx-col gap-y-1 p-1 text-lg  font-medium font-mono capitalize  ">
              <h3 className=" text-center mb-1 font-bold font-mono text-xl">
                Results
              </h3>
              <div className="pl-2 text-center">
                <h3>Overall: {(result.score / 25) * 100}%</h3>
                <p>
                  Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                  Total Score: <span>{result.score}</span>
                </p>
                <p>
                  Correct Answers: <span>{result.correctanswer}</span>
                </p>
                <p>
                  Wrong answers: <span>{result.wronganswer}</span>
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="py-2 mt-2 px-4 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg 
                  border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Restart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </button>{" "}
                <Link
                  type="button"
                  className="py-2 mt-2 px-4 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg 
                  border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200"
                  href="/"
                >
                  home
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
