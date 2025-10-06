const generarRankingFinal = (jugadores) => {
  return jugadores
    .filter(jugador => !jugador.esHack) // 1. Filtrar a los hackers
    .sort((a, b) => b.puntajeFinal - a.puntajeFinal) // 2. Ordenar descendente
    .slice(0, 3) // 3. Limitar a los 3 mejores
    .map(({ nombreUsuario, puntajeFinal }) => ({ nombreUsuario, puntajeFinal })); // 4. Mapear y destructurar
};

const jugadores = [
  { nombreUsuario: "NeoData", puntajeFinal: 1200, nivel: 8, esHack: false },
  { nombreUsuario: "Niporal", puntajeFinal: 1500, nivel: 9, esHack: true },
  { nombreUsuario: "Yazato", puntajeFinal: 2500, nivel: 5, esHack: false },
  { nombreUsuario: "GamerPro", puntajeFinal: 1500, nivel: 11, esHack: false },
  { nombreUsuario: "Shadow", puntajeFinal: 3000, nivel: 12, esHack: false }
];

generarRankingFinal(jugadores).forEach(jugador => console.log(jugador));
