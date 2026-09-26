/* ==========================================================================
   SINEX UI Engine - Interactive Behaviors
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Automatically highlight the active navigation item based on current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && href.includes(currentPath)) {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    }
  });

  // 2. Tab switching logic (for dashboards and multi-step forms)
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSelector = button.getAttribute('data-tab-target');
      const targetContent = document.querySelector(targetSelector);

      if (targetContent) {
        // Hide sibling tabs
        const parent = targetContent.parentElement;
        Array.from(parent.children).forEach(child => child.style.display = 'none');

        // Show selected tab with animation
        targetContent.style.display = 'block';
        targetContent.classList.add('animate-fade-in');
      }
    });
  });

  // 3. Optional: Ripple effect on primary buttons
  const buttons = document.querySelectorAll('.btn-sinex-primary, .nav-item-active-fab');
  buttons.forEach(btn => {
    btn.classList.add('active-press');
  });

});