/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');
//To not make reflow or repaint 
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
// */
//make the navBar list

//make the navBar list
function createNavBar() {
    //for of loop to loop on sections
    for(const section of sections) {
        //get id & data-nav 
        const sectionsId = section.id //getAttribute('id'); 
        const sectionsData = section.dataset.nav//getAttribute('data-nav')
        //make list item, anchor link
        const navBarList = document.createElement('li');
        const navBarLink = document.createElement('a');
        //anchors, textContent, event, scroll
        navBarLink.href = '#' + sectionsId;
        navBarLink.classList = 'menu__link';
        navBarLink.textContent = sectionsData;
        navBarLink.addEventListener('click', (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth',
            });
        });
        //appendChildren's
        navBarList.appendChild(navBarLink);
        //To avoid reflow append li to fragment
        fragment.appendChild(navBarList);
    }

    navBar.appendChild(fragment);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav 
//Invoke function
createNavBar();

// Add class 'active' to section when near top of viewport
// Scroll to section on link click
window.addEventListener('scroll', function() {
    sections.forEach((section) => {
        // Scroll to anchor ID using scrollTO event
        const sectionOnTop = section.getBoundingClientRect().top;
        //get top
        const minValue = 0;
        const maxValue = 250;
        //add active link 
        const activeLink = document.querySelector(`a[href="#${section.id}"]`);
        //
        if(sectionOnTop > minValue && sectionOnTop < maxValue)
        {
            //add active class and highlight
            section.classList.add('your-active-class');
            //equivalent active
            activeLink.classList.add('active');
        }
        //remove highlight and active anchor
        else {
            //remove your-active-class 
            section.classList.remove('your-active-class');
            //remove active class
            activeLink.classList.remove('active');
        }
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active


