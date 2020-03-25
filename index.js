const triggers = document.querySelectorAll('.quickinfo > li');
  const background  = document.querySelector('.dropdownBackground');
  const nav  = document.querySelector('.top');

  function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

  function digitalclock()
  {
    var elmnt=document.getElementById("clock");
    var timenow=new Date();
    elmnt.innerHTML=timenow.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    // toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    
  }
  window.onload=function()
  {
    setInterval(digitalclock)
  };