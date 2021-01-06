/* let number = 7;  задание переменной 
const pi = 3.14;  задание постоянной 

number = 4;

let leftBorderwidth = 200;
 */



/* Типы данных :
number
string - строка. здесь записывается любая инфа, которая записывается словами. записывается ТОЛЬКО с кавычками
true/false - булиновый (логический) тип данных 
null - несуществующий элемент
undefined - что-то существует, но значения не имеет
{} - объект (комплексный тип данных). может включать в себя все типы данных

let obj = {
    name = 'apple',
    color = 'green'
    weight = 200
}

Symbol - технический тип данных. используется нечасто
*/


/* команды взаимодействия с пользователем:

alert () - вывод всей инфы, записанной внутри на экран. почти уже не используется.
console.log ('') - команда для разработчика. для команд в консоли
confirm('how old are you? more than 18?') - для вывода модальных окон с подтверждением

let answer = confirm('how old are you? more than 18?');
console.log(answer);

let answer = prompt('how old are you? more than 18?', ''); 
console.log(answer); - выводим модальное окно с возможностью в нем написать что-либо

*/



/* операторы 
+ - * /
console.log(4+4)
console.log(4-'GamepadHapticActuatorfep') - NaN
console.log(4+'GamepadHapticActuatorfep') - конкатенация строк


let ischecked = false,
    isclose   = false;
console.log(ischecked && isclose); - оператор "И"
console.log(ischecked || isclose); - оператор "Или"
*/


/* условия 

if (2*3 == 8*1) {
    console.log('correct')
}
else {
    console.log('incorrect')
}

let answer = confirm('how old are you? more than 18?');
if (answer) {
    console.log('welcome')
}
else {
    console.log('go out')
};


const num = 139;

if (num < 49) {
    console.log('wrong')
}
else if (num > 100) {
    console.log('too much')
}
else {
    console.log('correct')
}

*/

/* циклы
for(let i = 1; i<8; i++) {
    console.log(i);
}то есть цикл продолжается до тех пор, пока наша переменная не станет больше или равна восьмерке

 */


/* функции function logging (a,b) {
    console.log(a * b) 
    здесь описание функции
} 

logging (3, 5);
logging (9, 5);
здесь выполнение функции
 задание функций. как пример:калькулятор
*/

/* ОБРРАТИ ВНИМАНИЕ НА ТО, ЧТО ПУТЬ К КАРТИНКЕ УКАЗЫВАЕТСЯ НЕСКОЛЬКО ИНАЧЕ. УРОК 3.12 */ 

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left_arrow.svg"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/right_arrow.svg"> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows:false
                    }
            }
        ]

      });
  });

/* Это был первый вариант создания карусели  */

