function Button({ children, className }) {
  return (
    <a
      className={` rounded-full border-2 px-3 py-2 text-sm
      text-white duration-300  hover:bg-white hover:text-black  ${className} `}
      href="#get-started"
    >
      {children}
    </a>
  );
}

export default Button;
