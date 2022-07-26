const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = document.querySelector('.all'),
    btnLovers = document.querySelector('.lovers'),
    btnChef = document.querySelector('.chef'),
    btnGirl = document.querySelector('.girl'),
    btnGuy = document.querySelector('.guy'),
    btnGrandmother = document.querySelector('.grandmother'),
    btnGranddad = document.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapepr'),
    markAll = document.querySelectorAll('.all'),
    markGirl = document.querySelectorAll('.girl'),
    markLovers = document.querySelectorAll('.lovers'),
    markChef = document.querySelectorAll('.chef'),
    markGuy = document.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');
  const typeFilter = (markType) => {
    markAll.forEach(function (mark) {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn')
      });
    } else {
      no.style.display = 'none';
      no.classList.remove('animated', 'fadeIn');
    }
  };
  btnAll.addEventListener('click', function () {
    typeFilter(markAll);
  });
  btnLovers.addEventListener('click', function () {
    typeFilter(markLovers)
  });
  btnChef.addEventListener('click', function () {
    typeFilter(markChef)
  });
  btnGuy.addEventListener('click', function () {
    typeFilter(markGuy)
  });
  btnGirl.addEventListener('click', function () {
    typeFilter(markGirl)
  });
  btnGrandmother.addEventListener('click', function () {
    typeFilter()
  });
  btnGranddad.addEventListener('click', function () {
    typeFilter()
  });
  menu.addEventListener('click', function (e) {
    let target = e.target;
    if (target && target.tagName == 'LI') {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active')
    }
  });
};
export default filter;