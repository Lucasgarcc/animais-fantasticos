// export default function initScroll...

function initScrollsuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  function scrollLinks(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollLinks);
  });
}

export default initScrollsuave();
