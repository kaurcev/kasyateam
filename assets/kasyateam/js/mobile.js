var open = document.location.pathname;
var message1 = 'Данная функция доступна в приложении K-Feed';
var win = {}
win.feed = '/why-check.html';
win.why =  '/feed.html';
win.update = '/update.html'

if (screen.width >= 850 && open == win.why) {
  window.location.href = './k-feed'
}else if (screen.width <= 850 && open == win.feed){
  window.location.href = './main.html#feed'
}else if (screen.width <= 850 && open == win.update){
  window.location.href = './update'
}else {
  window.location.href = './device'
}
