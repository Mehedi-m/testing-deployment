function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Employees",
    "Departments",
    "Attendance",
    "Settings",
  ];

  return (
    <aside className="min-h-[calc(100vh-64px)] w-60 border-r border-slate-200 bg-white p-5">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Main Menu
      </h3>

      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition ${
              index === 0
                ? "bg-sky-100 text-sky-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;