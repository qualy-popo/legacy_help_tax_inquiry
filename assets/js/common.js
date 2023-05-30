const AccorTitles = Array.from(document.querySelectorAll(".accor_item"));

AccorTitles.forEach(function (title) {
  title.addEventListener("click", function () {
    this.classList.toggle("active_item");
  });
});
