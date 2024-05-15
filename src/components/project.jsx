import "../styles/styles.css";
import InlineAd from "./inline-ad";
import FixAd from "./fix-ad";
import { useState } from "react";
import OpacityAd from "./opacity-ad";
import OverlayAd from "./overlay-ad";
import InlineOpenAd from "./inline-open-ad";

export default function Project() {
  const [type, setType] = useState(0);
  const handler = (e, type) => {
    const active = document.querySelector(".active");
    if (active) active.classList.remove("active");
    e.target.classList.add("active");
    setType(type);
  };
  return (
    <>
      <div className='text-xl p-8 m-8 border-2 border-solid rounded-lg relative max-w-[800px] mx-auto my-0 mt-5 text-center'>
        <h1 className='text-2xl'>광고 스크립트 작업의 일부</h1>
        <div className='flex flex-col justify-center items-center my-8 gap-4'>
          <ul className='flex gap-4'>
            <li className='p-2 active' onClick={(e) => handler(e, 0)}>
              동적광고
            </li>
            <li className='p-2 ' onClick={(e) => handler(e, 1)}>
              정적광고
            </li>
          </ul>
          <div className='w-full flex gap-6 flex-wrap'>
            {type == 1 ? (
              <>
                <InlineAd />
                <FixAd />
              </>
            ) : (
              <>
                <InlineOpenAd />
                <OpacityAd />
                <OverlayAd />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
