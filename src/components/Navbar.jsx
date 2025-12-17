export default function Navbar() {
  return (
    <nav>
      <h1 className="text-xl font-semibold">Jiaqi Mu</h1>
      <div className="space-x-6 text-gray-600 text-sm">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#experience" className="hover:text-black">Experience</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </nav>
  );
}
