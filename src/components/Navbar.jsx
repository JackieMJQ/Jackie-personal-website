export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-50">
      <h1 className="text-xl font-semibold">Jiaqi Mu</h1>
      <div className="space-x-6 text-gray-600 text-sm">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </nav>
  );
}
