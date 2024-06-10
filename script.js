/*********************Header*************************/
/*****************Scrolling*********************/
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.style.transition = 'top 0.3s ease';
    header.style.position = 'static';
  } else {
    // Scrolling up
    header.style.transition = 'top 0.3s ease';
    header.style.position = 'fixed';
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

/**********************************************/
