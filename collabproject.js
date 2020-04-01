document.querySelector('.htsticker').addEventListener('click', function() {
  document.querySelector('.poster').style.background = 'url(assets/happytreesposter.png)';
  document.querySelector('.poster').style.backgroundSize = 'cover';
  document.querySelector('#info').style.color = 'white';
  document.querySelector('#info').innerHTML = '';
  document.querySelector('#art').style.display = 'none';
  document.querySelector('.phone').style.background = 'url(assets/happytreesmobile.jpg)';
  document.querySelector('.phone').style.backgroundSize = '100%';
  document.querySelector('#clock').style.display = 'none';
  document.querySelector('#date').style.display = 'none';
  document.querySelector('.screen').style.background = 'url(assets/happytreesdemo.gif)';
  document.querySelector('.screen').style.backgroundSize = '100%';
  document.querySelector('.dtss').style.display = 'none';
  document.querySelector('.sticky').innerHTML = '<a class="stickyLink" href="https://happy-trees.netlify.com/" target="_blank">Visit Site</a>';
  document.querySelector('.LTscreen').style.background = 'url(assets/happytreesrepo.gif)';
  document.querySelector('.LTscreen').style.backgroundSize = '100%';
  document.querySelector('.circles').style.display = 'none';
  document.querySelector('.tab').innerHTML = '<a class="tabLink" href="https://github.com/happy-trees" target="_blank">See Code</a>';
  window.body
});