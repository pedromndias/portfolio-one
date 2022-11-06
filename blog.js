// In this file we only need to have JS for the modal appearance
const contactLink = document.querySelector("#contact-link")
const contactModal = document.querySelector(".contact--modal")

contactLink.addEventListener("click", () => {
    contactModal.style.display = "block"
})
