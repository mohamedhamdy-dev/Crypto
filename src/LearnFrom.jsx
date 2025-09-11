import { motion } from 'motion/react';

const cardData = [
  {
    title: 'All About Market Caps',
    img: '/LearnFrom/61.png',
  },
  {
    title: 'Using The Platform',
    img: '/LearnFrom/62.png',
  },
  {
    title: 'Digital Currencies',
    img: '/LearnFrom/63.png',
  },
  {
    title: 'Terminologies',
    img: '/LearnFrom/64.png',
  },
  {
    title: 'Trading Techniques',
    img: '/LearnFrom/65.png',
  },
  {
    title: 'Emerging Tokens',
    img: '/LearnFrom/66.png',
  },
];

export function LearnFrom() {
  return (
    <div className="container mx-auto grid grid-cols-1 items-center gap-7 py-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12 md:px-10 xl:gap-x-0">
      <h2 className="mb-8 text-center text-[44px] capitalize sm:text-6xl md:col-span-2 md:col-start-1 lg:text-7xl xl:text-7xl">
        learn from the best
      </h2>
      {cardData.map((cardData) => (
        <LearnFromCard key={cardData.title} card={cardData} />
      ))}
    </div>
  );
}

function LearnFromCard({ card }) {
  const { title, img } = card;

  return (
    <div className=" justify-self-center">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ rotate: 12 }}
        transition={{ type: 'spring' }}
        className="md:-ml-5 lg:-ml-6"
        src={img}
        alt={title}
      />
      <h3 className="lg:text-md text-center md:text-left ">{title}</h3>
    </div>
  );
}
