document.addEventListener('DOMContentLoaded', async function() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    if (header) {
        header.innerHTML = await fetchComponent('./header2.html');
    }
  
    if (footer) {
        footer.innerHTML = await fetchComponent('./footer.html');
    }
  
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
          tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
      });
    });
  
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    // Hamburger menu
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  
    // Dropdown mobile
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const dropdown = toggle.nextElementSibling;
        const otherDropdowns = document.querySelectorAll('.dropdown');
  
        otherDropdowns.forEach((d) => {
          if (d !== dropdown) {
            d.classList.add('hidden');
          }
        });
  
        dropdown.classList.toggle('hidden');
        toggle.querySelector('svg').classList.toggle('rotate-180');
      });
    });
  
    window.addEventListener('click', (event) => {
      if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown')) {
        dropdownToggles.forEach((toggle) => {
          toggle.nextElementSibling.classList.add('hidden');
          toggle.querySelector('svg').classList.remove('rotate-180');
        });
      }
    });
  });
  
  async function fetchComponent(url) {  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return ''; 
    }
  }
  