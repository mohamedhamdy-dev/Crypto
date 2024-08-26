const cardData = [
  {
    title: 'All About Market Caps',
    img: '/Images/61.png',
  },
  {
    title: 'Using The Platform',
    img: '/Images/62.png',
  },
  {
    title: 'Digital Currencies',
    img: '/Images/63.png',
  },
  {
    title: 'Terminologies',
    img: '/Images/64.png',
  },
  {
    title: 'Trading Techniques',
    img: '/Images/65.png',
  },
  {
    title: 'Emerging Tokens',
    img: '/Images/66.png',
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
      {/* 
      <div className=" lg:justify-self-start">
        <LearnFromCard card={cardData[0]} />
      </div>
      <div className=" lg:justify-self-end">
        <LearnFromCard card={cardData[1]} />
      </div>
      <div className=" lg:justify-self-start">
        <LearnFromCard card={cardData[2]} />
      </div>
      <div className=" lg:justify-self-end">
        <LearnFromCard card={cardData[3]} />
      </div>
      <div className=" lg:justify-self-start">
        <LearnFromCard card={cardData[4]} />
      </div>
      <div className=" lg:justify-self-end">
        <LearnFromCard card={cardData[5]} />
      </div> */}
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
