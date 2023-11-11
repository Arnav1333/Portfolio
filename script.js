function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
}
function toggleMenu() {
    let nav = document.querySelector('.nav-link');
    nav.classList.toggle('active');
}
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });