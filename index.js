//n1
function max_name(name1, name2, name3) {
  let longestName = name1;
  if (name2.length > longestName.length) {
    longestName = name2;
  }
  if (name3.length > longestName.length) {
    longestName = name3;
  }
  return longestName;
}

console.log(max_name('Alex', 'George', 'Michael'));

//n2 // Создать функцию которая делает пропорции не в  зависимости от каких  либо цифр

function proportion(num1, num2) {
  num1 = prompt(`Number`)
  num2 = prompt('на сколько')
  let propAnswer = num1 / num2

  alert(propAnswer)
}
proportion()
  // Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте 

let n = prompt('write a number '); // Сколько элементов хотим получить

let fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
// slice отрезает от массива первые n элементов, если n < 2
console.log(fibonacci.slice(0,n));


