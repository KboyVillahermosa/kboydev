import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm KBOY
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-slate-300">
          A passionate and experienced Web & Mobile Developer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-slate-300">
          With a strong foundation in frontend development, I create dynamic, responsive, 
          and user-friendly websites. I've also expanded my skills to mobile app development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#projects"
            className="bg-teal-500 text-white font-medium px-6 py-3 rounded-md hover:bg-teal-600 transition-colors"
          >
            View My Work
          </Link>
          <Link 
            href="#contact"
            className="bg-transparent border-2 border-slate-600 text-slate-300 font-medium px-6 py-3 rounded-md hover:border-teal-500 hover:text-teal-400 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;