document.querySelector('.meltmenu').addEventListener('click', function() {
  document.querySelector('.poster').style.background = 'url(assets/meltposter.png)';
  document.querySelector('.poster').style.backgroundSize = '100%';
  document.querySelector('#info').style.color = 'white';
  document.querySelector('#info').innerHTML = '	○<br>○<br>○<br>○';
  document.querySelector('#art').style.display = 'none';
  document.querySelector('.phone').style.background = 'url(assets/meltmobile.jpg)';
  document.querySelector('.phone').style.backgroundSize = '100%';
  document.querySelector('#clock').style.display = 'none';
  document.querySelector('#date').style.display = 'none';
  window.body
});
document.querySelector('.pkccFlyer').addEventListener('click', function() {
  document.querySelector('.poster').style.background = 'url(assets/pkccposter.png)';
  document.querySelector('.poster').style.backgroundSize = '100%';
  document.querySelector('#info').style.color = 'white';
  document.querySelector('#info').innerHTML = '	○<br>○<br>○<br>○';
  document.querySelector('#art').style.display = 'none';
  window.body
});
document.querySelector('.pdaaFlyer').addEventListener('click', function() {
  document.querySelector('.poster').style.background = 'url(assets/pdaaposter.png)';
  document.querySelector('.poster').style.backgroundSize = '100%';
  document.querySelector('#info').style.color = 'white';
  document.querySelector('#info').innerHTML = '	○<br>○<br>○<br>○';
  document.querySelector('#art').style.display = 'none';
  window.body
});