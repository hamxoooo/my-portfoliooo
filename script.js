let menuIcon = document.querySelector("#menu-box");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
ScrollReveal({
  // reset: true,//
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".main_image_container, .services-container, .porfolio-box,   .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .image-container", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });



let typed = new typed (".multiple-text", {
  String: ["Frontend Developer", "Youtuber"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
console.log("typed")
