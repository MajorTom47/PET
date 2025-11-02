const PetSitter = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] justify-between group/design-root overflow-x-hidden" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      <div>
        <div className="flex items-center bg-[#fcfaf8] p-4 pb-2 justify-between">
          <div className="text-[#1b130d] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">好好宠物保姆</h2>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
              <div className="flex flex-col items-center justify-center justify-center">
                <p className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Emily Chen</p>
                <p className="text-[#9a6c4c] text-base font-normal leading-normal text-center">宠物保姆</p>
                <p className="text-[#9a6c4c] text-base font-normal leading-normal text-center">平均回应时间: 1小时</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-3">
          <div className="flex border-b border-[#e7d9cf] px-4 gap-8">
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#ec6d13] text-[#1b130d] pb-[13px] pt-4" href="#">
              <p className="text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">服务</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9a6c4c] pb-[13px] pt-4" href="#">
              <p className="text-[#9a6c4c] text-sm font-bold leading-normal tracking-[0.015em]">评论</p>
            </a>
            <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9a6c4c] pb-[13px] pt-4" href="#">
              <p className="text-[#9a6c4c] text-sm font-bold leading-normal tracking-[0.015em]">日历</p>
            </a>
          </div>
        </div>
        <h3 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">服务范围</h3>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">在客户家中照顾</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">每晚</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.92,56h40.15L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">在客户家中探访</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">每次</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">在客户家中散步</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">每次</p>
          </div>
        </div>
        <h3 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">价格</h3>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">在客户家中照顾</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">100元/晚</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.92,56h40.15L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">在客户家中探访</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">50元/次</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">在客户家中散步</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">30元/次</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#ec6d13] text-[#fcfaf8] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">联系</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#f3ece7] text-[#1b130d] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">预订</span>
            </button>
          </div>
        </div>
        <div className="h-5 bg-[#fcfaf8]"></div>
      </div>
    </div>
  );
};

export default PetSitter;
