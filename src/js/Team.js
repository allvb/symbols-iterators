export default class Team {
  constructor() {
    this.length = 0;
    this[Symbol.iterator] = [][Symbol.iterator];
  }

  addHeroy(character) { // метод добавляет игрока в команду
    const classes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Undead',
      'Zombie',
      'Daemon',
    ];
    if (classes.indexOf(character.type) < 0) {
      throw new Error('В команду передан несуществующий тип героя');
    }
    this[this.length] = character;
    this.length += 1;
  }
}
