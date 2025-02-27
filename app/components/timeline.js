"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TimeLine() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".timeline-item");

    gsap.fromTo(
      sections,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play one none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={timelineRef} className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Amir Temurning Hayot Yo‘li
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Timeline Items */}
        <div className="timeline-item border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">1336 - Tavallud</h3>
          <p className="text-gray-300">
            Amir Temur 1336-yil, 9-aprel kuni Kesh (hozirgi Shahrisabz) shahrida
            tug‘ilgan.
          </p>
        </div>

        <div className="timeline-item border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">
            1360 - Hokimiyatga Kelish
          </h3>
          <p className="text-gray-300">
            Amir Temur Chig‘atoy xonligida ta’sir kuchiga ega bo‘lib, o‘z
            davlatini barpo qila boshlaydi.
          </p>
        </div>

        <div className="timeline-item border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">
            1370 - Movarounnahrni Birlash
          </h3>
          <p className="text-gray-300">
            U butun Movarounnahrni o‘ziga bo‘ysundirib, qudratli davlat tuzadi.
          </p>
        </div>

        <div className="timeline-item border border-gray-700 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">1405 - Vafoti</h3>
          <p className="text-gray-300">
            Amir Temur Xitoy yurishiga ketayotib O‘tror shahrida vafot etadi.
          </p>
        </div>
      </div>
    </div>
  );
}
