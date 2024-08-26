const BenefitData = [
  {
    title: 'BENEFIT 01',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, quia. Atque quam, maiores iure enim, sunt porro quia quae provident voluptates excepturi necessitatibus saepe temporibus delectus iste perspiciatis vel quis magni inventore odio numquam labore nisi distinctio obcaecati. Facere, quam!',
  },
  {
    title: 'BENEFIT 02',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, quia. Atque quam, maiores iure enim, sunt porro quia quae provident voluptates excepturi necessitatibus saepe temporibus delectus iste perspiciatis vel quis magni inventore odio numquam labore nisi distinctio obcaecati. Facere, quam!',
  },
  {
    title: 'BENEFIT 03',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, quia. Atque quam, maiores iure enim, sunt porro quia quae provident voluptates excepturi necessitatibus saepe temporibus delectus iste perspiciatis vel quis magni inventore odio numquam labore nisi distinctio obcaecati. Facere, quam!',
  },
];

export function WhyCrypto() {
  return (
    <div className="bg-[#e7e7e7] text-primary">
      <div className="container relative mx-auto flex flex-col items-center gap-6 py-20 text-center lg:grid lg:grid-cols-3 lg:gap-x-28">
        <h1 className="text-center text-lg lg:col-span-3 lg:text-xl">
          WE MADE IT EASIER
        </h1>
        <h2 className="mb-20 text-center text-6xl lg:col-span-3 lg:text-7xl">
          Why Crypto?
        </h2>

        <div className=" lg:col-start-1">
          <Benefit benefit={BenefitData[0]} />
        </div>

        <div className=" lg:col-start-2">
          <Benefit benefit={BenefitData[1]} />
        </div>

        <div className=" lg:col-start-3">
          <Benefit benefit={BenefitData[2]} />
        </div>
      </div>
    </div>
  );
}

function Benefit({ benefit }) {
  const { title, text } = benefit;

  return (
    <div>
      <div className=" h-1 w-full bg-primary"></div>
      <h3 className="mt-4 text-base">{title}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
}
