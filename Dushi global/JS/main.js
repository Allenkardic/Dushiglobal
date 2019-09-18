// navbar toggle
var mainNav = document.getElementById("js-menu");
var navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
// End of nav toggle

// Transparent navbar
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.opacity = 0.9;
  } else {
    document.querySelector(".navbar").style.opacity = 1;
  }
});

// smooth scrolly
$(".navbar a, .nav-links, .btn, .btn-us").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// images mouseover effects
var imageEffects = document.querySelectorAll(".image-class");
for (i = 0; i < imageEffects.length; i++) {
  imageEffects[i].addEventListener("mouseover", function() {
    this.style.opacity = "0.8";
  });
  imageEffects[i].addEventListener("mouseout", function() {
    this.style.opacity = "1";
  });
}
