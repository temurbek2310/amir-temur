"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

const questions = [
  {
    question: "Amir Temur qachon yili tug‘ilgan?",
    options: ["1336", "1405", "1220", "1350"],
    answer: "1336",
  },
  {
    question: "Amir Temur qayerda tug‘ilgan?",
    options: ["Buxoro", "Samarqand", "Shahrisabz", "Toshkent"],
    answer: "Shahrisabz",
  },
  {
    question: "Amir Temurning uzugida yozilgan shiori nima edi?",
    options: [
      "Adolat bilan dunyo obod",
      "Kuch – adolatda",
      "Yurt tinch – el osoyishta",
      "G‘alaba – sabr bilan",
    ],
    answer: "Kuch – adolatda",
  },
  {
    question: "Amir Temur qaysi sulolaga asos solgan?",
    options: ["Temuriylar", "Chingiziylar", "Samanidlar", "Qoraxoniylar"],
    answer: "Temuriylar",
  },
  {
    question: "Amir Temurning xotini,Husaynning singlisi kim?",
    options: ["O'ljoy Turkon", "Kleopatra", "Sevinchbeka", "O'zbekxon"],
    answer: "O'ljoy Turkon",
  },
  {
    question: "Amir Husayn kim tomonidan xun olish maqsadida o'ldirildi?",
    options: ["Amir Temur", "Suyurg'atmish", "O'rusxon", "Kayxusrav"],
    answer: "Kayxusrav",
  },
  {
    question:
      "Amir Temur necha yoshida  Samarqandni o'z davlatining poytaxtiga aylantirdi?",
    options: ["32", "34", "24", "45"],
    answer: "34",
  },
  {
    question: "Suyurgatmish ning o'g'li kim?",
    options: ["Shohrux Mirzo", "Mahmudxon", "Ismoilxon", "Donishmandchaxon"],
    answer: "Mahmudxon",
  },
  {
    question:
      "Qachon Amir Temur o'g'li Mirzo Umarshayx Bahodirni Farg'ona dorug'asi etib tayinladi?",
    options: ["1360", "1376", "1383", "1399"],
    answer: "1376",
  },
  {
    question:
      "Amir Temurning Mo'g'ulistonga qarshi kurashi necha yilga yaqin davom etgan",
    options: ["20", "14", "23", "30"],
    answer: "30",
  },
  {
    question: "Turon taxtiga Amir Temurdan keyin kim voris etib tayinlangan",
    options: [
      "Muhammmad Sulton Mirzo",
      "Pirmuhammad Mirzo",
      "Shoxruh Mirzo",
      "Malilk Muhammad",
    ],
    answer: "Pirmuhammad Mirzo",
  },
  {
    question: "Zafarnoman asari kim tomonidan yozilgan?",
    options: ["M.Ivanin", "Ibn Arabshoh", "Nizomiddin Shomiy", "Hondamir"],
    answer: "Nizomiddin Shomiy",
  },
  {
    question: "'Katolik oqimi homiysi' degan nomni kim oldi?",
    options: ["Mironshoh", "Shohrux Mirzo", "Tulu", "Jo'chi"],
    answer: "Mironshoh",
  },
  {
    question: "Ra'd arabchada nima ma'noni anglatgan?",
    options: ["Sovut", "Manjaniq", "Kamon", "Momaqaldiroq"],
    answer: "Momaqaldiroq",
  },
  {
    question: "Kim o'z vaqtida Amir Temurni ustoz deb bilgan?",
    options: ["Toyobodiy", "Napaleon", "Sarkardalari", "Vazirlari"],
    answer: "Napaleon",
  },
];

function shuffle(array) {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Quiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState(questions); // SSR vaqtida tartibsiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; 

  useEffect(() => {
    setShuffledQuestions(shuffle([...questions])); // CSR vaqtida shuffle qilish
  }, []);

  const handleAnswerClick = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    if (option === shuffledQuestions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex + 1 < shuffledQuestions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setShuffledQuestions(shuffle([...questions]));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Navbar />
      <div className="bg-gray-800 text-white p-6 max-sm:mx-3 rounded-lg shadow-lg md:w-1/2 max-w-2xl mx-auto">
        {!quizFinished ? (
          <div>
            <h2 className="text-xl max-sm:text-base font-bold mb-4">
              {shuffledQuestions[currentQuestionIndex]?.question}
            </h2>
            <div className="space-y-2">
              {shuffledQuestions[currentQuestionIndex]?.options.map(
                (option) => (
                  <button
                    key={option}
                    className={`block w-full px-4 py-2 rounded-lg text-left text-white transition-all ${
                      selectedAnswer === option
                        ? option ===
                          shuffledQuestions[currentQuestionIndex].answer
                          ? "bg-green-500"
                          : "bg-red-500"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="text-center flex flex-col gap-1.5">
            <h2 className="text-xl font-bold">
              Savollar tugadi! Sizning ballingiz: {score} /{" "}
              {shuffledQuestions.length}
            </h2>
            <button
              className="mt-6 px-4 py-2 mx-auto bg-green-500 hover:bg-green-600 rounded-lg"
              onClick={handleRestart}
            >
              Yana test ishlash
            </button>
            <Link href={"/"}>
              <button className="mt-6 px-4 py-2 ml-auto bg-indigo-500 hover:bg-blue-600 rounded-lg">
                Asosiy sahifaga qaytish
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
