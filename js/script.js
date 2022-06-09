// !!! Initialize Swiper
  let swiper = new Swiper(".shop-container", {
      spaceBetween: 32,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   !!! Info Accordion
let accordionItems = document.querySelectorAll(".info-accordion-item")

accordionItems.forEach(item => {
    let acoordionHeader = item.querySelector('.info-accordion-header')
    acoordionHeader.addEventListener("click", () => {
        let openItem = document.querySelector(".accordion-open")
        toggleItem(item)
        if(openItem && openItem!== item) {
            toggleItem(openItem)
        }
    })
})

let toggleItem =(item) =>{
    let accordionContent = item.querySelector('.info-accordion-content')

    if(item.classList.contains("accordion-open")){
        accordionContent.removeAttribute("style")
        item.classList.remove("accordion-open")
    } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px"
    item.classList.add("accordion-open")
    }
}
// !!! Carousel
let data = [
  {
      id: 1,
      imageUrl: 'https://lebonnet.com/wp-content/uploads/lebonnet-campaign34000.jpg',
      title: 'What to Wear This  Bank Holiday?',
      url: 'https://www.google.com/search?q=What+to+Wear+This+Bank+Holiday+%3F&oq=What+to+Wear+This++Bank+Holiday+%3F&aqs=chrome..69i57j33i160l5j33i22i29i30l4.3258j0j4&sourceid=chrome&ie=UTF-8',
  },
  {
      id: 2,
      imageUrl: 'https://lebonnet.com/wp-content/uploads/fss_lebonnet_sweater_03-2048x1152.jpg',
      title: 'The Woodhouse Spring Lookbook',
      url: 'https://www.google.com/search?q=The+Woodhouse+Spring+Lookbook&oq=The+Woodhouse+Spring+Lookbook&aqs=chrome..69i57j33i160l2.455j0j9&sourceid=chrome&ie=UTF-8'
  },
  {
      id: 3,
      imageUrl: 'https://lebonnet.com/wp-content/uploads/resort-banners-website-final10-2048x1152.jpg',
      title: 'Sed ut perspiciatis sit unde omnis iste  natus error sit ',
      url: 'https://www.google.com/search?q=The+Woodhouse+Spring+Lookbook&oq=The+Woodhouse+Spring+Lookbook&aqs=chrome..69i57j33i160l2.455j0j9&sourceid=chrome&ie=UTF-8'
  },
  {
      id: 4,
      imageUrl: 'https://lebonnet.com/wp-content/uploads/fss_lebonnet_axelaurejac_march_2022_banners6-2048x1152.jpg',
      title: 'Style File: Four Casual Spring Looks',
      url: 'https://www.google.com/search?q=The+Woodhouse+Spring+Lookbook&oq=The+Woodhouse+Spring+Lookbook&aqs=chrome..69i57j33i160l2.455j0j9&sourceid=chrome&ie=UTF-8'
  },
  {
      id: 5,
      imageUrl: 'https://lebonnet.com/wp-content/uploads/lebonnet_giftcard-banner-2048x1152.jpg',
      title: 'How to Wear: The Beanie Hat-Autumn Winter 2021',
      url: 'https://www.google.com/search?q=The+Woodhouse+Spring+Lookbook&oq=The+Woodhouse+Spring+Lookbook&aqs=chrome..69i57j33i160l2.455j0j9&sourceid=chrome&ie=UTF-8'
  },
];

let arrowLeft = document.getElementById ('arrow-left');
let arrowRight = document.getElementById ('arrow-right');
let sliderContainer = document.getElementById ('slider');
let dotsList = document.getElementsByClassName ('dot');

let sliderIndex = 0;

function createATag (item) {
  let aTag = document.createElement('a');
  aTag.setAttribute('href', item.url);
  aTag.classList.add('slider-a');
  aTag.setAttribute("target", "_blank");

  return aTag;
}

function createImgTag(item) {
  // let imgTag = document.body.style.backgroundImage = 'url(' + item.imageUrl + ')';
  sliderContainer.style.backgroundImage = 'url('+ item.imageUrl +')';
  sliderContainer.style.backgroundRepeat = "no-repeat";
  sliderContainer.style.backgroundSize = "cover";
}


function createH2Tag (item) {
  let h2Tag = document.createElement('a');
  h2Tag.setAttribute.href = item.url;
  h2Tag.classList.add('slider-title');
  h2Tag.append(item.title);

  return h2Tag;
}

function createDots() {
  let dots = document.createElement('div');
  dots.classList.add('dots');

  data.forEach((element) => {
      let dot = document.createElement('div');
      dot.classList.add('dot');
      dot.setAttribute('data-id', element.id-1);

      dot.onclick = () => {
          let id = event.target.getAttribute('data-id');
          sliderIndex = id;
          setSlider();
      }
      dots.appendChild(dot);
  })
  return dots;
}

function setSlider() {
  sliderContainer.innerText = '';
  createImgTag(data[sliderIndex]);
  let sliderItem = createATag (data[sliderIndex]);
  let title = createH2Tag (data[sliderIndex]);
  let dots = createDots();
  sliderItem.appendChild(title);
  sliderContainer.appendChild(sliderItem);
  sliderContainer.appendChild(dots);
  currentDotActive();
  
}

function currentDotActive () {
  dotsList[sliderIndex].classList.add('active')
}

function arrowLeftClick () {
  if (sliderIndex == 0) {
      sliderIndex = data.length;
   }
  sliderIndex--;
  setSlider();
}

function arrowRightClick () {   
  if(sliderIndex == data.length-1) {
      sliderIndex = -1;
  }
  sliderIndex++;
  setSlider();
}

arrowLeft.addEventListener('click', arrowLeftClick)
arrowRight.addEventListener('click', arrowRightClick)

document.addEventListener('keydown', function(event) {
  if (event.keyboard == 37) {
      arrowLeftClick();
  } else if (event.keyCode == 39) {
      arrowRightClick();
  }
})

setInterval( () => {
  arrowRightClick ();
}, 4000);


setSlider();


// !!! Form & Validation
document.getElementById('registration').addEventListener('submit', function(event){
  event.preventDefault();

  let errors = {};
  let form = event.target;
  
  //username
  let username = document.querySelector('[name = "username"]').value;

  if (username.length < 4 || username == '') {
      errors.username = 'Username must be at least 4 characters'
  }

  //password
  let password = document.querySelector('[name = "password"]').value;
  let password2 = document.querySelector('[name = "password2"]').value;

  if (password == '' || password != password2 ) {
      errors.password = "Password can not be empty";
      errors.password2 = "Password don't match"
  }

  //checkbox
  let agree = document.querySelector('[name = "agree"]').checked;
  if (!agree) {
      errors.agree = "You must agree our terms and conditions";
  }

  //radio
  let age = false;
  form.querySelectorAll('[name = "age"]').forEach(element => {
      if (element.checked) {
          age = true;
      }
  })    
  
  if (!age) {
      errors.age = "Please select your age";
  }

  for (let  item in errors) {
      let errorSpan = document.getElementById('error_' + item);
      errorSpan.innerText = '';
      if (errorSpan) {
          errorSpan.innerText = errors[item];
      } 
  }

  
  if (Object.keys(errors).length == 0) {
      // form.submit();
      let h1Tag =document.createElement('h1');
      h1Tag.innerHTML = "Hello, "+username + "I wish you the best day!";
      form.appendChild(h1Tag);
  }
});

let toggled = document.getElementById('toggleicon');
let toggled2 = document.getElementById('toggleicon2');
showHidePassword = () => {
  if (password.type == 'password') {
      password.setAttribute('type', 'text');
      password2.setAttribute('type', 'text');
      toggled.classList.remove('fa-eye-slash')
      toggled.classList.add('fa-eye');
      toggled2.classList.remove('fa-eye-slash')
      toggled2.classList.add('fa-eye');
  } else {
      toggled.classList.add('fa-eye-slash');
      toggled2.classList.add('fa-eye-slash');
      password.setAttribute('type', 'password');
      password2.setAttribute('type', 'password');
  }
}
toggled.addEventListener('click', showHidePassword);
toggled2.addEventListener('click', showHidePassword);

//email validation 
function validateEmail() {
  let emailField = document.getElementById('email').value;
  let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let span = document.getElementById('error_email');

  if (emailField.match(emailStructure)) {
      span.innerHTML = "Your email address is valid";
      span.style.color = 'green';
  } else {
      span.innerHTML = "Your email address is invalid";
      span.style.color = 'red';
  }
}

// User
let currentPage = 1;
let totalPages;

function getUsers(page) {
    fetch ('https://reqres.in/api/users?page='+ page, {
        method: 'GET'
    })
    .then (function(response) {
        if (response.status !== 200) {
            throw response.status;
        }
        return response.json();
    })

    .then (function(responseData) {
        let fragment = document.createDocumentFragment();
        responseData.data.forEach( item => {
            let li = document.createElement('li');
            li.classList.add("li-user");

            let emailUser = document.createElement('p');
            emailUser.textContent = item.email;

            let imgUser = document.createElement('img');
            imgUser.src = item.avatar;
            imgUser.classList.add('img-user');

            li.appendChild(imgUser);
            li.appendChild(emailUser);

            fragment.appendChild(li);
        });

        document.getElementById('ul-user').innerHTML = ' ';
        document.getElementById('ul-user').appendChild (fragment);

        totalPages = responseData.total_pages;
    })

    .catch (function(error){
        if (error ==404) {
            let p = document.createElement("p");
            p.textContent= "Server error 404";
            document.getElementById("div-user").appendChild(p);
        } else {
            console.log("Page Not Found");
        }
    })
}

document.getElementById("loadprev").addEventListener('click', function() {
    if (currentPage == 1) {
        return
    }
    currentPage --;
    getUsers(currentPage);
})

document.getElementById("loadmore").addEventListener('click', function() {
    if (currentPage == totalPages) {
        return;
    }
    currentPage ++;
    getUsers(currentPage);
})

getUsers(currentPage);


// Burger
(function() {
  var body = document.getElementById("nav-menu");
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();