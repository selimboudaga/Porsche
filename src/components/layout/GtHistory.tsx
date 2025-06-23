import gt1 from '../../assets/images/gt1.webp'
import gt1eng from '../../assets/images/gt1eng.jpg'
import led from '../../assets/images/led.jpg'
import gt33 from '../../assets/images/gt33.jpg'
import gt2eng from '../../assets/images/gt2eng.webp'
import interior2 from '../../assets/images/inerior.jpg'
import gt2 from '../../assets/images/gt2.jpg'
import gt4back from '../../assets/images/gt4back.webp'
import gt4 from '../../assets/images/gt4.png'

import Timeline from '../ui/TimeLine'
const GtHistory = () => {
  const data = [
    {
      title: "1999",
      content: (
        <div>
          <h1 className=" text-5xl font-semibold text-[#DAE2E9] ">
             Porsche 911 GT1
          </h1>
          <h2 className="mb-8 text-xl mt-2 font-normal text-[#DAE2E9] ">
            The Wolf in Sheep’s Clothing
          </h2>
          <p className=" text-[#AFB6BA] text-xl w-[80%]">
           The GT1 wasn't just a car - it was Porsche's audacious middle finger to racing regulations. Under the pretense of building a "road car," engineers created a Le Mans prototype with barely street-legal headlights. Its 3.2L twin-turbo flat-six howled with 600 HP, while the carbon fiber monocoque and massive rear diffuser made production cars look quaint. The 1998 Le Mans victory wasn't just a win - it was Porsche outsmarting the system. Road versions? An afterthought - just 20 were built, making each one a €3 million+ museum piece today.
          </p>
          <div className="flex mt-10">
            <img src={gt1} className=" w-[580px] h-[260px] mr-3"  alt="" />
            <img src={gt1eng} className=" w-[300px] " alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "2010",
      content: (
         <div>
          <h1 className=" text-5xl font-semibold text-[#DAE2E9] ">
              Porsche 911 GT3 RS
          </h1>
          <h2 className="mb-8 text-xl mt-2 font-normal text-[#DAE2E9] ">
            The Nürburgring’s Favorite Son
          </h2>
          <p className=" text-[#AFB6BA] text-xl w-[80%]">
           This wasn't just a track car - it was Porsche's love letter to purists. The 3.6L Mezger engine's 415 HP sounded modest until you heard its metallic scream at 8,500 RPM. Every component - from the magnesium roof to the thin-glass windows - served one purpose: speed. That iconic orange paint wasn't just flashy; it announced this as something special. Owners still whisper about its hydraulic steering feel, lost to newer generations.
          </p>
          <div className="flex mt-10">
            <img src={led} className=" w-[180px] h-[300px] mr-3"  alt="" />
            <img src={gt33} className=" w-[600px] h-[300px] " alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
         <div>
          <h1 className=" text-5xl font-semibold text-[#DAE2E9] ">
              Porsche 911 GT2 RS
          </h1>
          <h2 className="mb-8 text-xl mt-2 font-normal text-[#DAE2E9] ">
            The Widowmaker
          </h2>
          <p className=" text-[#AFB6BA] text-xl w-[80%]">
           Porsche took everything terrifying about the GT2 and turned it to 11. The 3.6L twin-turbo now made 620 HP, enough to warp the horizon in 3.4 seconds. No all-wheel drive, no forgiveness - just you, 700 Nm of torque, and your survival instincts. The stripped interior featured carbon fiber buckets so aggressive they felt like punishment. Only 500 were made, each a collector's item that still terrifies at auction.
          </p>
          <div className="flex mt-10">
            <img src={gt2eng} className=" w-[280px] h-[220px] mr-3"  alt="" />
            
            <img src={interior2} className=" w-[240px] h-[220px] " alt="" />
            <img src={gt2} className=" w-[380px] h-[220px] ml-3 " alt="" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
         <div>
          <h1 className=" text-5xl font-semibold text-[#DAE2E9] ">
              Porsche 911 GT4 RS
          </h1>
          <h2 className="mb-8 text-xl mt-2 font-normal text-[#DAE2E9] ">
            The 911's Nightmare
          </h2>
          <p className=" text-[#AFB6BA] text-xl w-[80%]">
          Porsche's ultimate betrayal of its hierarchy: a Cayman that finally out-911s the 911. The 4.0L flat-six's 493 HP screams to 9,000 RPM - a sound so violent it echoes off guardrails. The swan-neck wing isn't for show - it's why this mid-engine marvel laps the 'Ring in 7:04. The carbon buckets clamp so tight they feel like part of the chassis. This is Porsche admitting the mid-engine layout they resisted for decades... might just be better.
          </p>
          <div className="flex mt-10">
            <img src={gt4} className=" w-[460px] h-[250px] mr-3 " alt="" />
            <img src={gt4back} className=" w-[320px] h-[250px] "  alt="" />
            
            
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default GtHistory