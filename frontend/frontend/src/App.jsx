import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Productos from "./pages/Productos";

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ padding: "20px", flexGrow: 1 , backgroundColor: "#93e3f1ff" }}>
          <Productos />
        </main>
      </div>
    </div>
  );
}

export default App;
