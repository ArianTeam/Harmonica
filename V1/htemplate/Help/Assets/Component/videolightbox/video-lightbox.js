class VideoLightbox {
  constructor(options = {}) {
    this.options = {
      triggerSelector: '[data-video-lightbox]',
      closeOnOverlayClick: true,
      ...options,
    };

    this.root = null;
    this.frameWrap = null;
    this.titleEl = null;
    this.closeBtn = null;
    this.isOpen = false;
    this.lastFocused = null;

    this._onKeydown = this._onKeydown.bind(this);
    this._buildDOM();
    this._bindTriggers();
  }

  static init(options) {
    if (!window.__videoLightboxInstance) {
      window.__videoLightboxInstance = new VideoLightbox(options);
    }
    return window.__videoLightboxInstance;
  }

  /* ---------- ساخت ساختار DOM لایت‌باکس ---------- */
  _buildDOM() {
    const root = document.createElement('div');
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-hidden', 'true');
    root.className = [
      'fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8',
      'opacity-0 pointer-events-none',
      'transition-opacity duration-300 ease-out',
    ].join(' ');

    root.innerHTML = `
      <div data-role="overlay" class="absolute inset-0 bg-[#0a0a0a]/92 backdrop-blur-sm"></div>

      <div data-role="panel" class="relative w-full max-w-4xl scale-95 opacity-0 transition-all duration-300 ease-out">
        <div class="flex items-center justify-between gap-4 mb-3 px-1">
          <p data-role="title" class="text-neutral-200 text-sm sm:text-base font-medium tracking-wide truncate"></p>
          <button data-role="close" type="button" aria-label="بستن"
            class="shrink-0 grid place-items-center size-9 rounded-full border border-neutral-700 cursor-pointer
                   text-neutral-300 hover:text-white hover:border-neutral-400
                   transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
        </div>

        <div data-role="frame-wrap" class="relative w-full aspect-video rounded-lg overflow-hidden
                    bg-neutral-950 ring-1 ring-neutral-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
          <div data-role="spinner" class="absolute inset-0 grid place-items-center">
            <div class="size-8 rounded-full border-2 border-neutral-700 border-t-amber-400 animate-spin"></div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(root);

    this.root = root;
    this.overlay = root.querySelector('[data-role="overlay"]');
    this.panel = root.querySelector('[data-role="panel"]');
    this.frameWrap = root.querySelector('[data-role="frame-wrap"]');
    this.spinner = root.querySelector('[data-role="spinner"]');
    this.titleEl = root.querySelector('[data-role="title"]');
    this.closeBtn = root.querySelector('[data-role="close"]');

    this.closeBtn.addEventListener('click', () => this.close());
    if (this.options.closeOnOverlayClick) {
      this.overlay.addEventListener('click', () => this.close());
    }
  }

  /* ---------- اتصال به لینک/دکمه‌های تریگر ---------- */
  _bindTriggers() {
    document.querySelectorAll(this.options.triggerSelector).forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const url =
          el.dataset.videoLightbox && el.dataset.videoLightbox !== ''
            ? el.dataset.videoLightbox
            : el.getAttribute('href');
        const title = el.dataset.title || '';
        this.open(url, title);
      });
    });
  }

  /* ---------- تشخیص نوع ویدئو و ساخت المان مناسب ---------- */
  _resolveSource(url) {
    const ytMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/
    );
    if (ytMatch) {
      return {
        type: 'iframe',
        src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
      };
    }

    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return {
        type: 'iframe',
        src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
      };
    }

    // فایل ویدئویی مستقیم (mp4, webm, ...)
    return { type: 'video', src: url };
  }

  /* ---------- باز کردن لایت‌باکس ---------- */
  open(url, title = '') {
    if (!url) return;

    const source = this._resolveSource(url);
    this.titleEl.textContent = title;
    this.spinner.classList.remove('hidden');

    // پاک‌سازی فریم قبلی
    const oldMedia = this.frameWrap.querySelector('[data-role="media"]');
    if (oldMedia) oldMedia.remove();

    let media;
    if (source.type === 'iframe') {
      media = document.createElement('iframe');
      media.src = source.src;
      media.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
      media.setAttribute('allowfullscreen', '');
      media.className = 'absolute inset-0 w-full h-full';
      media.addEventListener('load', () =>
        this.spinner.classList.add('hidden')
      );
    } else {
      media = document.createElement('video');
      media.src = source.src;
      media.controls = true;
      media.autoplay = true;
      media.playsInline = true;
      media.className =
        'absolute inset-0 w-full h-full object-contain bg-black';
      media.addEventListener('loadeddata', () =>
        this.spinner.classList.add('hidden')
      );
    }
    media.dataset.role = 'media';
    this.frameWrap.appendChild(media);

    this.lastFocused = document.activeElement;
    this.root.setAttribute('aria-hidden', 'false');
    this.root.classList.remove('pointer-events-none');
    document.body.classList.add('overflow-hidden');

    requestAnimationFrame(() => {
      this.root.classList.remove('opacity-0');
      this.panel.classList.remove('scale-95', 'opacity-0');
      this.panel.classList.add('scale-100', 'opacity-100');
    });

    document.addEventListener('keydown', this._onKeydown);
    this.closeBtn.focus();
    this.isOpen = true;
  }

  /* ---------- بستن لایت‌باکس ---------- */
  close() {
    if (!this.isOpen) return;

    this.root.classList.add('opacity-0');
    this.panel.classList.remove('scale-100', 'opacity-100');
    this.panel.classList.add('scale-95', 'opacity-0');

    const cleanup = () => {
      this.root.classList.add('pointer-events-none');
      this.root.setAttribute('aria-hidden', 'true');
      const media = this.frameWrap.querySelector('[data-role="media"]');
      if (media) media.remove(); // توقف واقعی پخش (خصوصاً برای iframe)
      document.body.classList.remove('overflow-hidden');
      this.root.removeEventListener('transitionend', cleanup);
    };
    this.root.addEventListener('transitionend', cleanup, { once: true });

    document.removeEventListener('keydown', this._onKeydown);
    if (this.lastFocused) this.lastFocused.focus();
    this.isOpen = false;
  }

  _onKeydown(e) {
    if (e.key === 'Escape') this.close();
  }
}

// اتصال خودکار در صورت وجود المان‌های data-video-lightbox
if (typeof window !== 'undefined') {
  window.VideoLightbox = VideoLightbox;
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('[data-video-lightbox]')) {
      VideoLightbox.init();
    }
  });
}
