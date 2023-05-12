export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка, длина имени должна быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    this.health = 100;
    this.level = 1;
  }
}
