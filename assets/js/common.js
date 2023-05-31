const AccorTitles = Array.from(document.querySelectorAll(".accor_item"));

const AccorContents = Array.from(
  document.querySelectorAll(".accor_item .accor_content")
);

AccorContents.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

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
