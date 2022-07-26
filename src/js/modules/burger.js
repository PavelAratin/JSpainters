const burger = (menuSelector, burgerSelector) => {
  const menuElement = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector);
  menuElement.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElement.style.display == 'none' && window.screen.availWidth < 993) {
      menuElement.style.display = 'block';
    } else {
      menuElement.style.display = 'none';
    }
  })
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElement.style.display = 'none';
    }
  })
};
export default burger;