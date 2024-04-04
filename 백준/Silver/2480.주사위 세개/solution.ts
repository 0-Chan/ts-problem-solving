const [...testCases] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "dev/stdin" : __dirname + "/input.txt",
    { encoding: "utf8" }
  )
  .trim()
  .split("\n") as Array<string>;

const solution = (testCase: string) => {
  const sortedDice: number[] = testCase
    .trim()
    .split(" ")
    .map((ele) => Number(ele))
    .sort((a, b) => b - a);

  const sumElements = (collection: number[] | Set<number>): number => {
    let sumResult = 0;
    collection.forEach((ele) => (sumResult += ele));
    return sumResult;
  };

  const uniqDice = new Set(sortedDice);
  const numOfDuplicates = sortedDice.length - uniqDice.size;

  const duplicatedDie =
    (sumElements(sortedDice) - sumElements(uniqDice)) / numOfDuplicates;
  const biggestDie = sortedDice[0];

  const cashPrize =
    numOfDuplicates === 0
      ? biggestDie * 100
      : numOfDuplicates === 1
      ? 1000 + duplicatedDie * 100
      : numOfDuplicates === 2
      ? 10000 + duplicatedDie * 1000
      : null;

  return cashPrize;
};

// stdout
console.log(
  testCases.reduce((acc, testCase) => `${acc}${solution(testCase)}\n`, "")
);
