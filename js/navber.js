/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
// searchBtn.addEventListener('click', () =>{
//    search.classList.add('show-search')
// })

/* Search hidden */
// searchClose.addEventListener('click', () =>{
//    search.classList.remove('show-search')
// })


// for mobile device search icon toggle

function searchToggle() {
    const searchIcon = document.getElementById("search-btn").style.display='none';
    const navToggle = document.getElementById("nav-toggle").style.display='none';
    const activeImage = document.getElementById("activeImage").style.display='none';
    const mobileSearchbar = document.getElementById("mobile-searchbar").style.display='block';
}
function backToggle() {
    const mobileSearchbar = document.getElementById("mobile-searchbar").style.display='none';
    const searchIcon = document.getElementById("search-btn").style.display='block';
    const navToggle = document.getElementById("nav-toggle").style.display='block';
    const activeImage = document.getElementById("activeImage").style.display='block';
}

document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('click', function(e) {
        var target = e.target.closest('.aiz-side-nav-item');

        // Check if the clicked element is a dropdown toggle
        if (target) {
            target.classList.toggle('active'); // Toggle active class on the clicked item
            var submenu = target.querySelector('.side-dropdown');

            // Toggle the visibility of the dropdown menu
            if (submenu) {
                submenu.classList.toggle('show');
            }
        }
    });
});


