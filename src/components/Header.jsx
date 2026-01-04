import logo from "../assets/quiz-logo.png";

function Header() {
  return (
    <div className="flex flex-col items-center mt-8 mb-8 gap-4">
      <img  src={logo}  alt="logo" className="w-[3rem] h-[3rem] object-contain drop-shadow-md"  />
      <h1 className="text-4xl font-bold uppercase tracking-[0.3em] font-roboto bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg">
            REACTQUIZ
      </h1>
    </div>
  );
}

export default Header;


