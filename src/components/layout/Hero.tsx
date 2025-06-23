import porsche from "../../assets/images/porsche.png";
import Spotlight from "../ui/Spotlight";
const Hero = () => {
  return (
    <div className=" flex flex-col overflow-hidden w-full h-screen ">
      <Spotlight />
      <div className=" m-auto  w-[80%]">
        <h1 className="text-8xl font-bold text-[#DAE2E9]">911 GT3 RS</h1>
        <h2 className="  mt-2 text-3xl leading-tight  text-[#AFB6BA]">
          Precision engineered <br /> for the purest driving experience
        </h2>
        <img
          className=" mx-auto "
          height={1100}
          width={1100}
          src={porsche}
          alt=""
        />
      </div>
      {/* main container */}
      <div className=" flex w-full  bg-[#000000] ">
        {/* secondary container */}
        <div className="flex w-[80%] mx-auto">
          {/* content */}
          <div className=" p-12">
            <h1 className="text-5xl font-bold text-[#AFB6BA]">520 hp</h1>
            <h2 className="  mt-4 text-2xl leading-tight  text-[#AFB6BA]">
              Max HorsePower
            </h2>
          </div>
          {/* separator */}
          <div className=" my-auto w-[1px] bg-[#AFB6BA] h-[60%]"></div>

          <div className=" p-16">
            <h1 className="text-5xl font-bold text-[#AFB6BA]">3.0s</h1>
            <h2 className="  mt-4 text-2xl leading-tight  text-[#AFB6BA]">
              0-60mph
            </h2>
          </div>
          {/* separator */}
          <div className=" my-auto w-[1px] bg-[#AFB6BA] h-[60%]"></div>

          <div className=" p-16">
            <h1 className="text-5xl font-bold text-[#AFB6BA]">Top Speed</h1>
            <h2 className="  mt-4 text-2xl leading-tight  text-[#AFB6BA]">
              193mph
            </h2>
          </div>
          {/* separator */}
          <div className=" my-auto w-[1px] bg-[#AFB6BA] h-[60%]"></div>

          <div className=" p-16">
            <h1 className="text-5xl font-bold text-[#AFB6BA]">7:12.4</h1>
            <h2 className="  mt-4 text-2xl leading-tight  text-[#AFB6BA]">
              Nürburgring Nordschleife <br /> Lap Time
            </h2>
          </div>
          {/* separator */}
          <div className=" my-auto w-[1px] bg-[#AFB6BA] h-[60%]"></div>

          <div className=" p-16">
            <h1 className="text-5xl font-bold text-[#AFB6BA]">4.0L </h1>
            <h2 className="  mt-4 text-2xl leading-tight  text-[#AFB6BA]">
              Flat-Six
            </h2>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Hero
