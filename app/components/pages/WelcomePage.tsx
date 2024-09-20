const WelcomePage = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center shrink-0 desktop:min-h-[700px] mobile:min-h-[640px] text-center desktop:text-[100px] mobile:text-[56px] text-black font-oswald">
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center desktop:p-14 mobile:p-6">
        <div className="self-stretch relative capitalize font-bold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <p className="m-0 animate-slide-in-bck-left">Toma Hara</p>
          <p className="m-0 animate-slide-in-bck-right">Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
