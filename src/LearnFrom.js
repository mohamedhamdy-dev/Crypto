import img1 from './Images/61.png';
import img2 from './Images/62.png';
import img3 from './Images/63.png';
import img4 from './Images/64.png';
import img5 from './Images/65.png';
import img6 from './Images/65.png';

const cardData = [
  {
    title: 'All About Market Caps',
    img: img1,
  },
  {
    title: 'Using The Platform',
    img: img2,
  },
  {
    title: 'Digital Currencies',
    img: img3,
  },
  {
    title: 'Terminologies',
    img: img4,
  },
  {
    title: 'Trading Techniques',
    img: img5,
  },
  {
    title: 'Emerging Tokens',
    img: img6,
  },
];

export function LearnFrom() {
  return (
    <div
      class="container mx-auto my-24 flex flex-col  items-center
      gap-7  md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-12 md:px-10  xl:gap-x-0"
    >
      <h1 class="mb-8 text-center text-[44px] capitalize sm:text-6xl md:col-span-2 md:col-start-1 lg:text-7xl xl:text-8xl">
        learn from the best
      </h1>

      <div className=" justify-self-center">
        <LearnFromCard card={cardData[0]} />
      </div>
      <div className="justify-self-center ">
        <LearnFromCard card={cardData[1]} />
      </div>
      <div className=" justify-self-center">
        <LearnFromCard card={cardData[2]} />
      </div>
      <div className="justify-self-center ">
        <LearnFromCard card={cardData[3]} />
      </div>
      <div className=" justify-self-center">
        <LearnFromCard card={cardData[4]} />
      </div>
      <div className=" justify-self-center">
        <LearnFromCard card={cardData[5]} />
      </div>
    </div>
  );
}

function LearnFromCard({ card }) {
  const { title, img } = card;

  return (
    <a href="#1" className="">
      <img className="md:-ml-5  lg:-ml-6 " src={img} alt="" />
      <h2 className="lg:text-md text-center md:text-left ">{title}</h2>
    </a>
  );
}
