document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;   // e.g. "/portfolio"
  const sectorLinks = document.querySelectorAll(".sector-item a");

  sectorLinks.forEach(link => {
    const li = link.parentElement;
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
});
