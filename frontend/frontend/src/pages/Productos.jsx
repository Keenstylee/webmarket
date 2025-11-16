import { useEffect, useState } from "react";
import api from "../api/api";

export default function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        api.get("/productos/")
            .then(res => {
                console.log("DATA RECIBIDA DESDE API:", res.data);
                setProductos(res.data);
            })
            .catch(err => console.log("ERROR AL CARGAR PRODUCTOS:", err));
    }, []);

    return (
        <div>
            <h1>Productos</h1>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Precio Venta</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map(p => (
                        <tr key={p.id_producto}>
                            <td>{p.id_producto}</td>
                            <td>{p.nombre}</td>
                            <td>{p.categoria_nombre}</td>
                            <td>{p.stock}</td>
                            <td>S/ {p.precio_venta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}