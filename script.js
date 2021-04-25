// Mobile menu
document.getElementById('mobileBurger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navigation').classList.toggle('active');
});
document.getElementById('menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navigation').classList.remove('active');
});

//mobile menu ends

// swiper gallery

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    breakpoints: {
      // when window width is >= 320px
      600: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 3,
      }
    },
   
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


//form submition
let submitButton = document.getElementById('subSubmitButton')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let phoneNumber = document.getElementById('phoneNumber')
let typeSubYear = document.getElementById("subYear")
let typeSubMonth = document.getElementById("subMonth")
let errorMessage = document.getElementById("errorMessage")

submitButton.addEventListener('click', function() {
  if (lastName.value.length && firstName.value.length && phoneNumber.value.length && (typeSubMonth.checked || typeSubYear.checked) > 0) {
    if (typeSubMonth.checked === true) {
      let subscription = "subscription monthly"
    console.log(firstName.value + " " + lastName.value + ", " + phoneNumber.value + ", " + subscription)
    errorMessage.classList.add("hidden")
    setTimeout(function() { alert("Subscription form = "+ firstName.value + " " + lastName.value + ", " + phoneNumber.value + ", " + subscription); }, 1500);
    }
    else {
      let subscription = "subscription yearly"
    console.log(firstName.value + " " + lastName.value + ", " + phoneNumber.value + ", " + subscription)
    errorMessage.classList.add("hidden")
    setTimeout(function() { alert("Subscription form = "+ firstName.value + " " + lastName.value + ", " + phoneNumber.value + ", " + subscription); }, 1500);
    
    }
  }
  else {
    console.log("ivesk")
    errorMessage.classList.remove("hidden")
  }
})
//form submition ends


//contact form 
let submitButton_contact = document.getElementById('contactSubmitButton')
let firstName_contact = document.getElementById('firstName_contact')
let lastName_contact = document.getElementById('lastName_contact')
let phoneNumber_contact = document.getElementById('phoneNumber_contact')
let identPersonal = document.getElementById("identPersonal")
let identCompany= document.getElementById("identCompany")
let errorMessage_contact = document.getElementById("errorMessage_contact")

submitButton_contact.addEventListener('click', function() {
  if (lastName_contact.value.length && firstName_contact.value.length && phoneNumber_contact.value.length && (identPersonal.checked || identCompany.checked) > 0) {
    if (identPersonal.checked === true) {
      let identification = "personal"
    console.log(firstName_contact.value + " " + lastName_contact.value + ", " + phoneNumber_contact.value + ", " + identification)
    errorMessage_contact.classList.add("hidden")
    setTimeout(function() { alert("Please contact me: "+ firstName_contact.value + " " + lastName_contact.value + ", " + phoneNumber_contact.value + ", " + identification); }, 1500);
    }
    else {
      let identification = "company"
    console.log(firstName_contact.value + " " + lastName_contact.value + ", " + phoneNumber_contact.value + ", " + identification)
    errorMessage_contact.classList.add("hidden")
    setTimeout(function() { alert("Please contact me: "+ firstName_contact.value + " " + lastName_contact.value + ", " + phoneNumber_contact.value + ", " + identification); }, 1500);
    
    }
  }
  else {
    console.log("ivesk")
    errorMessage_contact.classList.remove("hidden")
  }
})
//contact form ends