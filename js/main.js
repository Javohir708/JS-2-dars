document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('.navbar__link');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });

      targetElement.style.opacity = 0;
      setTimeout(() => {
        targetElement.style.transition = "opacity 0.8s";
        targetElement.style.opacity = 1;
      }, 500);
    });
  });
});
