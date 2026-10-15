(() => {
  const preloader = document.getElementById('preloader');
  const nav = document.getElementById('siteNav');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.addEventListener('load', () => {
    window.setTimeout(() => preloader?.classList.add('hide'), 350);
  });
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  // Scroll-aware translucent header.
  const updateNav = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 32 || document.body.classList.contains('products-page') || document.body.classList.contains('about-page'));
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // Close mobile navigation after choosing a page/section.
  document.querySelectorAll('#mainNav .nav-link, #mainNav .btn-nav').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('mainNav');
      if (collapse?.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    });
  });

  // Staggered blur + lift reveal on scroll.
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = [...entry.target.parentElement.children].filter(el => el.classList.contains('reveal'));
          entry.target.style.setProperty('--delay', `${Math.min(siblings.indexOf(entry.target), 5) * 90}ms`);
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -35px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('is-visible'));

  // Product filters on the Products page.
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => item.classList.toggle('active', item === button));
      productItems.forEach((item, index) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !show);
        if (show) {
          item.classList.remove('is-visible');
          if (!reduceMotion) setTimeout(() => item.classList.add('is-visible'), index * 45);
          else item.classList.add('is-visible');
        }
      });
    });
  });

  // Gentle pointer movement on desktop only.
  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.teaser-card, .catalog-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `translateY(-4px) rotateX(${(-y * 2).toFixed(2)}deg) rotateY(${(x * 2).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => card.style.transform = '');
    });
  }

  // Video fallback: keep poster visible if local video cannot play.
  document.querySelectorAll('.hero-video').forEach(video => {
    video.play().catch(() => { video.controls = false; });
  });
})();