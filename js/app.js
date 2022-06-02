
// to append image to the page
const imgElem = document.createElement("img");
imgElem.src = "image/go.JPG";
imgElem.setAttribute("style", "width: 50%;");

const main = document.querySelector(".main__hero");
main.appendChild(imgElem)

// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}


function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Run
showTime();

const navUl = document.querySelector("#navbar__list");// empty list 
 const menuSections = [...document.querySelectorAll("section")]; // adding arrays to the section
 let menuItems = menuSections.length;// The length of the array which is four
 
 // let us build the nav now
 
 const listNav = () => {
     // adding items to the nav list through function
     for (menuSection of menuSections) {
         navmenuSectionName = menuSection.getAttribute("data-nav");
         navmenuSectionLink = menuSection.getAttribute("id");
         menuListItem = document.createElement("li");
         menuListItem.style.padding= "2px 3px";
         menuListItem.innerHTML = `<a class='menu__link' href='#${navmenuSectionLink}'>${navmenuSectionName}</a>`;
         navUl.appendChild(menuListItem);
     }
 };
 
 // the below code will add active to the section when near the viewport. 
 //  To check whether section is near the viewport
 const sectionInViewport = (view) => {
 let sectionxy = view.getBoundingClientRect();
 return sectionxy.top <= 150 && sectionxy.bottom >= 150;
 };
 const addActiveClass = () => {
     for (menuSection of menuSections) {
         if (sectionInViewport(menuSection)) {
             if (!menuSection.classList.contains("your-active-class")) {
                 menuSection.classList.add("your-active-class");
             }
         } else {
             menuSection.classList.remove("your-active-class");
         }
     }
 };
 
 // Scroll smoothly to section on anchor click
 
 const smoothScroll = () => {
     document.querySelectorAll(".menu__link").forEach((anchor) => {
         //  selecting the class=".menu__link"
         anchor.addEventListener("click", function (e) {
             e.preventDefault();
             document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                 behavior: "smooth",
             });
         });
     });
 };
 // The function end
 // time to build the main menu
 
 listNav();
 
 // scroll to section via click on the link
 
 smoothScroll();
 
 // section set to active
 
 document.addEventListener("scroll", addActiveClass);
 
 // The assignment was possible through watching different youtube videos and thanks to Sharynne  frontend session lead for the bonus session and my friend Damilola Ayodele FEND that also help to explain better.
 