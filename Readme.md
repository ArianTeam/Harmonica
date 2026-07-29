<!--
Harmonica Transpiler — README
Tip: GitHub Markdown does not support custom fonts directly; we use badges, colors, and clean typography.
-->

<div align="center">

# 🎼 Harmonica Transpiler  
### قالب فعلی‌ات را نگه دار — داده‌های CMS را تزریق کن — سریع، تمیز، بدون پیچیدگی

<a href="https://arianteam.github.io/Harmonica" target="_blank" rel="noopener noreferrer">
  <img alt="Docs" src="https://img.shields.io/badge/📚%20Docs-Open%20Guide-3b82f6?style=for-the-badge">
</a>
<a href="https://arianteam.github.io/Harmonica" target="_blank" rel="noopener noreferrer">
  <img alt="Demo" src="https://img.shields.io/badge/✨%20Live-Preview-22c55e?style=for-the-badge">
</a>

<br/>

<img alt="Harmonica" src="https://img.shields.io/badge/Template%20Engine-Transpiler-111827?style=flat-square">
<img alt="Legacy Friendly" src="https://img.shields.io/badge/Legacy-Friendly-f59e0b?style=flat-square">
<img alt="CMS Ready" src="https://img.shields.io/badge/CMS-Ready-8b5cf6?style=flat-square">
<img alt="Fast Setup" src="https://img.shields.io/badge/Time-To%20Market-Fast-06b6d4?style=flat-square">

</div>

---

## 🌟 هارمونیکا چیست؟

**هارمونیکا** یک **ترانسپایلر قدرتمند قالب سایت** در سیستم کسب‌وکار **هارمونی** است که نقش یک **Template Engine** را برای UI/Front قالب‌ها بازی می‌کند.  
مناسب تیم‌هایی که می‌خواهند **قالب فعلی خودشان را بدون پیچیدگی‌های رایج** و به‌صورت کاملاً **کدنویسی‌شده و قابل کنترل** اجرا کنند.

ایده اصلی ساده است:

- شما **HTML قالب** را همان‌طور که هست نگه می‌دارید.
- فقط با چند **تگ آماده** و **دستورهای از پیش تعریف‌شده** (حلقه‌ها/فراخوانی‌ها) داده‌های CMS را داخل قالب تزریق می‌کنید.
- نتیجه: **در کوتاه‌ترین زمان** می‌توانید یک **سیستم کسب‌وکار** (سایت/پرتال) بسازید، بدون اینکه وارد پیچیدگی ابزارهای Drag & Drop شوید.

---

## 🧠 چرا هارمونیکا ساخته شد؟

از آن‌جایی که صفحات عمومی سایت‌ها معمولاً **یک‌نواخت** هستند و افزونه‌ها/بخش‌های مشترک زیادی بین قالب‌های مختلف تکرار می‌شود، این ایده شکل گرفت که:

> به‌جای ساختن سیستم‌های سنگین و پیچیده، فقط یک پارسر/ترانسپایلر داشته باشیم که «محتوای اصلی» را به شکلی استاندارد بین «قالب اصلی» جایگذاری کند.

این رویکرد کمک می‌کند از پیچیدگی‌های راهکارهایی مثل **WebPart** و حتی برخی سازنده‌های صفحه (مانند تجربه‌های سنگین و پیچیده برای کاربران آماتور) دوری کنیم—در عوض، همه‌چیز **شفاف، قابل نسخه‌سازی، قابل بررسی در Git و قابل توسعه توسط تیم فنی** باقی می‌ماند.

---

## 🗓️ تاریخچه

- طراحی اولیه سیستم: **سال ۱۳۸۸ شمسی** (معادل **2009 میلادی**)  
- طراح: **مجتبی فرهمند**  
- بنیان‌گذار: **گروه نرم‌افزار آرین**

> این موتور از همان ابتدا برای استفاده در مقیاس واقعی طراحی شد و در طول زمان روی سایت‌های متعدد و سناریوهای پرتکرار تکامل پیدا کرد.

---

## 🚀 ویژگی‌ها (Highlights)

- **Template Engine/Transpiler محور** برای تزریق داده داخل HTML
- **سازگار با قالب‌های قدیمی** (Legacy-Friendly)
- مناسب برای UIهایی که باید **سریع بالا بیایند** و **قابل نگهداری** باشند
- امکان ساخت صفحات با **تگ‌های آماده** و **حلقه‌ها/دستورهای استاندارد**
- طراحی‌شده برای سناریوهای CMS و صفحات عمومی پرتکرار

---

## 📚 راهنما (Docs)

راهنمای کامل و مثال‌ها اینجاست (در تب/پنجره جدید باز می‌شود):

<a href="https://arianteam.github.io/Harmonica" target="_blank" rel="noopener noreferrer">
  https://arianteam.github.io/Harmonica
</a>

---

## 🧩 نمونه‌ها

> نکته: چون هنوز کد مثال‌ها را اینجا نگذاشتی، من اسکلت بخش نمونه‌ها را آماده گذاشتم.  
> فقط کافیه مثال‌های واقعی خودت را جایگزین کنی.

### 1) نمایش بنر ساده سایت

**هدف:** رندر یک بنر (تصویر + لینک + عنوان) با تگ‌های آماده
```html
(banner)
  <a href="(link)" class="banner-link">
    <img src="(image)" alt="(title)">
  </a>
(/banner)
```


