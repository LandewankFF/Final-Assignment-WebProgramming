// for create humburger menu
const hamburgerIcon = document.getElementById("hamburger-menu");
const menuList = document.getElementById("menu-list");

hamburgerIcon.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

// function emenrgency call
const emergencyCall = document.getElementById("emergencyCall");

if (emergencyCall) {
  emergencyCall.style.cursor = "pointer";
  emergencyCall.addEventListener("click", function () {
    const phoneNumber = "+6282112706323";

    window.location.href = "tel:" + phoneNumber;
  });
}
