// Let's grab the elements needed from the HTML:
const profilePic = document.querySelector(".profile-pic")
const openMenu = document.querySelector("#open-menu")
const nav = document.querySelector("#nav")
const exitMenu = document.querySelector("#exit-menu")
const navLinks = document.querySelectorAll(".nav--side-menu-list")
const getInTouch = document.querySelector("#get-in-touch")
const contactLink = document.querySelector("#contact-link")
const contactLinkNav = document.querySelector("#contact-link-nav")
const contactModal = document.querySelector(".contact--modal")
const modalInner = document.querySelector("#modal-inner")
const modalCloseBtn = document.querySelector("#modal--close-btn")

// We will save the different profile pics in variables
const url1 = "./images/pedro-color-round-1.png"
const url2 = "./images/pedro-color-round-2.png"
const url3 = "./images/pedro-color-round-3.png"
const url4 = "./images/pedro-color-round-4.png"
const url5 = "./images/pedro-color-round-5.png"
// And save them in an array:
const urlArray = [url1, url2, url3, url4, url5]

// The next function returns a random number from 0 to 4 (indexes of our array):
function getRandomNum() {
    return Math.floor(Math.random() * 5)
}

// The next function will
function changePic() {
    let num = getRandomNum()
    if(urlArray[num] !== profilePic.url) {
        profilePic.src = urlArray[num]
    }
}

// The next 2 event listener will call the changePic function on mousemovement:
profilePic.addEventListener("mouseover", changePic)
profilePic.addEventListener("mouseout", changePic)

// Let's create click event listeners for the menu buttons:
openMenu.addEventListener("click", () => {
    nav.classList.add("open-nav")
    
})
exitMenu.addEventListener("click", () => {
    nav.classList.remove("open-nav")
    
})

// Let's add a click event listener to all the nav links that removes the nav-open class
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove("open-nav")
    })
})

// If we click the contact link a modal will open with my contact details:
contactLink.addEventListener("click", () => {
    contactModal.style.display = "block"
})
contactLinkNav.addEventListener("click", () => {
    contactModal.style.display = "block"
})
getInTouch.addEventListener("click", () => {
    contactModal.style.display = "block"
})

// Let's create an event listener for the document so we can close the modal by clicking outside of the modal:
// document.addEventListener("click", (e)=> {
    
//     if((contactModal.style.display === "block") && (e.target.id !== "modal-inner") && (e.target.id !== "contact-link-nav") && (e.target.id !== "contact-link")  && (e.target.id !== "get-in-touch")){
//         contactModal.style.display = "none"
//     }
// })

modalCloseBtn.addEventListener("click", () => {
    contactModal.style.display = "none"
})