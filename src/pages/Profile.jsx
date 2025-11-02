const Profile = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] justify-between group/design-root overflow-x-hidden" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      <div>
        <div className="flex items-center bg-[#fcfaf8] p-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
          </div>
          <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">我的</h2>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
              <div className="flex flex-col items-center justify-center justify-center">
                <p className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Emily Chen</p>
                <p className="text-[#9a6c4c] text-base font-normal leading-normal text-center">Member since 2022</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">我的订单</h3>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-base font-normal leading-normal flex-1 truncate">待完成</p>
          </div>
          <div className="shrink-0"><p className="text-[#1b130d] text-base font-normal leading-normal">2</p></div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-base font-normal leading-normal flex-1 truncate">已完成</p>
          </div>
          <div className="shrink-0"><p className="text-[#1b130d] text-base font-normal leading-normal">10</p></div>
        </div>
        <h3 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">我的收藏</h3>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-base font-normal leading-normal flex-1 truncate">收藏的服务提供者</p>
          </div>
          <div className="shrink-0"><p className="text-[#1b130d] text-base font-normal leading-normal">5</p></div>
        </div>
        <h3 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">我的设置</h3>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-base font-normal leading-normal flex-1 truncate">消息通知</p>
          </div>
          <div className="shrink-0">
            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#f3ece7] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#ec6d13]">
              <div className="h-full w-[27px] rounded-full bg-white" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px'}}></div>
              <input type="checkbox" className="invisible absolute" />
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-base font-normal leading-normal flex-1 truncate">常见问题</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#1b130d] flex size-7 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14 justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#1b130d] flex items-center justify-center rounded-lg bg-[#f3ece7] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-base font-normal leading-normal flex-1 truncate">关于</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#1b130d] flex size-7 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </div>
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
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <p className="text-[#9a6c4c] text-xs font-medium leading-normal tracking-[0.015em]">服务</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <p className="text-[#9a6c4c] text-xs font-medium leading-normal tracking-[0.015em]">消息</p>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#1b130d]" href="#">
            <div className="text-[#1b130d] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-xs font-medium leading-normal tracking-[0.015em]">我的</p>
          </a>
        </div>
        <div className="h-5 bg-[#fcfaf8]"></div>
      </div>
    </div>
  );
};

export default Profile;
