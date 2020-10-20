import Jugador from "./jugador.js";
import Dado from "./dado.js";
import Tablero from "./tablero.js";

var player1 = new Jugador("Edgar");
var player2 = new Jugador("Oscar");

class Main {
  constructor() {}
  iniciar() {
    let win = 0;
    let dado = new Dado();
    let tablero = new Tablero();
    let p1 = 0;
    let p2 = 0;

    while (win == 0) {
      p1 += dado.tirar();
      p1 += tablero.mostrar(p1, player1.name());
      if (p1 >= 100) {
        win = 1;
        break;
      }
      p2 += dado.tirar();
      p2 += tablero.mostrar(p2, player2.name());
      if (p2 >= 100) {
        win = 2;
        break;
      }
    }
    if (win == 1) return `El ganador es ${player1.name()}`;
    else return `El ganador es ${player2.name()}`;
  }
}



let app = new Main();
console.log(app.iniciar());
