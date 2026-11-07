import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="mb-6 text-2xl font-bold text-slate-800">
            Employee Management System Version-b
          </h1>

          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;