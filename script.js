// Toggle the menu and manage the active state
function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuIcon = document.getElementById("menu-icon");

  // Toggle the active class on the menu
  menu.classList.toggle("active");

  // Toggle the no-scroll class on the body
  if (menu.classList.contains("active")) {
    document.body.classList.add("no-scroll");
    menuIcon.src = "./images/icon-close.svg";
    menuIcon.alt = "Close menu";
  } else {
    document.body.classList.remove("no-scroll");
    menuIcon.src = "./images/icon-hamburger.svg";
    menuIcon.alt = "Open menu";
  }
}

// Add active class to clicked menu link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'active' class from all links
    document.querySelectorAll('.menu a').forEach(item => {
      item.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
