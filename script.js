document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const header = document.querySelector("#header");
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.style.background = window.scrollY > 40 ? "rgba(13,25,68,.96)" : "transparent";
    header.style.position = window.scrollY > 40 ? "fixed" : "absolute";
    header.style.backdropFilter = window.scrollY > 40 ? "blur(12px)" : "none";
  }, { passive: true });

  const launchDialog = document.querySelector("#launch-dialog");
  const closeDialog = () => launchDialog.close();

  document.querySelectorAll(".download-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      mobileMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      launchDialog.showModal();
    });
  });

  launchDialog.querySelector(".dialog-close").addEventListener("click", closeDialog);
  launchDialog.querySelector(".dialog-confirm").addEventListener("click", closeDialog);
  launchDialog.addEventListener("click", (event) => {
    if (event.target === launchDialog) closeDialog();
  });
});
