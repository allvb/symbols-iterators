export default class Team {
  constructor() {
    this.length = 0;
    this[Symbol.iterator] = () => {
      let current = 0;
      const last = this.length; // создаем last чтобы сохранит ссылку this
      const item = this; // создаем ссылку на экземпляр объекта
      return {
        next() {
          if (current < last) {
            const number = current; // ввел чтобы обойти недовольсто ESLint
            current += 1;
            return {
              done: false,
              value: item[number],
            };
          }
          return {
            done: true,
          };
        },
      };
    };
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
