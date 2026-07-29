import '../Harmony-Menu/Harmony-menu.js';

$(document).ready(function () {
  /*menu*/

  $(function () {
    var lastScrollTop = 0;
    var $menu = $('.menu-navigation');

    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop < lastScrollTop) {
        // اسکرول به بالا
        $menu.addClass('show-navigation');
      } else {
        // اسکرول به پایین
        $menu.removeClass('show-navigation');
      }

      lastScrollTop = scrollTop;
    });
  });
  /*menu*/

  var Accordion = function (el, multiple) {
    this.el = el;
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.dropdownlink');

    var firstItem = this.el.find('.dropdownlink').first();
    firstItem.next('.submenuItems').slideDown().parent().addClass('open');

    dropdownlink.on(
      'click',
      { el: this.el, multiple: this.multiple },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      $next = $this.next('.submenuItems');

    if (!e.data.multiple && !$this.parent().hasClass('open')) {
      $el.find('.submenuItems').slideUp().parent().removeClass('open');
    }

    $next.stop(true, true).slideToggle();
    $this.parent().toggleClass('open');
  };

  $('.accordion-menu').each(function () {
    new Accordion($(this), false);
  });

  // /*accordion-menu*/

  // /*showModal*/

  // ساخت بک‌دراپ فقط یکبار
  if ($('.blurBackstage').length === 0) {
    $(document.body).append('<div class="blurBackstage"></div>');
  }

  $('.show-btn').on('click', function () {
    var dataModalValue = $(this).data('modal');

    // بستن همه مدال‌ها
    $('.hmodal').removeClass('showModal');

    // باز کردن مدال مورد نظر
    $('.hmodal[data-modal="' + dataModalValue + '"]').addClass('showModal');

    // کنترل overflow
    if ($(this).attr('data-overflow-hidden') === 'true') {
      $(document.body).css('overflow', 'hidden');
    }

    // کنترل بک‌دراپ
    if ($(this).attr('data-Backstage') !== 'false') {
      $('.blurBackstage').addClass('show');
    }
  });

  // بستن با کلیک روی بک‌دراپ
  $(document).on('click', '.blurBackstage', function () {
    closeModal();
  });

  // بستن با دکمه ضربدر
  $('.btnClose').on('click', function () {
    closeModal();
  });

  function closeModal() {
    $('.hmodal').removeClass('showModal');
    $('.blurBackstage').removeClass('show');
    $(document.body).css('overflow', '');
    const video = document.getElementById('hvideo');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }

  // /*showModal*/

  // /*tab_end*/
$('body').on('click', 'a[data-toggle="tab"]', function () {
  const $navTabs = $(this).closest('.nav-tabs');
  const $tabs = $navTabs.find('a[data-toggle="tab"]');

  // Set active tab nav
  $tabs.removeClass('active completed');
  $(this).addClass('active');

  // 👇 اضافه شده
  const currentIndex = $tabs.index(this);

  $tabs.each(function (index) {
    if (index < currentIndex) {
      $(this).addClass('completed');
    }
  });

  // Show Content
  let elementId = $(this).attr('data-target');
  $(elementId)
    .closest('.tab-content')
    .find('.tab-content__pane')
    .removeClass('show');

  $(elementId).addClass('show');

  // Progress
  const index = $tabs.index(this);
  const total = $tabs.length - 1;
  const percent = (index / total) * 100;

  $navTabs.find('.timeline-progress-fill').css('width', percent + '%');
});
  // /*tab_end*/

  /*reedmore*/
  $('.introduction-wrapper').each(function () {
    const wrapper = $(this);
    const myDiv = wrapper.find('.introduction');
    const button = wrapper.find('.introduction-span');
    const viewLessBtn = wrapper.find('.view-less');
    const svgIcon = wrapper.find('.introduction-shop-svg');

    const defaultHeight = myDiv.attr('data-height');

    // ست کردن ارتفاع اولیه
    myDiv.css({
      height: defaultHeight,
      overflow: 'hidden',
      boxSizing: 'border-box',
    });

    button.on('click', function () {
      // ابتدا ارتفاع به auto تنظیم می‌شود تا مقدار واقعی را بگیریم
      myDiv.css('height', 'auto');

      // گرفتن ارتفاع واقعی در حالت auto
      const fullHeight = myDiv.outerHeight();

      // بازگرداندن به ارتفاع اولیه برای شروع انیمیشن
      myDiv.css('height', defaultHeight);

      // اجرای انیمیشن تا ارتفاع واقعی
      myDiv.stop().animate({ height: fullHeight }, 400, function () {
        // بعد از انیمیشن، ارتفاع را به auto برمی‌گردانیم تا در صورت تغییر محتوای داخلی، خودش تنظیم شود
        myDiv.css('height', 'auto');
      });

      button.addClass('add-class-introduction-span');
      viewLessBtn.addClass('add-class-view-less');
      svgIcon.addClass('add-class-introduction-shop-svg');
    });

    viewLessBtn.on('click', function () {
      // بستن انیمیشنی به ارتفاع اولیه
      const currentHeight = myDiv.outerHeight();
      myDiv.css('height', currentHeight); // تنظیم ارتفاع فعلی برای شروع انیمیشن
      myDiv.stop().animate({ height: defaultHeight }, 400);

      button.removeClass('add-class-introduction-span');
      viewLessBtn.removeClass('add-class-view-less');
      svgIcon.removeClass('add-class-introduction-shop-svg');
    });
  });

  /*reedmore*/

  $('.h_animation .use_animation').css('opacity', 0);

  $('.h_animation .use_animation').each(function (index) {
    $(this)
      .delay(100 * index)
      .animate({ opacity: 1 }, 500);
  });

  // share
  document.querySelectorAll('.shareButton').forEach((button) => {
    button.addEventListener('click', async () => {
      const url = button.dataset.url; // لینک مخصوص هر مطلب
      const message = button.nextElementSibling; // div پیام مخصوص همان دکمه

      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            url: url,
          });
        } catch (err) {
          console.error('اشتراک لغو شد یا خطا رخ داد:', err);
        }
      } else {
        try {
          await navigator.clipboard.writeText(url);
          message.classList.remove('hidden');
          setTimeout(() => message.classList.add('hidden'), 2000);
        } catch (err) {
          alert('کپی آدرس انجام نشد.');
        }
      }
    });
  });
});
