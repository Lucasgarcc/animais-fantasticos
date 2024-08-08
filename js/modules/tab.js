const section = document.querySelectorAll("#animais section");

// selecionando a secction e addicionando a class no data-anime
// index % 2 === 0 ? (index += 1) : (div.dataset.anime = "show-down")
section.forEach((div, index) => {
  if (index % 2 === 0) {
    index += 1;
  } else {
    div.dataset.anime = "show-down";
  }
  div.classList.add(div.dataset.anime);
});

// TABMENU & ANIMAL LISTA
function initTab() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });
    const animacaoTab = tabContent[index].dataset.anima;
    tabContent[index].classList.add("ativo", animacaoTab);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    // previne e deixa item ativo

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

export default initTab();
