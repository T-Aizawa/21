var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');
var spNav = document.getElementById('spNav');

openBtn.addEventListener('click', function() {
  spNav.classList.add('active');
});

closeBtn.addEventListener('click', function() {
  spNav.classList.remove('active');
});


// DOM.addEventListener('イベント名', function() {
//   実行する処理
// });


// DOM.addEventListener('イベント名', 関数名);
// function 関数名() {
//
// };
// この場合は引数が取れないので工夫する必要がある
