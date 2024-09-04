import Button from './ui/Button';
import img11 from './Images/11.png';
import img12 from './Images/12.png';

export function Home() {
  return (
    <div
      className="container mx-auto mb-8 flex flex-col  gap-8  py-20 text-white 
    lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10 "
    >
      <div className="flex flex-col justify-end">
        <pre className="text-center text-xl lg:text-left">WE MADE It EASY</pre>
        <h1 className="mx-auto mt-20  text-center text-8xl lg:mt-40 lg:text-left">
          Trade Crypto.
        </h1>
        <div className="mt-24 flex justify-center gap-10 lg:mt-10 lg:justify-start">
          <Button className="sm:text-base lg:text-sm ">GET STARTED</Button>
          <Button className="sm:text-base lg:text-sm">LEARN MORE</Button>
        </div>
      </div>

      <div className="mx-auto">
        <img
          src={img11}
          className="h-auto w-full object-cover lg:relative lg:top-24 xl:top-5"
          alt="crypto1"
        />
      </div>

      <div className="flex flex-col items-center justify-end text-center lg:items-start lg:text-left ">
        <div>
          <img className="lg:-ml-7 " src={img12} alt="crypto2" />
        </div>
        <h1 className=" lg:text-lg">Decentralized - 01</h1>
        <p className=" w-[90%] max-w-96  text-xs sm:text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          deserunt minima minus corrupti ducimus dolore, accusamus nostrum
          mollitia itaque corporis similique accusantium, dolores iste possimus
          autem. Adipisci unde dolorem consequuntur Lorem,
        </p>
      </div>
    </div>
  );
}
