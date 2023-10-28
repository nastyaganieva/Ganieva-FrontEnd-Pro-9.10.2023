//---- HOMEWORK 2 ----

// const userName = prompt('What is your name?');
// alert('Hello, ' + userName + '! How are you?');

//---- HOMEWORK 3 ----
// ---- 1
// const firstStr = prompt('Enter the first line');
// const secondStr = prompt('Enter the second line');
// const thirdStr = prompt('Enter the third line');

// const result = alert(`${firstStr} ${secondStr} ${thirdStr}`);

//---- 2
// const numbers = prompt('Enter 5 numbers');
// let string = new String;

// for (let i = 0; i < numbers.length; i++) {
//     string += numbers[i] + ' '; 
// }

// const firstValue = +prompt('Enter the first value');
// const secondValue = +prompt('Enter the second value');

// alert(`${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
// // alert(firstValue + ' + ' + secondValue + ' = ' + (firstValue + secondValue));
// alert(`${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
// // alert(firstValue + ' - ' + secondValue + ' = ' + (firstValue - secondValue));
// alert(`${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
// // alert(firstValue + ' * ' + secondValue + ' = ' + (firstValue * secondValue));
// alert(`${firstValue} / ${secondValue} = ${firstValue / secondValue}`);
// // alert(firstValue + ' / ' + secondValue + ' = ' + (firstValue / secondValue));

// const firstValue = +prompt('Enter the first value');
// const secondValue = +prompt('Enter the second value');

// alert(`${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
// alert(`${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
// alert(`${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
// alert(`${firstValue} / ${secondValue} = ${firstValue / secondValue}`);

//---- HOMEWORK 5 ----

// const hours = prompt('Enter the number of hours');
// const seconds = hours * 3600;

// alert(`${seconds} seconds`);


//---- HOMEWORK 8 ----

// ---- 1
// document.write('1. ');
// let a = 10;

// for (a; a <= 20; a++) {
//   if (a != 20) {
//     document.write(a + ', ')
// } else { document.write(a) }  
// }

// //----2
// document.write('<br/> 2. ');
// let b = 10;

// for (b; b <= 20; b++) {
//   if (b != 20) {
//     document.write(Math.pow(b, 2) + ', ')
//   } else { document.write(Math.pow(b, 2)) }
// }

// //---- 3
// document.write('<br/> 3. Таблиця множення на 7');
// let c = 1;
// let d = 7;

// for (c; c <= 10; c++) {
//   if (c != 10) {
//     document.write(`<p> ${d} * ${c} = ${c*d};`)
//   } else { document.write(`<p> ${d} * ${c} = ${c*d}.`) }
// }

// //---- 4
// document.write('<br/> 4.');
// let e = 1;
// let sumOne = 0;

// for (e; e <= 15; e++) {
//   sumOne += e;
// }

// document.write(sumOne);

// //---- 5
// document.write('<br/> 5. ');
// let f = 15;
// let result = 1;

// for (f; f <= 35; f++) {
//   result = result * f;
// }

// document.write(result);

// //---- 6
// document.write('<br/> 6. ');
// let g = 1;
// let sumTwo = 0;

// for (g; g <= 500; g++) {
//   sumTwo += g;
// }

// document.write(sumTwo/500);

// //---- 7
// document.write('<br/> 7. ');
// let h = 30;
// let sumThree = 0;

// for (h; h <= 80; h++) {
//   if (h % 2 === 0) {
//     sumThree += h;
//   }
// }

// document.write(sumThree);

// //---- 8
// document.write('<br/> 8. ');
// let i = 100;

// for (i; i <= 200; i++) {
//   if (i % 3 === 0) {
//     document.write(`${i}, `)
//   }
// }

// //---- 9



//---- HOMEWORK 9

const array = [];
array.length = prompt('Enter array length');

do {
  switch (true) {
    case (array.length === null):
      alert('Incorrect');
      continue;

    case (array.length === ''):
      alert('Incorrect');
      continue;

    case isNaN (+array.length):
      alert('Incorrect')
      continue;

    case (array.length < 0):
      alert('Incorrect');
      continue;
  } 
} while (array.length === true);

let i = 0;

do {
  array[i] = prompt('Enter elements of array');
  
  switch (true) {
    case (array[i] === null):
      alert('Incorrect');
      continue;

    case (array[i].trim() === ''):
      alert('Incorrect');
      continue;

    case isNaN (+array[i]):
      alert('Incorrect')
      continue;
  } 
  i++
} while (i < array.length);
console.log(array);

array.sort(function(a, b) {
  return (a - b);
}) 
console.log(array);

array.splice(1, 3);
console.log(array);

