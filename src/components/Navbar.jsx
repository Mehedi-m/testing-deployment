function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-slate-900 px-8 text-white">
      <h2 className="text-xl font-bold tracking-wide">
        EmployeeHub
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-300">
          Welcome, Mehedi
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-bold text-white">
          M
        </div>
      </div>
    </nav>
  );
}

export default Navbar;