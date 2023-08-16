// Primer objeto (jugadora1) con sus propiedades
const jugadora1 = {
    nombre: "Catalina Usme",
    edad: 33,
    posicion: "Delantera",
    equipo: "America de Cali",
    estadisticas: {
      goles: 66,
      asistencias: 30,
      partidosJugados: 150,
    },
    lesionada: false,
    internacional: true,
  };

// Segundo objeto (jugadora2) con sus propiedades
  const jugadora2 = {
    nombre: "Marta Vieira da Silva",
    edad: 37,
    posicion: "Centrocampista",
    equipo: "Orlando Pride",
    estadisticas: {
      goles: 150,
      asistencias: 80,
      partidosJugados: 250,
    },
    lesionada: true,
    internacional: true,
  };
  
// Construir un array con mínimo 2 objetos
  let jugadoras = [];
  jugadoras.push(jugadora1, jugadora2);  
  
  console.log(jugadoras);
  
  // Ejemplo de 3 métodos de arreglos:
  console.log("Número de jugadoras:", jugadoras.length);  // Método 1: length para obtener el número de elementos en el array
  console.log(
    "Jugadoras internacionales:",
    jugadoras.filter((jugadora) => jugadora.internacional)  // Método 2: filter para filtrar jugadoras internacionales
  );
  console.log(
    "Posiciones de jugadoras:",
    jugadoras.map((jugadora) => jugadora.posicion)  // Método 3: map para obtener un array con las posiciones de las jugadoras
  );
  