// 1.Используя конструкцию if..else, напишите код, который будет спрашивать: 'Какой сейчас год?'.
// Если посетитель вводит '2015', то выводить 'Вы правы!', если что-то другое — выводить 'С луны свалися? 2015!'.


// var result = prompt('Какой сейчас год?', '');
// if(result=='2015'){
//   alert('Вы правы!');
// }else {
//   alert('С луны свалился? 2015!');
// }

//2. Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?'

//Затем выведите alert:
//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.

// var result = prompt('Введите любое целое число','');
// if(result>0){
//   alert('Число больше нуля');
// }else if (result<0) {
//   alert('Число меньше нуля');
// }else if (result==0) {
//   alert('Число равно нулю');
// }

// 3. Напишите код, который будет запрашивать логин пользователя (prompt).
// Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.
//
// Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.

// var login = prompt('Введите логин','');
// if(login=='admin'){
//   var password = prompt('Введите пароль','');
//   if(password=='passw0rd'){
//     alert('Welcome home!');
//   } else if (password==null) {
//     alert('Canceled');
//   }else {
//     alert('Wrong password');
//   }
// } else if (login==null) {
//   alert('Canceled');
// } else {
//   alert('Access denied');
// }

// 4. Перепишите if с использованием оператора '?':
// var a = 1, b = 2;
//
// if (a + b >= 3) {
// 	result = 'Yep!';
// } else {
//   result = 'Noup!';
// }

// var a = 1, b = 2;
// var result = a+b>=3 ? 'Yep!' : 'Noup!';
// alert(result);

// 5. +Перепишите if..else с использованием нескольких операторов '?':
//
// var name = 'admin', text;
//
// if (name == 'admin') {
//   text = 'Hi';
// } else if (name == 'manager') {
//   text = 'Hello';
// } else if (name == '') {
//   text = 'No login';
// } else {
//   text = '';
// }
var text;
var name = 'admin', text;
text = name=='admin'?'Hi':
name=='manager'?'Hello':
name==''?'No login':
'';
alert(text);
