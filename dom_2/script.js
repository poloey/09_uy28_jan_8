var body = document.body
var root = document.getElementById('root');

var store = ['apple', 'orange', 'banana'];
var html = '<h1>';
html += 'All fruits available in our fruit store';
html += '</h1>';
html += '<ul>';

for (var i = 0; i < store.length; i++) {
  html += '<li>';
  html += store[i]
  html += '</li>';
}


html += '</ul>';

root.innerHTML = html;