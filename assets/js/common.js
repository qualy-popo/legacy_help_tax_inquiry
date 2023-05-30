const AccorTitles = Array.from(document.querySelectorAll(".accor_item"));

const removeClassFromOthers = (array, indx) => {
  array.forEach(function (item, index) {
    if (indx !== index) item.classList.remove("active_item");
  });
};

AccorTitles.forEach(function (title, indx) {
  title.addEventListener("click", function () {
    removeClassFromOthers(AccorTitles, indx);
    this.classList.toggle("active_item");
  });
});
