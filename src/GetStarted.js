export function GetStarted() {
  return (
    <div className="relative  z-10 mt-10 bg-[#e7e7e7] text-primary ">
      <div className="container mx-auto flex flex-col items-center gap-10 py-20  lg:flex-row lg:px-10">
        <section className=" flex basis-2/4 flex-col items-center gap-4 text-center lg:items-start lg:text-start">
          <h1 className="text-lg  lg:text-2xl">Decentralized - 01</h1>
          <h2 className="text-6xl lg:text-9xl">
            Trading <br /> Made Easy.
          </h2>
          <p className="lg:text-1xl mt-6 w-4/5 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            impedit nam dolor recusandae iure error laboriosam excepturi et
            omnis velit optio, possimus eveniet dignissimos unde repellat alias
            amet veritatis eaque.
          </p>
          <button
            className=" mt-7 rounded-full  border-2 border-transparent bg-primary 
          px-3 py-2  text-white duration-300 hover:border-primary
           hover:bg-white hover:text-primary"
          >
            GET STARTED
          </button>
        </section>

        <div className=" basis-2/4 ">
          <img src="/Images/41.png" alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
