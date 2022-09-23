const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Hamburger button listener
menuBtn.addEventListener('click', navToggle);

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
 // Remove border for all tabs
 tabs.forEach((tab) => {
  tab.children[0].classList.remove(
   'border-b',
   'border-b-4',
   'border-red-500',
   'md:border-0'
  );
 });

 //  Hide all panels
 panels.forEach((panel) => panel.classList.add('hidden'));

 // Activate a new tab and panel based on the target
 e.target.classList.add('border-b-4', 'border-red-500');

 const classString = e.target.getAttribute('data-target');

 document
  .getElementById('panels')
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden');
}

function navToggle() {
 menuBtn.classList.toggle('open');
 menu.classList.toggle('flex');
 menu.classList.toggle('hidden');

 if (menu.classList.contains('flex')) {
  logo.setAttribute('src', './images/logo-bookmark-footer.svg');
 } else {
  logo.setAttribute('src', './images/logo-bookmark.svg');
 }
}
