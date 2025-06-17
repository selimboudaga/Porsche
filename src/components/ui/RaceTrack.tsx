import race from '../../assets/images/race.png'
import p1 from '../../assets/images/p1.jpeg';
import p2 from '../../assets/images/p2.jpg';
import r1 from '../../assets/images/r1.jpg';
import r2 from '../../assets/images/r2.jpg';
const RaceTrack = () => {
  return (
    <div className="  overflow-hidden w-full   ">
      <div className=" m-auto flex justify-between  w-[80%] mt-[160px]">
        <div className=" w-[50%] ">
          <h1 className="text-[#DAE2E9] font-bold text-6xl">
            Nürburgring Nordschleife
          </h1>

          <p className=" text-[#AFB6BA] text-2xl mt-8 ">
            Born on the Nürburgring’s brutal 12.9-mile Nordschleife – the ‘Green
            Hell’ where champions are made. Here, the GT3 RS’s 7:12.4 lap time
            wasn’t just set; it was carved into the tarmac through 73
            heart-stopping corners, where its 525 PS flat-six screams to 9,000
            RPM and its aerodynamics claw at the track with 409 kg of downforce.
            This isn’t just testing – this is motorsport alchemy, transforming
            raw engineering into pure driving ecstasy.
          </p>
        </div>
            <img src={race} width={500} height={500} alt="" />
      </div>
      <div className=' mt-[130px] flex w-full'>
         <img src={r1} width={450} height={450} alt="" />
        <img src={p1} width={500} height={450} alt="" />
        <img src={r2} width={450} height={450} alt="" />
        <img src={p2} width={500} height={450} alt="" />
       
        
      </div>
    </div>
  );
};

export default RaceTrack;
