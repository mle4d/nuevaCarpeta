document.querySelector('.ballPC').addEventListener('click', function() {
  document.querySelector('.poster').style.background = 'url(assets/8ballposter.png)';
  document.querySelector('#art').style.display = 'none';
  window.body
});
document.querySelector('.nintiesPC').addEventListener('click', function() {
  document.querySelector('.poster').classList.toggle('nintiesPoster');
  window.body
});
document.querySelector('.meowPC').addEventListener('click', function() {
  document.querySelector('.poster').classList.toggle('meowPoster');
  window.body
});
document.querySelector('.bookshelfPC').addEventListener('click', function() {
  document.querySelector('.poster').classList.toggle('bookshelfPoster');
  window.body
});
document.querySelector('.spacePC').addEventListener('click', function() {
  document.querySelector('.poster').classList.toggle('spacePoster');
  window.body
});