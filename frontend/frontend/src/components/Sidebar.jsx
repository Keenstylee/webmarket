export default function Sidebar() {
  return (
    <aside style={{
      width: "200px",
      background: "#f4f4f4",
      padding: "15px",
      height: "100vh",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
    }}>
      <h3>Menú</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><a href="#" style={{ textDecoration: "none" }}>Productos</a></li>
        <li><a href="#" style={{ textDecoration: "none" }}>Clientes</a></li>
        <li><a href="#" style={{ textDecoration: "none" }}>Ventas</a></li>
      </ul>
    </aside>
  );
}