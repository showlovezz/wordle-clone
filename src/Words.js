import wordBank from './wordle-bank.txt';

export const boardDefault = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

export const generateWordSet = async () => {
  let wordSet;
  let todayWord;

  await fetch(wordBank)
    .then((response) => {
      return response.text();
    })
    .then((result) => {
      const wordArr = result.split('\n');
      todayWord = wordArr[Math.floor(Math.random() * wordArr.length)];

      wordSet = new Set(wordArr);
    });

  return { wordSet, todayWord };
};

export const genenerateWordSet1 = () =>
  fetch(wordBank)
    .then((res) => res.text())
    .then((text) => ({
      // "abcde\nabcee"
      wordSet: new Set(text.split('\n')), // ["abcde", "abcee"]
      todayWord: text.split('\n')[Math.floor(Math.random() * text.split('\n').length)],
    }));
