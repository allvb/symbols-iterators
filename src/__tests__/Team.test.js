import Team from '../js/Team';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Daemon from '../js/Daemon';

test('testing class Team to be iterable', () => {
  const arrOfHeroes = []; // создаём этулонный массив команды
  arrOfHeroes.push(new Bowman('Robin'));
  arrOfHeroes.push(new Swordsman('Gans'));
  arrOfHeroes.push(new Magician('Iri'));
  arrOfHeroes.push(new Undead('Brrr'));
  arrOfHeroes.push(new Zombie('Zzzz'));
  arrOfHeroes.push(new Daemon('Vamp'));

  const team = new Team(); // добавляем игроков в команду
  team.addHeroy(new Bowman('Robin'));
  team.addHeroy(new Swordsman('Gans'));
  team.addHeroy(new Magician('Iri'));
  team.addHeroy(new Undead('Brrr'));
  team.addHeroy(new Zombie('Zzzz'));
  team.addHeroy(new Daemon('Vamp'));

  let count = 0;
  for (const heroy of team) { // итерируем класс Team
    expect(heroy).toEqual(arrOfHeroes[count]);
    count += 1;
  }
});

// тестируем играков на ошибки (для покрытия тестами)
test('testing Characters name errors', () => {
  expect(() => {
    const player = new Bowman(1);
    player.name = 1;
  }).toThrowError('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
  expect(() => {
    const player = new Daemon('R');
    player.name = 'R';
  }).toThrowError('Ошибка, длина имени должна быть от 2 до 10 символов');
  expect(() => {
    const player = new Swordsman('RobinRobinRobin');
    player.name = 'RobinRobinRobin';
  }).toThrowError('Ошибка, длина имени должна быть от 2 до 10 символов');
});

// тестируем на ошибки в классе Team
test('testing classes in class Team errors', () => {
  expect(() => {
    const team = new Team();
    team.addHeroy([]);
  }).toThrowError('В команду передан несуществующий тип героя');
});

// тестируем итерацию пустой команды
test('testing empty team', () => {
  const team = new Team();
  for (const heroy of team) {
    expect(heroy).toEqual(undefined);
  }
});

// тестируем итерацию команды с одним игроком
test('testing team with one heroy', () => {
  const team = new Team();
  team.addHeroy(new Bowman('Robin'));
  const bowman = new Bowman('Robin');
  for (const heroy of team) {
    expect(heroy).toEqual(bowman);
  }
});
