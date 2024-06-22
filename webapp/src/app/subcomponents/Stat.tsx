"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface StatProps {
  img: string;
  num: number;
  desc: string;
}

const Stat = ({ img, num, desc }: StatProps) => {
  const [countNum, setCountNum] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCountNum((prevCount) => {
          if (prevCount >= num) {
            clearInterval(timer);
            return num;
          }
          return prevCount + 2;
        });
      }, 2);

      return () => clearInterval(timer);
    }
  }, [inView, num]);

  return (
    <div className="flex gap-3" ref={ref}>
      {/* <div className="relative w-[50px] h-[60px]">
        <Image
          src={img}
          alt="img"
          fill
          objectFit="contain"
          objectPosition="center"
        />
      </div> */}
      <div className="flex flex-col text-left p-1">
        <a className="text-black font-bold text-lg">
          {countNum}
          <span></span>
        </a>

        <p className="text-black font-normal whitespace-pre text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default Stat;