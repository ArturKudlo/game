const firstPart = [
  'Прыщавый',
  'Уродливый',
  'Паганы',
  'Вонючий',
  'Сопливый',
  'Грязный',
  'Ужасный',
  'Дикий',
  'Глупый',
  'Недалекий',
];

const secondPart = [
  ' Огр',
  ' Гном',
  ' Эльф',
  ' Великан',
  ' Троль',
  ' Эльф',
  ' Орк',
  ' Трэнт',
  ' Кентавр',
  ' Дух',
];

const thirdPart = [
  ' Евлампий',
  ' Инокентий',
  ' Метрафан',
  ' Геннадий',
  ' Ренат',
  ' Святослав',
  ' Геннадий',
  ' Ярополк',
  ' Ярыло',
  ' Ягайло',
];

function randomName(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function getMonsterName() {
  return `${randomName(firstPart)}${randomName(secondPart)}${randomName(thirdPart)}`;
}

