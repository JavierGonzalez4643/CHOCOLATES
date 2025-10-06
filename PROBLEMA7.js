const productos = [
  { idProducto: 101, nombre: "Mouse", modelo: "G-502", precio: 650, stock: 20, disponible: true },
  { idProducto: 102, nombre: "Teclado", modelo: "K-100", precio: 450, stock: 15, disponible: true },
  { idProducto: 103, nombre: "Monitor", modelo: "S-27", precio: 800, stock: 5, disponible: true },
  { idProducto: 104, nombre: "Webcam", modelo: "C-920", precio: 300, stock: 10, disponible: true }
];
const generarReporteInventario = (productos) => {
  const filtrados = productos.filter(p => p.disponible && p.precio <= 500);
  
  const reportePorProducto = filtrados.map(({ idProducto: sku, nombre, modelo, stock }) => ({
    nombreCompleto:nombre + " " + modelo,sku,stock
  }));
const stockTotal = reportePorProducto.reduce((total, p) => total + p.stock, 0);
return { reportePorProducto, stockTotal };
};
console.log(generarReporteInventario(productos));
