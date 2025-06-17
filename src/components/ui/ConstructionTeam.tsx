import genius from '../../assets/images/genius.jpg'
import team from '../../assets/images/tem.webp'
import driver from '../../assets/images/driver.png'
import aero from '../../assets/images/aerodynamic.png'
import weight from '../../assets/images/lightweight.png'
import horses from '../../assets/images/horses.png'
import precision from '../../assets/images/precision.png'
import rpm from '../../assets/images/speedometer.png'
const ConstructionTeam = () => {
  return (
   <div className="  overflow-hidden w-full" >
      <div className=" m-auto flex justify-between  w-[80%] mt-[280px]">
        <div className=" w-[50%] ">
          <h1 className="text-[#DAE2E9] font-bold text-6xl">
            THE MASTERMINDS BEHIND THE LEGEND
          </h1>
          <h2 className="text-[#DAE2E9] font-normal text-2xl mt-4">The 911 GT3 RS doesn’t just dominate tracks—it redefines them.</h2>

          <p className=" text-[#AFB6BA] text-2xl mt-8 ">
          Behind every curve of the 911 GT3 RS lies the obsessive genius of Porsche's GT Division – an elite team of engineers, designers, and racing veterans who transformed raw physics into automotive art. Under the leadership of Andreas Preuninger, they spent countless hours at the Weissach R&D center, perfecting the 4.0L flat-six's 9,000 RPM scream, honing the double-wishbone suspension on the Nürburgring's brutal corners, and crafting active aerodynamics that balance drag and downforce like a Formula 1 car. Every component, from the titanium exhaust to the carbon-fiber roof, was scrutinized not just for performance, but for the visceral thrill it delivers. This isn't just engineering—it's passion quantified in lap times.
          </p>
        </div>
        <div className='  w-[50%]  my-auto flex flex-col '>
            <img className=' ml-[160px] w-[590px] h-[220px]   ' src={driver}  alt="" />
            <div className=' flex'>
              <img src={genius} className=' ml-[160px] mt-2 w-[180px]  ' alt="" />
              <img src={team} className=' mt-2 ml-2 w-[403px]  ' alt="" />
            </div>
        </div>

      </div>


      {/* main container */}
      <div className=" flex w-full mt-52  ">
        {/* secondary container */}
        <div className="flex w-[80%] mx-auto">
          {/* content */}
          <div className=" p-16">
            <img src={precision} className=' mx-auto' width={140} alt="" />
            <h2 className="  mt-4 text-2xl text-center leading-tight  text-[#DAE2E9]">
              Razor-Sharp Precision
            </h2>
          </div>
          

          <div className=" p-16">
            <img src={aero} className=' mx-auto' width={140} alt="" />
            <h2 className="  mt-4 text-2xl text-center leading-tight  text-[#DAE2E9]">
              Racecar Aero
            </h2>
          </div>
          

          <div className=" p-16">
            <img src={weight} className=' mx-auto' width={140} alt="" />
            <h2 className="  mt-4 text-2xl text-center leading-tight  text-[#DAE2E9]">
              Lightweight  <br /> 1,450 kg
            </h2>
          </div>
         

          <div className=" p-16">
            <img src={horses} className=' mx-auto' width={140} alt="" />
            <h2 className="  mt-4 text-2xl text-center leading-tight  text-[#DAE2E9]">
              525 HP
            </h2>
          </div>
          

          <div className=" p-16">
            <img src={rpm} className=' mx-auto' width={140} alt="" />
            <h2 className="  mt-4 text-2xl text-center leading-tight  text-[#DAE2E9]">
             9,000 RPM redline
            </h2>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ConstructionTeam
