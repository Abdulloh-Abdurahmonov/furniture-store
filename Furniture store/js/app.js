const navItems = document.querySelectorAll(".nav-list-link");
const input = document.querySelector("#emailInput");

function clearActive() {
  navItems.forEach((item) => {
    item.classList.remove("active-nav-link");
  });
}
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    clearActive();
    item.classList.add("active-nav-link");
  });
});

input.addEventListener("input", () => {
  inputVal = input.value.trim();
  if (inputVal.search("@gmail.com") !== -1) {
    input.classList.add("input_true");
    input.classList.remove("input_error");
  } else {
    input.classList.remove("input_true");
    input.classList.add("input_error");
  }
});
