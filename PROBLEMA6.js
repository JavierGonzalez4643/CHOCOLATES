const separarTareas = (tareas) => {
  const [prioridadAlta, prioridadMedia, ...otrasTareas] = tareas;
  return [prioridadAlta, prioridadMedia, otrasTareas];
};

const listaTareas = ["Estudiar JS", "Proyecto Web", "Revisar Correo", "Ir al Gym", "Comprar"];

console.log(separarTareas(listaTareas));
