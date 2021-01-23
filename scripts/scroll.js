function initScroll() {
  const toggles = document.querySelectorAll('.scroll-toggle'),
    sections = document.querySelectorAll('section'),
    sectionLibrary = {};

  // collect sections
  for (const section of sections) {
    sectionLibrary[section.id] = section;
  }

  for (const toggle of toggles) {
    const { section } = toggle.dataset,
      sectionElm = sectionLibrary[`section-${section}`];

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: sectionElm.offsetTop + 1,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
}