document.addEventListener('DOMContentLoaded', function () {
  /*top-menu*/

  //start-add-class-top-menu
  //  document.querySelectorAll(".harmony-menu li").forEach(el => el.classList.add("harmony-menu-li"));
  //  document.querySelectorAll(".harmony-menu li a").forEach(el => el.classList.add("harmony-menu-a"));
  // document.querySelectorAll(".harmony-menu li.harmony-menu-li>ul").forEach(el => el.classList.add("harmony-menu-li-ul"));

  document
    .querySelectorAll('.harmony-menu li a img')
    .forEach((el) => el.classList.add('harmony-menu-a-img'));
  document
    .querySelectorAll('.harmony-menu li a span')
    .forEach((el) => el.classList.add('harmony-menu-a-span'));
  //end-add-class-top-menu

  //start-add-class-mobile-menu
  document
    .querySelectorAll('.harmony-mobile-menu li')
    .forEach((el) => el.classList.add('mobile-menu-li'));
  document
    .querySelectorAll('.harmony-mobile-menu li.mobile-menu-li a')
    .forEach((el) => el.classList.add('mobile-menu-a'));
  document
    .querySelectorAll('.harmony-mobile-menu li.mobile-menu-li>ul')
    .forEach((el) => el.classList.add('mobile-menu-li-ul'));
  //end-add-class-mobile-menu

  //start-add-class-horizontal-menu
  document
    .querySelectorAll('.harmony-menu-horizontal li')
    .forEach((el) => el.classList.add('menu-horizontal-li'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li a')
    .forEach((el) => el.classList.add('menu-horizontal-a'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li a span')
    .forEach((el) => el.classList.add('harmony-menu-a-span'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li a img')
    .forEach((el) => el.classList.add('harmony-menu-a-img'));
  document
    .querySelectorAll('.harmony-menu-horizontal>li.menu-horizontal-li>ul')
    .forEach((el) => el.classList.add('menu-horizontal-li-ul'));
  document
    .querySelectorAll('.harmony-menu-horizontal li.menu-horizontal-li>ul ul')
    .forEach((el) => el.classList.add('menu-horizontal-li-ul-ul'));

  document
    .querySelectorAll('.menu-horizontal-li li.menu-horizontal-li')
    .forEach((el) => {
      if (el.querySelector('ul')) {
        let a = el.querySelector('a');
        if (a) a.classList.add('h-header-a');
      } else {
        let a = el.querySelector('a');
        if (a) a.classList.add('h-hover-a');
      }
    });

    // document
    //   .querySelectorAll('.harmony-menu li')
    //   .forEach((el) => el.classList.add('harmony-menu-li'));
    // document
    //   .querySelectorAll('.harmony-menu li a')
    //   .forEach((el) => el.classList.add('harmony-menu-a'));
    // document
    //   .querySelectorAll('.harmony-menu li.harmony-menu-li>ul')
    //   .forEach((el) => el.classList.add('harmony-menu-li-ul'));
  //end-add-class-horizontal-menu



  //hide teb menu

  const rightLinks = document.querySelectorAll('.menu_tab a');
  const lis = document.querySelectorAll('.harmony-menu-horizontal.tab_model > li');

  // اول همه li ها رو مخفی می‌کنیم
  lis.forEach((li) => (li.style.display = 'none'));

  // نمایش li اول به صورت پیش‌فرض
  if (lis[0]) lis[0].style.display = 'block';

  // اضافه کردن کلاس active به لینک اول به صورت پیش‌فرض
  if (rightLinks[0]) rightLinks[0].classList.add('active');

  // وقتی روی هر لینک سمت راست میریم
  rightLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      // همه li ها مخفی بشن
      lis.forEach((li) => (li.style.display = 'none'));
      // فقط li متناظر نمایش داده بشه
      if (lis[index]) lis[index].style.display = 'block';

      // حذف کلاس active از همه لینک‌ها
      rightLinks.forEach((l) => l.classList.remove('active'));
      // اضافه کردن کلاس active به لینک فعلی
      link.classList.add('active');
    });
  });


  //start-add-class-mobile-menu-accordion
  document
    .querySelectorAll('.harmony-mobile-menu-accordion li')
    .forEach((el) => el.classList.add('mobile-menu-li'));
  document
    .querySelectorAll('.harmony-mobile-menu-accordion li.mobile-menu-li a')
    .forEach((el) => el.classList.add('mobile-menu-a'));
  document
    .querySelectorAll('.harmony-mobile-menu-accordion li.mobile-menu-li>ul')
    .forEach((el) => el.classList.add('mobile-menu-li-ul'));
  //end-add-class-mobile-menu-accordion

  //start-add-menu-bar
  document
    .querySelectorAll('.harmony-menu>li.harmony-menu-li')
    .forEach((el) => {
      if (el.querySelector('ul')) {
        let a = el.querySelector('a');
        if (a)
          a.insertAdjacentHTML('beforeend', '<span class="angle-down"></span>');
      }
    });

  // start-add-menu-horizontal
  document.querySelectorAll('.menu-horizontal-a.h-header-a').forEach((a) => {
    a.insertAdjacentHTML(
      'beforeend',
      '<span class="angle-left"></span>'
    );
  });

  document.querySelectorAll('.harmony-menu li ul li').forEach((el) => {
    if (el.querySelector('ul')) {
      let a = el.querySelector('a');
      if (a)
        a.insertAdjacentHTML('beforeend', '<span class="angle-left"></span>');
    }
  });
  //end-add-menu-bar

  //start-add-mobile-menu
  document.querySelectorAll('.harmony-mobile-menu li').forEach((el) => {
    if (el.querySelector('ul')) {
      let a = el.querySelector('a');
      if (a)
        a.insertAdjacentHTML('beforeend', '<span class="angle-left"></span>');
    }
  });

  document
    .querySelectorAll('.harmony-mobile-menu-accordion li')
    .forEach((el) => {
      if (el.querySelector('ul')) {
        let a = el.querySelector('a');
        if (a) {
          a.classList.add('add_class');
          a.insertAdjacentHTML('beforeend', '<span class="angle-down"></span>');
        }
      }
    });

  if (document.documentElement.classList.contains('h-ltr')) {
    document.querySelectorAll('.harmony-mobile-menu li>ul').forEach((ul) => {
      ul.insertAdjacentHTML(
        'afterbegin',
        '<li class="menu-mobile-back"><div class="mobile-menu-a harmony-menu-back"><span class="angle-left"></span><span class="harmony-menu-back">Back</span></div></li>'
      );
    });
  } else {
    document.querySelectorAll('.harmony-mobile-menu li>ul').forEach((ul) => {
      ul.insertAdjacentHTML(
        'afterbegin',
        '<li class="menu-mobile-back"><div class="mobile-menu-a harmony-menu-back"><span class="angle-left"></span><span class="harmony-menu-back">برگشت</span></div></li>'
      );
    });
  }
  //end-add-mobile-menu

  /* helper: slideUp / slideDown / slideToggle (شبیه jQuery) */
  function slideUp(el, duration = 400) {
    return new Promise((resolve) => {
      if (!el || window.getComputedStyle(el).display === 'none') {
        resolve();
        return;
      }
      if (el._isSliding) return el._slidingPromise || Promise.resolve();
      el._isSliding = true;

      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
      el.style.transition = `height ${duration}ms ease`;

      requestAnimationFrame(() => {
        el.style.height = '0px';
      });

      el._slidingPromise = new Promise((res) => {
        function done(e) {
          if (e && e.propertyName && e.propertyName !== 'height') return;
          el.style.display = 'none';
          el.style.removeProperty('height');
          el.style.removeProperty('overflow');
          el.style.removeProperty('transition');
          el.removeEventListener('transitionend', done);
          el._isSliding = false;
          el._slidingPromise = null;
          res();
        }
        el.addEventListener('transitionend', done);
        // fallback if transitionend doesn't fire
        setTimeout(() => {
          if (el._isSliding) done();
        }, duration + 50);
      }).then(() => {
        resolve();
      });
    });
  }

  function slideDown(el, duration = 400) {
    return new Promise((resolve) => {
      if (!el || window.getComputedStyle(el).display !== 'none') {
        resolve();
        return;
      }
      if (el._isSliding) return el._slidingPromise || Promise.resolve();
      el._isSliding = true;

      // show element to measure height
      el.style.removeProperty('display');
      let display = window.getComputedStyle(el).display;
      if (display === 'none') display = 'block';
      el.style.display = display;

      const height = el.scrollHeight;
      el.style.height = '0px';
      el.style.overflow = 'hidden';
      el.style.transition = `height ${duration}ms ease`;

      requestAnimationFrame(() => {
        el.style.height = height + 'px';
      });

      el._slidingPromise = new Promise((res) => {
        function done(e) {
          if (e && e.propertyName && e.propertyName !== 'height') return;
          el.style.removeProperty('height');
          el.style.removeProperty('overflow');
          el.style.removeProperty('transition');
          el.removeEventListener('transitionend', done);
          el._isSliding = false;
          el._slidingPromise = null;
          res();
        }
        el.addEventListener('transitionend', done);
        setTimeout(() => {
          if (el._isSliding) done();
        }, duration + 50);
      }).then(() => {
        resolve();
      });
    });
  }

  function slideToggle(el, duration = 400) {
    return window.getComputedStyle(el).display === 'none'
      ? slideDown(el, duration)
      : slideUp(el, duration);
  }

  /*start-mobile-menu-function*/
document.querySelectorAll('.harmony-mobile-menu a').forEach((a) => {
  a.addEventListener('click', function (e) {
    let nextElement = this.nextElementSibling;

    if (nextElement && nextElement.tagName.toLowerCase() === 'ul') {
      e.preventDefault();

      document
        .querySelectorAll('.navbar-menu-mobile')
        .forEach((el) => el.classList.add('Harmony-transform'));

      document
        .querySelectorAll('.menu-mobile')
        .forEach((el) => el.classList.add('Harmony-transform'));

      // دقیقاً مشابه parent().parent()
      let parent1 = this.parentElement;
      let parent2 = parent1 ? parent1.parentElement : null;
      if (parent2) parent2.classList.add('Harmony-transform');

      nextElement.classList.add('show');
    }
  });
});

document.querySelectorAll('.harmony-menu-back').forEach((back) => {
  back.addEventListener('click', function () {
    let menu = this.closest('.mobile-menu-li-ul');
    if (menu) menu.classList.remove('show');

    // مشابه parent().parent('.Harmony-transform')
    let parent1 = menu ? menu.parentElement : null;
    let parent2 = parent1 ? parent1.parentElement : null;

    if (parent2 && parent2.classList.contains('Harmony-transform')) {
      parent2.classList.remove('Harmony-transform');
    }
  });
});


  // accardeon (اکاردئون با انیمیشن نرم — منطق اصلی تغییری نکرد)
 const slideDuration = 400; // شبیه jQuery پیش‌فرض

 document.querySelectorAll('.harmony-mobile-menu-accordion a').forEach((a) => {
   a.addEventListener('click', function (e) {
     var $this = this;
     var $submenu = $this.nextElementSibling;

     if ($submenu && $submenu.tagName.toLowerCase() === 'ul') {
       e.preventDefault();

       var isActive = $this.classList.contains('active');

       $this.classList.toggle('active', !isActive);
       if (isActive) {
         slideUp($submenu, slideDuration);
       } else {
         slideDown($submenu, slideDuration);

         const currentLi = $this.closest('li');
         const siblings = Array.from(currentLi.parentElement.children).filter(
           (li) => li !== currentLi
         );
         siblings.forEach((sib) => {
           sib
             .querySelectorAll('a')
             .forEach((a2) => a2.classList.remove('active'));
           sib.querySelectorAll('a').forEach((a2) => {
             const nx = a2.nextElementSibling;
             if (nx && nx.tagName && nx.tagName.toLowerCase() === 'ul')
               slideUp(nx, slideDuration);
           });
         });
       }
     }
   });
 });

 // --- باز کردن اولین آیتم فقط اگر data-firstopent="true" باشه ---
 
 document
   .querySelectorAll('.harmony-mobile-menu-accordion')
   .forEach((accordion) => {
     if (!accordion.classList.contains('first-open')) return;

     // اولین <li> مستقیم داخل همین accordion
     const firstLi = accordion.querySelector(':scope > li');
     if (!firstLi) return;

     const firstLink = firstLi.querySelector(':scope > a');
     const firstSubmenu = firstLink && firstLink.nextElementSibling;

     if (
       firstLink &&
       firstSubmenu &&
       firstSubmenu.tagName.toLowerCase() === 'ul'
     ) {
       firstLink.classList.add('active');
       firstSubmenu.style.display = 'block';
       firstSubmenu.style.height = 'auto';
     }
   });
});


document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.classList.add('dropdown-overlay');
  document.body.appendChild(overlay);

  document.querySelectorAll('[data-dropdown]').forEach(function (dropdown) {
    var menu = dropdown.querySelector('.dropdown-box');
    var isClickMode = dropdown.getAttribute('data-click') === 'true';

    if (!menu) return;

    // ===== حالت کلیکی =====
    if (isClickMode) {
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();

        // بستن بقیه منوها
        document
          .querySelectorAll('.dropdown-box.show')
          .forEach(function (openMenu) {
            if (openMenu !== menu) openMenu.classList.remove('show');
          });

        menu.classList.toggle('show');
        overlay.classList.toggle('active', menu.classList.contains('show'));
      });
    }

    // ===== حالت هاور =====
    else {
      dropdown.addEventListener('mouseenter', function () {
        menu.classList.add('show');
        overlay.classList.add('active');
      });

      dropdown.addEventListener('mouseleave', function () {
        menu.classList.remove('show');
        overlay.classList.remove('active');
      });
    }
  });

  // بستن با کلیک روی overlay
  overlay.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-box.show').forEach(function (menu) {
      menu.classList.remove('show');
    });
    overlay.classList.remove('active');
  });

  // بستن با کلیک بیرون از منو
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-box.show').forEach(function (menu) {
      menu.classList.remove('show');
    });
    overlay.classList.remove('active');
  });


});


