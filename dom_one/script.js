// // document object model
// var age = 10;
// console.log(age);
// alert('hello world');

var fruits = ['apple', 'orange', 'banana', 'guava'];

// var html = '<ul> <li>Apple</li>  <li>Banana</li>  <li>Orange</li>  <li>Mango</li>  </ul>'
var html = '<ul>';
for (var i = 0; i < fruits.length; i++) {
html = html + '<li>' + fruits[i] +'</li>'
}
html = html + '</ul>';

var fruit = document.getElementById('fruit');
fruit.innerHTML = html;