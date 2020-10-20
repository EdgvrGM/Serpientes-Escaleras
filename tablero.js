export default class Tablero {
  mostrar(posicion, player) {
    switch (posicion) {
      case 4:
      case 33:
      case 69:
        console.log(
          `${player} esta en la posicion: ${posicion}, pero subio por una escalera grande y ahora esta en: ${
            posicion + 20
          }`
        );
        return 20;
      case 11:
      case 88:
      case 46:
      case 50:
        console.log(
          `${player} esta en la posicion: ${posicion}, pero subio por una escalera pequeña y ahora esta en: ${
            posicion + 10
          }`
        );
        return 10;
      case 2:
        console.log(
          `${player} esta en la posicion: ${posicion}, pero subio por una escalera grande y ahora esta en: ${
            posicion + 70
          }`
        );
        return 70;
      case 20:
      case 40:
      case 66:
        console.log(
          `${player} esta en la posicion: ${posicion}, pero se deslizo por una serpiente y ahora esta en: ${
            posicion - 20
          }`
        );
        return -20;
      case 30:
      case 49:
      case 83:
      case 92:
        console.log(
          `${player} esta en la posicion: ${posicion}, pero se deslizo por una serpiente pequeña y ahora esta en: ${
            posicion - 10
          }`
        );
        return -10;
      case 99:
        console.log(
          `${player} esta en la posicion: ${posicion}, pero se deslizo por una serpiente grande y ahora esta en: ${
            posicion - 80
          }`
        );
        return -80;
      default:
        console.log(`${player} esta en la posicion: ${posicion}`);
        return 0;
    }
  }
}
