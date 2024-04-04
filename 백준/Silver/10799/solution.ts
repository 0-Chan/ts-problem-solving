// v1.0.0
const [N, ...testCases] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt',
    { encoding: 'utf8' }
  )
  .trim()
  .split('\n') as Array<string>;

const solution = (testCase: string) => {
  console.log('🚀testCase:', testCase)

  return;
};

console.log(
  testCases.reduce(
    (acc, testCase) => `${acc}${solution(testCase)}\n`,
    ''
  ),
);
