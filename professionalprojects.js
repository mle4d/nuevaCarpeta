document.querySelector('.meltmenu').addEventListener('click', function() {
  document.querySelector('.poster').style.background = 'url(assets/meltposter.png)';
  document.querySelector('.poster').style.backgroundSize = '100%';
  document.querySelector('#info').style.color = 'white';
  document.querySelector('#info').innerHTML = '	○<br>○<br>○<br>○';
  document.querySelector('#art').style.display = 'none';
  window.body
});