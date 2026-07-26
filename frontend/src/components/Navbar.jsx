function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-200 bg-white">
      <h1 className="text-2xl font-bold text-slate-900">
        MeetMind
      </h1>

      <button className="text-slate-600 hover:text-slate-900">
        Settings
      </button>
    </nav>
  );
}

export default Navbar;