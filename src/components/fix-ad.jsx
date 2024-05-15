import { useEffect } from "react";
import Title from "./util/title";

export default function FixAd() {
  useEffect(() => {
    const box = document.querySelector(".fixBox");
    const elm = document.querySelector(".fixOverlay");
    console.log("first");
    const handler = () => {
      elm.style.bottom = `-${box.scrollTop}px`;
    };

    box?.addEventListener("wheel", handler);
    return () => {
      box?.removeEventListener("wheel", handler);
    };
  }, []);

  return (
    <>
      <div className='box flex-col gap-2 w-full h-min overflow-auto'>
        <div className='fixBox content relative h-[400px] overflow-auto'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsu Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsu
          <div className='fixOverlay absolute flex flex-col box-content justify-center items-center w-full bottom-0 left-0 bg-slate-200 text-black text-center'>
            <div className='h-[70px] flex justify-center items-center'>
              fix overlay ad
            </div>
            <div className='text-black text-center w-full h-[30px] border-t border-solid'>
              Sponsored
            </div>
          </div>
        </div>
        <Title>고정 오버레이 광고</Title>
      </div>
    </>
  );
}
