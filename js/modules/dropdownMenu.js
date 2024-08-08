import outsideClick from "./outsideclick.js";

function initDropDown() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      this.classList.add("active");
      console.log(this);
    }, 100);
    outsideClick(this, ["toucstart", "click"], () => {
      this.classList.remove("active");
    });
  }

  // touchstart serve para mobile

  // usando o ['touchstart', 'click'] forEach encadeado para se otimizar e usar duas function callbacks.

  dropdownMenu.forEach((menu) => {
    ["toucstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}

export default initDropDown();
