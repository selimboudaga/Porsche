import CarParts from "@/components/layout/CarParts"
import Cars from "@/components/layout/Cars"
import ConstructionTeam from "@/components/layout/ConstructionTeam"
import GtHistory from "@/components/layout/GtHistory"
import Hero from "@/components/layout/Hero"
import HorizontalScroll from "@/components/layout/HorizontalScroll"
import Navbar from "@/components/layout/Navbar"
import RaceTrack from "@/components/layout/RaceTrack"
import Trophies from "@/components/layout/Trophies"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RaceTrack/>
      <Trophies/>
      <CarParts/>
      <ConstructionTeam />
      <Cars/>
      <GtHistory />
      <HorizontalScroll/>
    </div>
  )
}

export default Home
