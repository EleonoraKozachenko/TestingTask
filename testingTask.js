// 1

const array = [1, 3, 5, 4, 5, 7];

function comparer(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i + 2];

    if ((a > b && b < c) || (a < b && b > c)) {
      newArr.push(1);
    } else {
      newArr.push(0);
    }
  }

  return newArr;
}

comparer(array); //[0, 1, 1, 0]

// 2

const collection = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];

function checkMatrix(arr) {
  const result = [];

  for (let i = 0; i < arr[0].length - 2; i++) {
    let set = new Set();
    set.add(arr[0][i]);
    set.add(arr[1][i]);
    set.add(arr[2][i]);
    set.add(arr[0][i + 1]);
    set.add(arr[1][i + 1]);
    set.add(arr[2][i + 1]);
    set.add(arr[0][i + 2]);
    set.add(arr[1][i + 2]);
    set.add(arr[2][i + 2]);

    set.size === 9 ? result.push(true) : result.push(false);
    set.clear();
  }

  return result;
}

checkMatrix(collection); //[true, false, true]

//3

const message = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
];
const conditions = ["LEFT", "RIGHT", "LEFT"];

const limit = 16;

function formatText(arr, position, lim) {
  const result = [];
  arr.forEach((item) => {
    let str = item.join(" ");
    let side = position[arr.indexOf(item)];

    if (str.length < lim && side === "LEFT") {
      result.push(`*${str + " ".repeat(lim - str.length)}*`);
    } else if (str.length < lim && side === "RIGHT") {
      result.push(`*${" ".repeat(lim - str.length) + str}*`);
    } else if (str.length > lim && side === "LEFT") {
      let part = str;
      while (part.length > lim) {
        let symbolArr = part.split("");
        let breakpoint = symbolArr.lastIndexOf(" ", lim);
        let part1 = part.slice(0, breakpoint);
        result.push(`*${part1 + " ".repeat(lim - part1.length)}*`);

        part = part.slice(breakpoint + 1);
        if (part.length < lim) {
          result.push(`*${part + " ".repeat(lim - part.length)}*`);
        }
      }
    } else if (str.length > lim && side === "RIGHT") {
      let part = str;
      while (part.length > lim) {
        let symbolArr = part.split("");
        let breakpoint = symbolArr.lastIndexOf(" ", lim);
        let part1 = part.slice(0, breakpoint);
        result.push(`*${" ".repeat(lim - part1.length) + part1}*`);

        part = part.slice(breakpoint);
        if (part.length < lim) {
          result.push(`*${" ".repeat(lim - part.length) + part}*`);
        }
      }
    }
  });

  result.unshift("*".repeat(lim + 2));
  result.push("*".repeat(lim + 2));

  return result;
}

formatText(message, conditions, limit);
// [
// "******************"
// "*Hello world     *"
// "*    Brad came to*"
// "*  dinner with us*"
// "*He loves tacos  *"
// "******************"
// ]
