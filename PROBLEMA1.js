const generarRankingFinal = (jugadores) => {
  return jugadores
    .filter(jugador => !jugador.esHack) 
    .sort((a, b) => b.puntajeFinal - a.puntajeFinal) 
    .slice(0, 3) 
    .map(({ nombreUsuario, puntajeFinal }) => ({ nombreUsuario, puntajeFinal })); 
};

const jugadores = [
  { nombreUsuario: "NeoData", puntajeFinal: 1200, nivel: 8, esHack: false },
  { nombreUsuario: "Niporal", puntajeFinal: 1500, nivel: 9, esHack: true },
  { nombreUsuario: "Yazato", puntajeFinal: 2500, nivel: 5, esHack: false },
  { nombreUsuario: "GamerPro", puntajeFinal: 1500, nivel: 11, esHack: false },
  { nombreUsuario: "Shadow", puntajeFinal: 3000, nivel: 12, esHack: false }
];

generarRankingFinal(jugadores).forEach(jugador => console.log(jugador));
