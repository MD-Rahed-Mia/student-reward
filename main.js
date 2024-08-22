

//menu btn
const menuBtn = document.querySelector("#menu-btn");

//menu container
const menuContainer = document.querySelector('#menu-container');

//menu icon 
const menuIcon = document.querySelector('#menu-icon');


//setup menu function
function menuAppear() {

    if (menuContainer.classList.contains('right-2')) {
        menuContainer.classList.remove('right-2');
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars');

        document.body.style.maxHeight = "auto";
        document.body.style.overflowY = 'scroll';
    } else {
        menuContainer.classList.add('right-2');
        menuIcon.classList.add('fa-xmark');
        menuIcon.classList.remove('fa-bars');

        document.body.style.maxHeight = "100vh";
        document.body.style.overflow = 'hidden';

    }

}

menuBtn.addEventListener('click', menuAppear)
