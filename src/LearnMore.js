export function LearnMore() {
  return (
    <div className="my-10 flex flex-col-reverse gap-10 lg:my-0 lg:flex-row">
      <div className="lg:basis-2/5">
        <img src="/Images/51.png" alt="" className="" />
      </div>
      <section className="basis-2/5 flex-col items-center gap-2 self-center text-center lg:flex">
        <h1 className="text-6xl sm:text-7xl 2xl:text-8xl ">
          All About <br /> Market Caps
        </h1>
        <p className="mx-auto mt-8 max-w-96 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          laboriosam ipsa tempora voluptate. Cumque sit illum, autem blanditiis
          labore deserunt consequatur vitae reiciendis cupiditate sequi ea
          necessitatibus laboriosam! Explicabo praesentium molestias animi ut
          quia. Ex excepturi fuga voluptate optio illum omnis quae nesciunt, est
          repellat qui, harum quia laudantium id.
        </p>
        <button
          className="hover mt-6 rounded-full border-2 
          bg-transparent px-2 py-1 text-sm
          uppercase
          text-white duration-300
        hover:bg-white hover:text-primary sm:py-2 
        2xl:px-3

        "
        >
          Learn More
        </button>
      </section>
    </div>
  );
}
