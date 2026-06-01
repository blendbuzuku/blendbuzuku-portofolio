export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        backdrop-blur-md
        border-b
        border-zinc-800
        bg-zinc-950/80
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-bold">
          Blend Buzuku
        </div>

        <div className="hidden md:flex gap-8 text-sm">

         <a href="#about" className="hover:text-blue-400">About</a>
         <a href="#skills" className="hover:text-blue-400">Skills</a>
         <a href="#projects" className="hover:text-blue-400">Projects</a>
         <a href="#experience" className="hover:text-blue-400">Experience</a>
         <a href="#contact" className="hover:text-blue-400">Contact</a>      

        </div>

      </div>
    </nav>
  );
}