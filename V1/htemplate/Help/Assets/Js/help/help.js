function setActiveLink(link) {
  document.querySelectorAll('.mobile-menu-a').forEach((a) => {
    a.classList.remove('activeLink');
  });

  // بستن همه‌ی زیرمنوها قبل از باز کردن زیرمنوی جدید
  document.querySelectorAll('.mobile-menu-li-ul').forEach((ul) => {
    ul.style.display = 'none';
  });

  if (!link) return;

  link.classList.add('activeLink');

  // اگر داخل زیرمنو است، مطمئن شو زیرمنو باز باشد
  const subMenu = link.closest('.mobile-menu-li-ul');
  if (subMenu) {
    subMenu.style.display = 'block';

    const parentBtn = subMenu.previousElementSibling;
    if (parentBtn) {
      parentBtn.classList.add('activeLink');
    }
  }
}

document.addEventListener('click', function (e) {
  const link = e.target.closest('.mobile-menu-a[href^="#"]');
  if (!link) return;

  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;

  e.preventDefault();

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  history.replaceState(null, '', link.getAttribute('href'));
  setActiveLink(link);
});

let searchMatches = [];
let searchIndex = -1;
let lastQuery = '';
let currentHighlighted = null; // سکشنی که الان هایلایت است

function filterMenu() {
  const input = document
    .getElementById('menuSearch')
    .value.trim()
    .toLowerCase();

  if (!input) {
    searchMatches = [];
    searchIndex = -1;
    lastQuery = '';
    return;
  }

  if (input !== lastQuery) {
    lastQuery = input;
    searchIndex = -1;

    const sections = document.querySelectorAll('[id]');
    searchMatches = [];

    sections.forEach((section) => {
      if (section.id.toLowerCase().includes(input)) {
        searchMatches.push(section);
        return;
      }

      const keywords = (section.dataset.search || '')
        .toLowerCase()
        .split(',')
        .map((x) => x.trim());

      if (keywords.some((keyword) => keyword.includes(input))) {
        searchMatches.push(section);
      }
    });
  }

  if (searchMatches.length === 0) return;

  searchIndex = (searchIndex + 1) % searchMatches.length;
  const target = searchMatches[searchIndex];

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  history.replaceState(null, '', '#' + target.id);

  // حذف کلاس از سکشن قبلی و اضافه کردن به سکشن جدید
  if (currentHighlighted) {
    currentHighlighted.classList.remove('search-active');
  }
  target.classList.add('search-active');
  currentHighlighted = target;

  const link = document.querySelector(
    `.mobile-menu-li-ul .mobile-menu-a[href="#${CSS.escape(target.id)}"]`
  );

  if (link) {
    setActiveLink(link);
  }
}
// start-coppy
document.querySelectorAll('code').forEach((el) => {
  el.title = 'برای کپی کلیک کنید';

  el.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(el.textContent.trim());
      showToast('کپی شد!');
    } catch (err) {
      console.error('خطا در کپی کردن متن:', err);
      showToast('خطا در کپی کردن');
    }
  });
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 24px;
    right: 50%;
    transform: translateX(50%) translateY(-10px);
    background: #1e293b;
    color: #fff;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 14px;
    min-width:7rem;
    text-align:center;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50%) translateY(-10px)';
    setTimeout(() => toast.remove(), 200);
  }, 1200);
}

// end-coppy


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.go-to-top');
  if (!menu) return;

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    menu.classList.toggle('active', scrollTop < lastScrollTop);

    lastScrollTop = scrollTop;
  });
});



// /*showModal*/

if (document.querySelectorAll('.blurBackstage').length === 0) {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="blurBackstage"></div>'
  );
}

document.querySelectorAll('.show-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var dataModalValue = this.getAttribute('data-modal');

    // بستن همه مدال‌ها
    document.querySelectorAll('.hmodal').forEach(function (modal) {
      modal.classList.remove('showModal');
    });

    // باز کردن مدال مورد نظر (تمام موارد منطبق، نه فقط اولی)
    document
      .querySelectorAll('.hmodal[data-modal="' + dataModalValue + '"]')
      .forEach(function (modal) {
        modal.classList.add('showModal');
      });

    // کنترل overflow
    if (this.getAttribute('data-overflow-hidden') === 'true') {
      document.body.style.overflow = 'hidden';
    }

    // کنترل بک‌دراپ
    if (this.getAttribute('data-Backstage') !== 'false') {
      document.querySelector('.blurBackstage').classList.add('show');
    }
  });
});

// بستن با کلیک روی بک‌دراپ
document.addEventListener('click', function (e) {
  if (e.target.closest('.blurBackstage')) {
    closeModal();
  }
});

// بستن با دکمه ضربدر
document.querySelectorAll('.btnClose').forEach(function (btn) {
  btn.addEventListener('click', function () {
    closeModal();
  });
});

function closeModal() {
  document.querySelectorAll('.hmodal').forEach(function (modal) {
    modal.classList.remove('showModal');
  });
  document.querySelector('.blurBackstage').classList.remove('show');
  document.body.style.overflow = '';
}
// /*showModal*/
