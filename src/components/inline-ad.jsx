import Title from "./util/title";

export default function InlineAd() {
  const rand = Math.floor(Math.random() * 5) + 3;
  const divElm = Array.from({ length: rand }, (_, index) => index);
  return (
    <>
      <div className='box w-full block'>
        <div className='content h-[400px] overflow-auto'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <div className='flex float-left justify-center items-center m-2 w-full max-w-[250px] h-[250px] border-[1px] bg-white text-black'>
            inline ad
          </div>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsu
        </div>
        <Title>인라인 피드 광고</Title>
      </div>
    </>
  );
}