document.addEventListener('DOMContentLoaded', function () {
  // نرمال‌سازی مسیر: حذف اسلش ابتدا/انتها، حذف query و hash
  function normalizePath(path) {
    try {
      // اگر لینک کامل (با دامنه) بود، فقط pathname رو بردار
      const url = new URL(path, window.location.origin);
      path = url.pathname;
    } catch (e) {
      // اگر URL معتبر نبود (مثلاً href خالی یا فقط #) همون رشته می‌مونه
    }

    return path
      .split('#')[0] // حذف hash
      .split('?')[0] // حذف query string
      .replace(/\/+$/, '') // حذف اسلش(های) انتهایی
      .replace(/^\/+/, ''); // حذف اسلش(های) ابتدایی
  }

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll('.mobile-menu-a[href]').forEach((a) => {
    const rawHref = a.getAttribute('href');

    // نادیده گرفتن لینک‌های خالی، فقط #، جاوااسکریپت، mailto، tel و ...
    if (
      !rawHref ||
      rawHref.trim() === '' ||
      rawHref.trim() === '#' ||
      rawHref.startsWith('javascript:') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:')
    ) {
      return;
    }

    // اگر لینک به دامنه دیگری اشاره داره، نادیده بگیر
    try {
      const linkUrl = new URL(rawHref, window.location.origin);
      if (linkUrl.origin !== window.location.origin) return;
    } catch (e) {
      // لینک نسبی معتبر - ادامه بده
    }

    const hrefPath = normalizePath(rawHref);

    if (hrefPath === currentPath && (hrefPath.trim() !== "" && currentPath.trim() !== "")) {
      a.classList.add('activeLink');
    }
  });
});
