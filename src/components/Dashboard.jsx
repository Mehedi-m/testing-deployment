function Dashboard() {
  const statistics = [
    {
      title: "Total Employees",
      value: 150,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Present Today",
      value: 120,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "On Leave",
      value: 10,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              className={`mb-4 inline-block rounded-lg px-3 py-2 text-sm font-medium ${stat.bg} ${stat.color}`}
            >
              {stat.title}
            </div>

            <h2 className={`text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;