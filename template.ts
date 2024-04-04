// v1.1.0
export {};
const [N, ...testCases] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt',
    { encoding: 'utf8' }
  )
  .trim()
  .split('\n') as Array<string>;

const solution = (testCase: string) => {
  log(testCase);

  return;
};

const log = (message: string) => console.log(message);
const answer = (testCases: string[]) => {
  return testCases.reduce(
    (acc, testCase) => `${acc}${solution(testCase)}\n`,
    ''
  );
};

log(answer(testCases));
