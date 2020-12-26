// /////Строковая Интерполяция
// var name = 'Роман';
// var lastName = 'Яковлев';
// var old = '29';
// var profession = 'Frontend developer';

// const { name } = require("file-loader");

// const { name } = require("file-loader");

// //var fullInfo = name + ' ' + lastName + ' (' + old + ', '+ profession +')';

// var fullInfo = `${name} ${lastName} (${old}, ${profession})`;

// //console.log(fullInfo); выводим в консоль все значения переменных, обобщенные в одной переменной.

// //////Объекты

// var obj = {
//     name: 'Роман',
//     lastName: 'Яковлев',
//     old: 29,
//     work: 'Frontend developer'
// };

// console.log(obj.lastName); //Получаем доступ к свойству объекта. Точечная нотация.
// console.log(obj['lastName']);

// obj.name = 'Дмитрий' // смена значения свойства name
// obj.color = 'Green' // Добавление нового свойства в объект obj

// ////// МАССИВЫ
// var array1 = ['Sergey', 'Ivan', 'Andrey'];

// console.log(array[1]) // Обращение к элементу массива с индексом 1. Индексация в массивах начинается с 0

// array[1] = 'Roman'; // Изменение элемента

// console.log(array[1]) //
// console.log(array.length); // Узнаем кол-во элементов в массиве.

// array.push('Yana'); // Добавляем элемент в массив.
// console.log(array.length);

// for (var i = 0; i < array.length; i++) { // Перебираем все элементы массива
//     console.log(i);
// }
// for (var i = 0; i < array.length; i++) { // Перебираем и выводим в консоль все значения элементов массива
//     console.log(array[i]);
// }

// var array = [
//     {
//         name: 'Ekaterina',
//         lastName: 'Yakovleva'
//     },
//     {
//         name: 'Elena',
//         lastName: 'Yakovleva'
//     },
//     {
//         name: 'Alexandr',
//         lastName: 'Yakovlev'
//     }
// ];

// for (let i = 0; i < array.length; i++) {
//    const name = array[1].name;

//     console.log(array[i].name);
// };

////////////////// Деструктурирующее присваивание: Массивы
// var input = 'Petrov Sergey Ivanovich';

// var [ , name, surName] = input.split(' ');

// console.log(name);
// console.log(surName);

// function hi([ , name, secondName = '']) {
//     console.log('Hi there, my name is ${name} ${secondName}')
// }

// var input = 'Petrov Sergey Ivanovich';

// hi(input.split(' '));

////////////////// Деструктурирующее присваивание: Объекты

// var user = {
//     lastName: 'Петров',
//     name: 'Сергей',
//     secondName: 'Иванович'
//  };

//  var {name, lastName, secondName} = user;

//  console.log(`Привет, меня зовут ${lastName} ${name} ${secondName}`);

////////////////// Spread оператор
// var numbers = [1, 2, 3, 4];

// function sum() {
//    var result = 0;

//    for (var i = 0; i < arguments.length; i++) {
//        result += arguments[i];
//    }

//    return result;
// }

// var result = sum(...numbers);

// console.log(result);

//////////////// Rest - оператор

const a = [1, 2, 3, 4];

const [first, second, ...rest] = a;

console.log(first, second, ...rest);
console.log(a);
