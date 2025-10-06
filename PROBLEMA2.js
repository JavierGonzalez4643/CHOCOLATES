const calcularpromedioAumentado = (calificaciones) => {
  const calificacionesAumentadas = calificaciones.map(c => c >= 90 ? c * 1.1 : c);
  const sumaTotal = calificacionesAumentadas.reduce((acum, valor) => acum + valor, 0);
  const promedio = sumaTotal / calificaciones.length;
  return promedio;
}; 
const calificaciones = [85, 95, 78, 100, 60];
console.log(calcularpromedioAumentado(calificaciones));
