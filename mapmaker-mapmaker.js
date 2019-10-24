function doubleAll(numbers) {
  const doubled = [];
  
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  
  return doubled;
}

function absoluteValues(numbers) {
  const absolutes = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const absolute = number < 0 ? number * -1 : number;
    absolutes.push(absolute);
  }

  return absolutes;
}

function yelledGreetings(greetings) {
  const yelled = [];

  for (let i = 0; i < greetings.length; i++) {
    yelled.push(`${greetings[i]}!`)
  }

  return yelled;
}

function changeToInitials(names) {
  const initialsList = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let initials = '';

    for (let i = 0; i < name.length; i++) {
      if (i === 0 || name[i - 1] === ' ') {
        initials = name[0] + name[i];
      }
    }

    initialsList.push(initials);
  }

  return initialsList;
}

function doubleOdd(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(
      numbers[i] % 2 === 1 || numbers[i] % 2 === -1
        ? numbers[i] * 2
        : numbers[i]
      )
  }

  return doubled;
}

function upperCaseFirstLetters(names) {
  let upperCasedNames = [];

  for (let i = 0; i < names.length; i++) {
    upperCasedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())
  }

  return upperCasedNames;
}

function add1ToLeft(numbers) {
  const with1Addeds = [];
  for (let i = 0; i < numbers.length; i++) {
    const stringifiedNumber = numbers[i].toString();
    const stringWith1Added = stringifiedNumber[0] === '-'
      ? '-1' + stringifiedNumber.slice(1)
      : '1' + stringifiedNumber

    with1Addeds.push(Number(stringWith1Added));
  }

  return with1Addeds;
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}