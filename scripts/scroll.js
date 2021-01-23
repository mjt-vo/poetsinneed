Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function initScroll() {
  const bodyElm = document.querySelector('body'),
    toggles = document.querySelectorAll('.scroll-toggle'),
    sections = document.querySelectorAll('section'),
    sectionLibrary = {};

  function scrollTo(targetOffset) {
    const initialOffset = bodyElm.scrollTop,
      difference = targetOffset - initialOffset,
      duration = 350,
      increment = 15;

    let counter = 0;

    function animateScroll() {
      counter += increment;
      const value = Math.easeInOutQuad(counter, initialOffset, difference, duration)
      bodyElm.scrollTop = value;
      if (counter < duration) {
        setTimeout(animateScroll, increment);
      }
      else {
        bodyElm.scrollTop = targetOffset;
      }
    }

    animateScroll();
  }

  // collect sections
  for (const section of sections) {
    sectionLibrary[section.id] = section;
  }

  for (const toggle of toggles) {
    const { section } = toggle.dataset,
      sectionElm = sectionLibrary[`section-${section}`];

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      scrollTo(sectionElm.offsetTop + 1);
    });
  }
}