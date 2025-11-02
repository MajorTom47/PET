const Services = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] justify-between group/design-root overflow-x-hidden" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      <div>
        <div className="flex items-center bg-[#fcfaf8] p-4 pb-2 justify-between">
          <div className="text-[#1b130d] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">服务</h2>
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#9a6c4c] flex border-none bg-[#f3ece7] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <svg xmlns="http://www.w.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input placeholder="搜索服务" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-full placeholder:text-[#9a6c4c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" value="" />
            </div>
          </label>
        </div>
        <div className="flex gap-3 p-3 overflow-x-hidden">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
            <p className="text-[#1b130d] text-sm font-medium leading-normal">特色服务</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
            <p className="text-[#1b130d] text-sm font-medium leading-normal">优惠活动</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f3ece7] pl-4 pr-4">
            <p className="text-[#1b130d] text-sm font-medium leading-normal">全部服务</p>
          </div>
        </div>
        <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">特色服务</h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
              <p className="text-[#1b130d] text-base font-medium leading-normal">精品美容</p>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
              <p className="text-[#1b130d] text-base font-medium leading-normal">专业散步</p>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
              <p className="text-[#1b130d] text-base font-medium leading-normal">家庭照顾</p>
            </div>
          </div>
        </div>
        <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">优惠活动</h2>
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-col gap-1 flex-[2_2_0px]">
              <p className="text-[#9a6c4c] text-sm font-normal leading-normal">新客专享</p>
              <p className="text-[#1b130d] text-base font-bold leading-tight">首单减免十元</p>
              <p className="text-[#9a6c4c] text-sm font-normal leading-normal">有效期至2024年12月31日</p>
            </div>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 border-t border-[#f3ece7] bg-[#fcfaf8] px-4 pb-3 pt-2">
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
              </svg>
            </div>
            <p className="text-[#9a6c4c] text-xs font-medium leading-normal tracking-[0.015em]">首页</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#1b130d]" href="#">
            <div className="text-[#1b130d] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-xs font-medium leading-normal tracking-[0.015em]">服务</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <p className="text-[#9a6c4c] text-xs font-medium leading-normal tracking-[0.015em]">消息</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <p className="text-[#9a6c4c] text-xs font-medium leading-normal tracking-[0.015em]">我的</p>
          </a>
        </div>
        <div className="h-5 bg-[#fcfaf8]"></div>
      </div>
    </div>
  );
};

export default Services;
