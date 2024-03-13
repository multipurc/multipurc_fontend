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
 

// for card item popup
var wrapper = document.querySelector(".product-wrapper");
var close_btns = document.querySelectorAll(".close_btn");

function showPopupContent() {
	wrapper.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrapper.classList.remove("active");
	});
});

// variation image select
function showImageOne(){
	document.getElementById('image1').style.display = 'block';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'none';
}
function showImageTwo(){
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'block';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'none';
}
function showImageThree(){
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'block';
	document.getElementById('image4').style.display = 'none';
}
function showImageFour(){
	document.getElementById('image1').style.display = 'none';
	document.getElementById('image2').style.display = 'none';
	document.getElementById('image3').style.display = 'none';
	document.getElementById('image4').style.display = 'block';
}
//  FOOD ITEM CARD

function addToCart() {
	var wrappers = document.querySelector(".product-wrapper");
			wrappers.classList.remove("active");

			const toastContainer = document.getElementById('toast-container');
			const toastElement = document.createElement('div');
			toastElement.classList.add('toast');
			toastElement.innerText = 'Successfully Add to Cart !';
			toastContainer.appendChild(toastElement);
			toastContainer.style.display = 'block';
		
			setTimeout(() => {
				toastContainer.style.display = 'none';
				toastContainer.removeChild(toastElement);
			}, 3000); 

}

var wrappers = document.querySelector(".product-wrappers");
var close_btns = document.querySelectorAll(".close_btn");

function showOrderPopup() {
	wrappers.classList.add("active");
}
close_btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		wrappers.classList.remove("active");
	});
});
function printInvoice() {
	var wrappers = document.querySelector(".product-wrappers");

			const toastContainer = document.getElementById('toast-container');
			const toastElement = document.createElement('div');
			toastElement.classList.add('toast');
			toastElement.innerText = 'Place Order Successfully !';
			toastContainer.appendChild(toastElement);
			toastContainer.style.display = 'block';
		
			setTimeout(() => {
				toastContainer.style.display = 'none';
				toastContainer.removeChild(toastElement);
			}, 3000); 

			wrappers.classList.remove("active");
			// invoice print
			
      // Get the content to be printed (in this case, the div with id "invoiceContent")
        const element = document.getElementById('invoiceContent');

        // Options for pdf generation
        const options = {
            margin: 10,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Generate the PDF
        html2pdf(element, options);

}
// function printInvoice() {
//     // Display the toast
//     const toastContainer = document.getElementById('toast-container');
//     const toastElement = document.createElement('div');
//     toastElement.classList.add('toast');
//     toastElement.innerText = 'Place Order Successfully!';
//     toastContainer.appendChild(toastElement);
//     toastContainer.style.display = 'block';

//     setTimeout(() => {
//         toastContainer.style.display = 'none';
//         toastContainer.removeChild(toastElement);
//     }, 3000);

//     // Generate the PDF after a delay
//     setTimeout(() => {
//         // Get the content to be printed
//         const element = document.getElementById('invoiceContent');

//         // Options for pdf generation
//         const options = {
//             margin: 10,
//             filename: 'invoice.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//         };

//         // Generate the PDF
//         html2pdf(element, options);
//     }, 1000); // Adjust the delay as needed
// }
