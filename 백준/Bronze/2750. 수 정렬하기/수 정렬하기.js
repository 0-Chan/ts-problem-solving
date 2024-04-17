const [N, ...testCases] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt',
    { encoding: 'utf8' }
  )
  .trim()
  .split(/\r?\n/);

const solution = (N, testCases = []) => {
  return testCases.map(Number).sort((a, b) => a - b);
};

const log = (message) => console.log(message);
solution(N, testCases).forEach((ele) => log(ele));