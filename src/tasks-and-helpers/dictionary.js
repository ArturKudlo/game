const dictionary = {
  words: [
    {
      word: 'rabbit',
      trans: ['заяц', 'кролик'],
    },
    {
      word: 'horse',
      trans: ['лошадь', 'лошадка'],
    },
    {
      word: 'world',
      trans: ['мир'],
    },
    {
      word: 'family',
      trans: ['семья'],
    },
    {
      word: 'food',
      trans: ['еда'],
    },
    {
      word: 'cherry',
      trans: ['вишня'],
    },
    {
      word: 'ball',
      trans: ['мяч', 'мячик'],
    },
    {
      word: 'TV',
      trans: ['телевизор', 'телик'],
    },
    {
      word: 'duck',
      trans: ['утка'],
    },
    {
      word: 'fish',
      trans: ['рыба'],
    },
    {
      word: 'sister',
      trans: ['сестра'],
    },
    {
      word: 'brother',
      trans: ['брат'],
    },
    {
      word: 'cherry',
      trans: ['вишня'],
    },
    {
      word: 'water',
      trans: ['вода'],
    },
    {
      word: 'clothes',
      trans: ['одежда'],
    },
    {
      word: 'weather',
      trans: ['погода'],
    },
    {
      word: 'lion',
      trans: ['лев'],
    },
    {
      word: 'meat',
      trans: ['мясо'],
    },
    {
      word: 'flower',
      trans: ['цветы', 'цветок'],
    },
    {
      word: 'hat',
      trans: ['шляпа'],
    },
    {
      word: 'sea',
      trans: ['море'],
    },
    {
      word: 'shirt',
      trans: ['майка'],
    },
    {
      word: 'ice-cream',
      trans: ['мороженое'],
    },
    {
      word: 'bag',
      trans: ['сумка'],
    },
    {
      word: 'word',
      trans: ['слово'],
    },
    {
      word: 'car',
      trans: ['машина'],
    },
    {
      word: 'apple',
      trans: ['яблоко'],
    },
    {
      word: 'boy',
      trans: ['мальчик'],
    },
    {
      word: 'photo',
      trans: ['фото', 'фотография'],
    },
    {
      word: 'book',
      trans: ['книга'],
    },
    {
      word: 'head',
      trans: ['голова', 'башка'],
    },
    {
      word: 'hand',
      trans: ['рука'],
    },
    {
      word: 'door',
      trans: ['дверь'],
    },
    {
      word: 'dog',
      trans: ['собака'],
    },
    {
      word: 'mother',
      trans: ['мама'],
    },
    {
      word: 'table',
      trans: ['стол'],
    },
    {
      word: 'house',
      trans: ['дом', 'домик'],
    },
    {
      word: 'sun',
      trans: ['солнце'],
    },
    {
      word: 'son',
      trans: ['сын'],
    },
    {
      word: 'cat',
      trans: ['кот','котик'],
    },
    {
      word: 'pencil',
      trans: ['карандаш'],
    },
    {
      word: 'pen',
      trans: ['ручка'],
    },
  ],
};

function randomWord() {
  const arr = dictionary.words;
  const word = arr[Math.floor(Math.random() * arr.length)];
  return word;
}
export default randomWord;
