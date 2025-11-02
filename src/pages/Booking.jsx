const Booking = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] justify-between group/design-root overflow-x-hidden" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      <div>
        <div className="flex items-center bg-[#fcfaf8] p-4 pb-2 justify-between">
          <div className="text-[#1b130d] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">预订服务</h2>
        </div>
        <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">订单明细</h2>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">小狗大厦</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">博罗尼亚大街</p>
          </div>
        </div>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d9cf] py-5">
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">服务</p>
            <p className="text-[#1b130d] text-sm font-normal leading-normal">白天照顾</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d9cf] py-5">
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">时间</p>
            <p className="text-[#1b130d] text-sm font-normal leading-normal">2024年7月20日 上午9:00 - 下午6:00</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d9cf] py-5">
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">宠物</p>
            <p className="text-[#1b130d] text-sm font-normal leading-normal">小狗</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e7d9cf] py-5">
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal">总价</p>
            <p className="text-[#1b130d] text-sm font-normal leading-normal">$35</p>
          </div>
        </div>
        <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">支付方式</h2>
        <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
          <div className="bg-center bg-no-repeat aspect-video bg-contain h-6 w-10 shrink-0" style={{backgroundImage: 'url("/src/assets/images/visa.svg")'}}></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#1b130d] text-base font-medium leading-normal line-clamp-1">信用卡</p>
            <p className="text-[#9a6c4c] text-sm font-normal leading-normal line-clamp-2">.... 1234</p>
          </div>
        </div>
        <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">时间表</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
          <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
            <div className="flex items-center p-1 justify-between">
              <button>
                <div className="text-[#1b130d] flex size-10 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                  </svg>
                </div>
              </button>
              <p className="text-[#1b130d] text-base font-bold leading-tight flex-1 text-center">July 2024</p>
              <button>
                <div className="text-[#1b130d] flex size-10 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="grid grid-cols-7">
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">M</p>
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">W</p>
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">F</p>
              <p className="text-[#1b130d] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
              <button className="h-12 w-full text-[#1b130d] col-start-4 text-sm font-medium leading-normal">
                <div className="flex size-full items-center justify-center rounded-full">1</div>
              </button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">2</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">3</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">4</div></button>
              <button className="h-12 w-full text-[#fcfaf8] text-sm font-medium leading-normal">
                <div className="flex size-full items-center justify-center rounded-full bg-[#ec6d13]">5</div>
              </button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">6</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">7</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">8</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">9</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">10</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">11</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">12</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">13</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">14</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">15</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">16</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">17</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">18</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">19</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">20</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">21</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">22</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">23</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">24</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">25</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">26</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">27</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">28</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">29</div></button>
              <button className="h-12 w-full text-[#1b130d] text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">30</div></button>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-1">
          <div className="group flex-1">
            <p className="text-[#d7bead] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center group-[:first-child]:rounded-l-full group-[:last-child]:rounded-r-full">9:00 AM</p>
            <p className="text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center group-[:first-child]:rounded-l-full group-[:last-child]:rounded-r-full bg-[#f3ece7]">10:00 AM</p>
            <p className="text-[#d7bead] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center group-[:first-child]:rounded-l-full group-[:last-child]:rounded-r-full">11:00 AM</p>
          </div>
          <div className="group flex-1">
            <p className="text-[#d7bead] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center group-[:first-child]:rounded-l-full group-[:last-child]:rounded-r-full">6:00 PM</p>
            <p className="text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center group-[:first-child]:rounded-l-full group-[:last-child]:rounded-r-full bg-[#f3ece7]">7:00 PM</p>
            <p className="text-[#d7bead] text-sm font-bold leading-normal tracking-[0.015em] flex h-11 items-center justify-center truncate px-4 text-center group-[:first-child]:rounded-l-full group-[:last-child]:rounded-r-full">8:00 PM</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#ec6d13] text-[#fcfaf8] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">确认预订</span>
          </button>
        </div>
        <div className="flex gap-2 border-t border-[#f3ece7] bg-[#fcfaf8] px-4 pb-3 pt-2">
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#1b130d]" href="#">
            <div className="text-[#1b130d] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#1b130d] text-xs font-medium leading-normal tracking-[0.015em]">首页</p>
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

export default Booking;
