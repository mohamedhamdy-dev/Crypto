import logo from './Images/Logo.png';

const sections = [
  {
    title: '01 - Versatile',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda molestiae pariatur aspernatur! Similique dolore at labore optio inventore eos officiis esse modi minima earum dignissimos! Architecto .',
  },
  {
    title: '03 - Transparent',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda molestiae pariatur aspernatur! Similique dolore at labore optio inventore eos officiis esse modi minima earum dignissimos! Architecto .',
  },
  {
    title: '02 - Easy To Use',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda molestiae pariatur aspernatur! Similique dolore at labore optio inventore eos officiis esse modi minima earum dignissimos! Architecto .',
  },
  {
    title: '04 - Real Time',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda molestiae pariatur aspernatur! Similique dolore at labore optio inventore eos officiis esse modi minima earum dignissimos! Architecto .',
  },
];

export function Features() {
  return (
    <div
      className=" container mx-auto mt-24 flex flex-col 
     items-center gap-10 text-center md:grid md:grid-cols-2 lg:mt-0 
     lg:grid-cols-3 lg:grid-rows-3  lg:gap-0 "
    >
      <h2
        className=" col-span-2 row-span-1 mb-16 text-6xl md:text-8xl lg:col-span-1 lg:col-start-2 
       lg:col-end-3 lg:-mt-32 lg:mb-0 "
      >
        Features
      </h2>

      <div className=" flex flex-col  lg:col-start-1  lg:row-start-2  lg:self-start">
        <FeatureSection sectionData={sections[0]} />
      </div>
      <div className=" flex flex-col lg:col-start-3  lg:row-start-2 lg:self-start ">
        <FeatureSection sectionData={sections[1]} />
      </div>
      <div className=" flex  flex-col  lg:col-start-1 lg:self-start  ">
        <FeatureSection sectionData={sections[2]} />
      </div>
      <div className=" flex  flex-col self-center lg:col-start-3 lg:self-start ">
        <FeatureSection sectionData={sections[3]} />
      </div>

      <div
        className=" col-span-2 flex  flex-col 
      items-center justify-self-center pb-14 sm:w-[65%] 
       lg:col-start-2 lg:col-end-3 lg:row-span-3  lg:row-start-2 lg:-mt-20  xl:w-full "
      >
        <FeatureApp />
      </div>
    </div>
  );
}

function FeatureSection({ sectionData }) {
  const { title, text } = sectionData;
  return (
    <section className="text-balance text-center">
      <h3 className="text-lg">{title}</h3>
      <p className=" mx-auto  max-w-96 text-balance p-4 text-sm">{text}</p>
    </section>
  );
}

function FeatureApp() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white  px-14 py-16 pt-8 text-primary">
      <div className="mx-auto w-fit ">
        <img src={logo} alt="" />
        <h4 className="">Coinmyte.</h4>
      </div>
      <div className="">EURO to GC</div>
      <form action="">
        <div className=" flex flex-col gap-4">
          <label className="block">
            From
            <input
              className="mt-1 block w-full rounded-full border-[1px] border-primary px-4 py-[6px] text-base"
              type="text"
            />
          </label>
          <label className="block">
            To
            <input
              className="mt-1 block w-full  rounded-full border-[1px] border-primary px-4 py-[6px] text-base"
              type="text"
            />
          </label>
          <div className="">YOUR TOTAL</div>
          <div className="">1.00 GC = 10.000.000</div>
          <button className=" self-center rounded-full border-2 border-primary bg-primary px-3 py-[6px] text-white duration-300 hover:bg-white hover:text-primary">
            TRADE NOW
          </button>
        </div>
      </form>

      <div className="flex justify-between gap-2 text-sm text-gray-800">
        <a className="  hover:text-primary" href="#pricing">
          PRICING
        </a>
        <a className=" hover:text-primary" href="#faqs">
          FAQS
        </a>
        <a className="  hover:text-primary" href="#trading">
          TRADING BASICS
        </a>
      </div>
    </div>
  );
}
