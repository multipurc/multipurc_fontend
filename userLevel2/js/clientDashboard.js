// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const backIcon = document.querySelector('.back-icon');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})

backIcon.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// end sidebar

// for dashboard item click

function showLevel2Dashboard() {
	document.getElementById('userLevel2-dashboard').style.display = 'block';
	document.getElementById('userLevel2-posSystem').style.display = 'none';
}
function showPosSystem() {
	document.getElementById('userLevel2-dashboard').style.display = 'none';
	document.getElementById('userLevel2-posSystem').style.display = 'block';
}



/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		  nav = document.getElementById(navId)
 
	toggle.addEventListener('click', () =>{
		nav.classList.toggle('show-menu')
		toggle.classList.toggle('show-icon')
	})
 }
 
 showMenu('nav-toggle','nav-menu')
 
 
//  FOOD ITEM CARD

function addToCart(button) {
	var foodItem = button.closest('.single-item');
    var addToCartButton = foodItem.querySelector('.add-to-cart-btn');
    var chooseContent = foodItem.querySelector('.choose-content');

    addToCartButton.style.display = 'none';
    chooseContent.style.display = 'block';
}
