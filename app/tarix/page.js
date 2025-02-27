"use client";
import Navbar from "../components/navbar";
import { useState } from "react";
import Spinner from "../components/spinner";

export default function Tarix() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <Navbar />
      <div className="max-w-5xl mt-8 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          Amir Temur Tarixi
        </h1>
        {/* <p className="text-lg text-gray-300 leading-relaxed">
          Bu yerda Amir Temurning hayoti, uning bolaligi, yoshlik davri, tarixiy
          yurishlari va davlat boshqaruvi haqida ma'lumot beriladi. Siz
          Wikipedia’dan ma’lumot olib kelib shu joyga qo‘shishingiz mumkin.
        </p> */}
        {isLoading && (
          <Spinner className="absolute top-1/2 left-1/2 size-12" />
        )}
        <iframe
          width="100%"
          height="590px"
          src="https://uz.wikipedia.org/wiki/Amir_Temur"
          title="YouTube video player"
          frameBorder="0"
          onLoad={() => setLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Interaktiv vaqt chizig'i (Timeline) yoki boshqa vizual element qo'shish mumkin */}
        {/* <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center">
            Tarixiy voqealar
          </h2>
          Timeline yoki slayder qo'shish mumkin
          <p className="text-center text-gray-400 mt-2">
            (Bu joyga timeline yoki boshqa interaktiv element qo‘shamiz)
          </p>
        </div> */}
      </div>
    </div>
  );
}
