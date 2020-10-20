export default class Dado {
  constructor() {}
  tirar() {
    return 1 + Math.floor(Math.random() * 6);
  }
}
