document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      const spanovi = document.querySelector("#Spanovi");
      if (spanovi) {
        spanovi.style.display = "none";
        window.removeEventListener("scroll", arguments.callee);
      }
    });
  });
  