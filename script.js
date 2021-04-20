
// swiper gallery

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoHeight: true,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  // swiper gallery ends here

  // Tabs section
let tabNavigationBlocks = document.querySelectorAll('.tab_section nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab_section .tab-content');

function removeActiveNavigation() {
  for (let tab of tabNavigationBlocks) {
    tab.classList.remove('active');
  }
}

function removeActiveTabs() {
  for (let tab of tabContentBlocks) {
    tab.classList.remove('active');
  }
}

for (let tab of tabNavigationBlocks) {
  tab.addEventListener('click', function() {
    removeActiveNavigation();
    removeActiveTabs();

    this.classList.add('active');

    let index = this.dataset.slide;

    document.querySelector('.tab_section .tab-content[data-slide="'+index+'"]').classList.add('active');
  })
}
// tabs section ends