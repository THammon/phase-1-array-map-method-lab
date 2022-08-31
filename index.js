const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const cased = tutorials.map((cb) => {
    const newCase = cb
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
    return newCase
  })
  return cased  
}

// const arr = str.split('');

// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }

// const tutorials2 = arr.join('');
// console.log(tutorials2);

// function titleCased() {
//   return tutorials.map(element => {
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   })
// }

// newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);

//Working Function but confusing (below)

// function titleCased(){
//   const capTutorials = tutorials.map(t => {
//     const words = t.split(" ").map(w => {
//       return w.charAt(0).toUpperCase() + w.slice(1);
//     }).join(" ");
//     console.log(words);
//     return words; 
//   })
//   return capTutorials;
// }