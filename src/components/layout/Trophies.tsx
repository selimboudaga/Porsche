import trophies from '../../assets/images/trophies.webp'
const Trophies = () => {
  return (
    <div className="  overflow-hidden w-full" >
      <div className=" m-auto flex justify-between  w-[80%] mt-[280px]">
        <div className=" w-[50%] ">
          <h1 className="text-[#DAE2E9] font-bold text-6xl">
            Forged in Victory
          </h1>
          <h2 className="text-[#DAE2E9] font-normal text-2xl mt-4">The 911 GT3 RS doesn’t just dominate tracks—it redefines them.</h2>

          <p className=" text-[#AFB6BA] text-2xl mt-8 ">
           The 911 GT3 RS is a titan of motorsport, with a trophy cabinet spanning the globe’s most brutal circuits. It clinched back-to-back SP9 Class wins at the 24 Hours of Nürburgring (2018, 2019, 2022) and dominated the FIA GT3 World Cup in Macau (2016, 2019). Privateers rallied it to victory in the Porsche Carrera Cup Deutschland (2017, 2020, 2023) and the Spa 24 Hours Pro-Am Class (2021). Even in North America, it’s a Pirelli GT3 Cup USA champion (2018, 2022). This isn’t just a race car—it’s a blueprint for victory, refined by 7:12.4 of Nordschleife-proofed engineering.
          </p>
        </div>
            <img src={trophies} className=' w-[400px] h-[280px] drop-shadow-2xl m-auto ' alt="" />
      </div>
    </div>
  )
}

export default Trophies
