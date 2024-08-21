class Scrollsuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }

    this.scrollLinks = this.scrollLinks.bind(this);
  }

  scrollLinks(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addlinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollLinks);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addlinkEvent();
    }

    return this;
  }
}

export default Scrollsuave;
