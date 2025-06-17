import CarParts from "./components/ui/CarParts";
import Cars from "./components/ui/Cars";
import ConstructionTeam from "./components/ui/ConstructionTeam";
import GtHistory from "./components/ui/GtHistory";
import Hero from "./components/ui/Hero";
import HorizontalScroll from "./components/ui/HorizontalScroll";
import RaceTrack from "./components/ui/RaceTrack";
import Trophies from "./components/ui/Trophies";
const App = () => {
  return (
    <div>
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

export default App
