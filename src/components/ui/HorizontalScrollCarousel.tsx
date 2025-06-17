import { FC, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

//optional hook for smooth scrolling
interface CardData {
  image: string;
  title: string;
  description?: string; 
}
interface Props {
  cards: CardData[];
}

const HorizontalScrollCarousel: FC<Props> = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex ">
          {cards.map((card) => (
            <Card card={card} key={card.image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card: FC<{ card: CardData }> = ({ card }) => {
  return (
    <div
      key={card.image}
      className="group transition ease-in-out duration-300 hover:-translate-y-5 relative mx-3 drop-shadow-xl h-[700px] w-[800px] overflow-hidden "
    >
      <img
        src={card.image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 flex h-full w-full cursor-pointer items-end bg-gradient-to-t from-black/85 to-black/10 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="  px-4 text-[#DAE2E9] opacity-100">
          <p className="text-3xl font-bold uppercase">{card.title}</p>
          <p className="mt-2  text-lg text-[#DAE2E9]">
           {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
