import img21 from './Images/21.png';
import img22 from './Images/22.png';

export function About() {
  return (
    <div className="container mx-auto my-14 flex flex-col items-center gap-8 text-white lg:my-0 lg:grid  lg:grid-cols-4 ">
      <div className="flex flex-col-reverse justify-center">
        <img className="lg:-ml-10 lg:mt-96" src={img21} alt="" />
      </div>

      <div className="col-span-2 flex flex-col items-center justify-between gap-10 py-3  text-center lg:py-28 xl:py-48 2xl:py-60">
        <h5 className="text-lg lg:text-xl ">WHAT WE STAND FOR</h5>
        <h6 className="text-5xl  lg:text-8xl">Trusted and Transparent.</h6>
        <p className=" max-w-96 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolore
          quo tempora,fugit dolorem illo harum inventore labore vitae corrupti
          saepe cumque iusto dolores rerum ipsam, doloribus ab officiis, velit
          similique neque facilis quidem enim asperiores? Possimus commodi
          expedita maxime?
        </p>
      </div>

      <div className="flex flex-col-reverse justify-center">
        <img className="lg:-mr-8 lg:mb-96" src={img22} alt="" />
      </div>
    </div>
  );
}
