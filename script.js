document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.getElementById('navToggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
});

var previousActiveLinks = [];

function openModal() {
    document.getElementById('contactModal').style.display = 'block';
    previousActiveLinks = Array.from(document.querySelectorAll('.nav-links a.active'));
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function setActiveLink(link) {
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (item) {
        item.classList.remove('active');
    });

    link.classList.add('active');
}

function removeActiveLink() {
    var activeLink = document.querySelector('.nav-links a.active');
    
    if (activeLink) {
        activeLink.classList.remove('active');
    }
    previousActiveLinks.forEach(function (link) {
        link.classList.add('active');
      });
    previousActiveLinks = [];

}

function closeDropdown() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
}
