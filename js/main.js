const burger = document.querySelector('nav .menu');
  const mobileNav = document.querySelector('.mobile-nav');
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  const closeBtn = document.querySelector('.mobile-nav .close');
    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });


  document.querySelectorAll('.mobile-nav .links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.mobile-nav').classList.remove('active');
    });
  });

  let scrollTimeout;
  function animateOnScroll() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const triggerBottom = window.innerHeight * 0.85;
      
      elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          el.classList.add('show');
        }
      });
    });
  }

  window.addEventListener('scroll', animateOnScroll, { passive: true });
  window.addEventListener('load', animateOnScroll);

  let translations = {};
  let currentLang = 'en';

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar'
      ? "'Cairo', 'poppins', sans-serif"
      : "'poppins', sans-serif";
    const t = translations[lang];
    if (!t) return;

    // Nav links (desktop)
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length >= 6) {
      navLinks[0].textContent = t.nav.home;
      navLinks[1].textContent = t.nav.features;
      navLinks[2].textContent = t.nav.why;
      navLinks[3].textContent = t.nav.pricing;
      navLinks[4].textContent = t.nav.contact;
      navLinks[5].textContent = t.nav.signin;
    }

    // Nav links (mobile)
    const mobileLinks = document.querySelectorAll('.mobile-nav .links a');
    if (mobileLinks.length >= 6) {
      mobileLinks[0].textContent = t.nav.home;
      mobileLinks[1].textContent = t.nav.features;
      mobileLinks[2].textContent = t.nav.why;
      mobileLinks[3].textContent = t.nav.pricing;
      mobileLinks[4].textContent = t.nav.contact;
      mobileLinks[5].textContent = t.nav.signin;
    }

    // Hero section
    const heroContentPs = document.querySelectorAll('.hero-content p');
    if (heroContentPs.length >= 2) {
      heroContentPs[0].textContent = t.hero.badge;
      heroContentPs[1].textContent = t.hero.desc;
    }
    // Fix h1 with span for "Crypto"
    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) {
      // Split the translation at the word "Crypto" (en) or "كريبتو" (ar)
      let h1Text = t.hero.h1;
      let cryptoWord = lang === 'ar' ? 'كريبتو' : 'Crypto';
      if (h1Text.includes(cryptoWord)) {
        const parts = h1Text.split(cryptoWord);
        heroH1.innerHTML = `${parts[0]}<span>${cryptoWord}</span>${parts[1]}`;
      } else {
        heroH1.textContent = h1Text;
      }
    }
    const heroBtns = document.querySelectorAll('.hero-btns a');
    if (heroBtns.length >= 2) {
      if (heroBtns[0].querySelector('i')) {
        heroBtns[0].innerHTML = `<i class='bx bx-play'></i>${t.hero.how}`;
      } else {
        heroBtns[0].textContent = t.hero.how;
      }
      heroBtns[1].textContent = t.hero.white;
    }

    // Features section
    const featuresH2 = document.querySelector('.features h2');
    if (featuresH2) featuresH2.textContent = t.features.title;
    const features = document.querySelectorAll('.feature-item');
    if (features.length >= 3) {
      features[0].querySelector('h3').textContent = t.features.wallet;
      features[0].querySelector('p').textContent = t.features.wallet_desc;
      features[1].querySelector('h3').textContent = t.features.instant;
      features[1].querySelector('p').textContent = t.features.instant_desc;
      features[2].querySelector('h3').textContent = t.features.support;
      features[2].querySelector('p').textContent = t.features.support_desc;
    }

    // Why section
    const whyH2 = document.querySelector('.cards-section h2');
    if (whyH2) whyH2.textContent = t.why.title;
    const cards = document.querySelectorAll('.cards-list .card');
    if (cards.length >= 3) {
      cards[0].querySelector('h3').textContent = t.why.trusted;
      cards[0].querySelector('p').textContent = t.why.trusted_desc;
      cards[1].querySelector('h3').textContent = t.why.analytics;
      cards[1].querySelector('p').textContent = t.why.analytics_desc;
      cards[2].querySelector('h3').textContent = t.why.dedicated;
      cards[2].querySelector('p').textContent = t.why.dedicated_desc;
    }

    // Pricing section
    const pricingH2 = document.querySelector('.pricing h2');
    if (pricingH2) pricingH2.textContent = t.pricing.title;
    const pricingItems = document.querySelectorAll('.pricing-item');
    if (pricingItems.length >= 2) {
      pricingItems[0].querySelector('h3').textContent = t.pricing.basic;
      pricingItems[0].querySelector('p').textContent = t.pricing.free;
      const basicLis = pricingItems[0].querySelectorAll('ul li');
      if (basicLis.length >= 2) {
        basicLis[0].textContent = t.pricing.buy;
        basicLis[1].textContent = t.pricing.basic_support;
      }
      pricingItems[1].querySelector('h3').textContent = t.pricing.pro;
      pricingItems[1].querySelector('p').textContent = t.pricing.pro_price;
      const proLis = pricingItems[1].querySelectorAll('ul li');
      if (proLis.length >= 3) {
        proLis[0].textContent = t.pricing.adv_trading;
        proLis[1].textContent = t.pricing.priority;
        proLis[2].textContent = t.pricing.dashboard;
      }
    }

    // Contact section
    const contactH2 = document.querySelector('.contact h2');
    if (contactH2) contactH2.textContent = t.contact.title;
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      const inputs = contactForm.querySelectorAll('input');
      if (inputs.length >= 2) {
        inputs[0].placeholder = t.contact.name;
        inputs[1].placeholder = t.contact.email;
      }
      const textarea = contactForm.querySelector('textarea');
      if (textarea) textarea.placeholder = t.contact.message;
      const button = contactForm.querySelector('button');
      if (button) button.textContent = t.contact.send;
    }

    // Footer
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 5) {
      footerLinks[0].textContent = t.footer.home;
      footerLinks[1].textContent = t.footer.features;
      footerLinks[2].textContent = t.footer.why;
      footerLinks[3].textContent = t.footer.pricing;
      footerLinks[4].textContent = t.footer.contact;
    }
    const footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) footerCopy.innerHTML = t.footer.copy;

    // Flag logic: show only the other flag in dropdown
    const flagCurrent = document.getElementById('flag-current');
    const flagEn = document.getElementById('flag-en');
    const flagAr = document.getElementById('flag-ar');
    if (flagCurrent && flagEn && flagAr) {
      // Always remove previous click handlers to avoid stacking
      flagEn.onclick = null;
      flagAr.onclick = null;
      if (lang === 'ar') {
        flagCurrent.src = "imgs/sa.png";
        flagCurrent.alt = "العربية";
        flagAr.style.display = "none";
        flagEn.style.display = "inline-block";
        flagEn.onclick = () => {
          setLang('en');
          // Re-setup the switcher after changing language
          setupLangSwitcher();
        };
      } else {
        flagCurrent.src = "imgs/gb.png";
        flagCurrent.alt = "English";
        flagAr.style.display = "inline-block";
        flagEn.style.display = "none";
        flagAr.onclick = () => {
          setLang('ar');
          setupLangSwitcher();
        };
      }
    }
  }

  async function loadTranslations() {
    try {
      const res = await fetch('translations.json');
      translations = await res.json();
      setLang(currentLang);
    } catch (e) {
      console.error('Failed to load translations:', e);
    }
  }

  window.addEventListener('DOMContentLoaded', loadTranslations);

