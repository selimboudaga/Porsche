import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import gt3R from "../../assets/images/gt3R.jpg";
import trophies from "../../assets/images/trophies.jpg";
import racet from "../../assets/images/racet.jpg";
import c917 from "../../assets/images/c917.webp";
import rsr from "../../assets/images/rsr.jpg";
import ferry from "../../assets/images/ferry.jpg";
import no1 from "../../assets/images/no1.jpg";
import logo from "../../assets/images/logo.jpg";
import evo from "../../assets/images/evo.jpg";
const HorizontalScroll = () => {
  const cardData = [
    {
      image: logo,
      title: "Porsche: Engineering Passion Since 1948",
      description:
        "Porsche doesn't build cars - they build automotive legends. Since 1948, their rear-engine masterpieces have rewritten racing history while delivering unmatched road thrills. The proof? 19 Le Mans wins, the immortal 911's 60-year evolution, and that spine-tingling flat-six wail. In a world of compromise, Porsche remains gloriously obsessed with driving purity",
    },
    {
      image: ferry,
      title: " The Geniuse Behind Legends",
      description:
        ' Ferdinand "Ferry" Porsche founded the brand on a radical idea: "Race on Sunday, sell on Monday." Hans Mezger, the mad scientist behind the iconic flat-six, gave Porsche its soulful scream. Norbert Singer, the quiet genius, designed the unbeatable 956/962 prototype. Today, Andreas Preuninger masterminds GT cars, blending analog thrill with digital precision. These aren’t just engineers—they’re speed philosophers.',
    },
    {
      image: no1,
      title: 'Porsche 356 "No. 1"',
      description:
        'Before the 911, there was the 1948 Porsche 356 "No. 1"—a hand-built aluminum coupe with a humble 1.1L flat-four (just 35 HP). Its secret? Lightweight + rear-engine = magic. Debuting at the Gmünd Grand Prix, it proved Porsche’s formula: less power, more brains. This underdog paved the way for every Porsche racer since.',
    },
    {image:c917,
      title:" Porsche 917",
      description:"The 1970 Porsche 917 wasn’t just fast—it was terrifying. Its 4.5L flat-12 (630 HP) and magnesium chassis made drivers whisper prayers. At Le Mans, it hit 362 km/h (225 mph) without chicanes. Steve McQueen filmed it; engineers feared it. Yet, it delivered Porsche’s first Le Mans win—and birthed a legend."}
    ,
    {image:evo,
      title:"Porsche 919 Hybrid Evo",
      description:"The Porsche 919 Hybrid Evo is unshackled madness. Stripped of racing rules, this 1,160 HP hybrid missile holds the Nürburgring record (5:19.55) and hits 369 km/h (229 mph). Its secret? A 2.0L turbo V4 + electric motor—smaller than a Civic’s engine, faster than an F1 car. Porsche built it for one reason: to annihilate limits."
    }
    ,
    {
      image: racet,
      title: "30,000 Races",
      description:
        "Porsche doesn’t just race—it infects tracks. Since 1951, Stuttgart’s machines have entered 30,000+ races, from dusty rallies to Le Mans. That’s three races per week for 70 years. Whether it’s a factory team or a privateer’s dream, Porsche shows up.",
    },
    { image: rsr,
       title: " Porsche 911 RSR" ,
      description:"The 911 RSR isn’t just a racecar—it’s a blueprint for victory. With 500+ wins, this GT3-class legend outscores entire brands. Its rear-engine layout defies physics, its howling flat-six gives chills, and privateers love it. Proof that Porsche’s \"old\" idea still humiliates modern rivals."},
    {
      image: trophies,
      title: "24,000 Wins",
      description:
        "Winning 80% of your battles isn’t luck—it’s violence with precision. Porsche’s 24,000+ victories include Le Mans (19 overall wins), Daytona, and the Nürburgring. The recipe? Reliability whispers while horsepower screams.",
    },
    {image:gt3R,
      title:"Porsche 911 GT3 R",
      description:"The 911 GT3 R is the racecar you can buy . With 200+ wins, it’s the choice of pros and rich amateurs alike. Why? It’s reliable, sounds like the apocalypse, and—unlike finicky prototypes—won’t murder you. Porsche’s ultimate gift to track-day addicts."
    }
    
  ];
  return (
    <div className="relative w-full ">
      <div className=""></div>
      <HorizontalScrollCarousel cards={cardData} />
    </div>
  );
};

export default HorizontalScroll;
