const Landing = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#fcfaf8] justify-between group/design-root overflow-x-hidden" style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      <div>
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#fcfaf8] @[480px]:rounded-xl min-h-80" style={{backgroundImage: 'url("/src/assets/images/placeholder.png")'}}></div>
          </div>
        </div>
        <h2 className="text-[#1b130d] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Your pet's perfect day, every day</h2>
        <p className="text-[#1b130d] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Book trusted sitters and walkers who'll treat your pets like family</p>
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#ec6d13] text-[#fcfaf8] text-base font-bold leading-normal tracking-[0.015em] w-full">
              <span className="truncate">Get Started</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#f3ece7] text-[#1b130d] text-base font-bold leading-normal tracking-[0.015em] w-full">
              <span className="truncate">Log In</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 border-t border-[#f3ece7] bg-[#fcfaf8] px-4 pb-3 pt-2">
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#1b130d]" href="#">
            <div className="text-[#1b130d] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
              </svg>
            </div>
          </a>
          <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#9a6c4c]" href="#">
            <div className="text-[#9a6c4c] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="h-5 bg-[#fcfaf8]"></div>
      </div>
    </div>
  );
};

export default Landing;
