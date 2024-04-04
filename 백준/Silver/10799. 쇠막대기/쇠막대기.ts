export {};
const [...testCases] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt',
    { encoding: 'utf8' }
  )
  .trim()
  .split('\n') as Array<string>;

const solution = (testCase: string) => {
  let stackSize = 0;
  const metalRodPieces = testCase
    .trim()
    .split('')
    .reduce((acc, ele, idx, arr) => {
      if (ele === '(') {
        stackSize++;
        return acc;
      } else {
        stackSize--;
        return arr[idx - 1] === '(' ? acc + stackSize : acc + 1;
      }
    }, 0);

  return metalRodPieces;
};

const log = (message: any) => console.log(message);
const answer = (testCases: string[]) => {
  return testCases.reduce(
    (acc, testCase) => `${acc}${solution(testCase)}\n`,
    ''
  );
};

log(answer(testCases));
