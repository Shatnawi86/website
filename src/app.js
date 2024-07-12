document.addEventListener('DOMContentLoaded', async function() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    if (header) {
        header.innerHTML = await fetchComponent('./header2.html');
    }
  
    if (footer) {
        footer.innerHTML = await fetchComponent('./footer.html');
    }
  
    const tabs = document.querySelectorAll('[data-tab-target]')
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
      })
    });

    const megaMenuButton = document.getElementById('mega-menu-icons-dropdown-button');
    const megaMenu = document.getElementById('mega-menu-icons-dropdown');

    const languageButton = document.getElementById('language-dropdown-button');
    const languagemegaMenu = document.getElementById('language-icons-dropdown');

    megaMenuButton.addEventListener('click', () => {
        // Toggle the visibility of the mega menu
        if (megaMenu.classList.contains('hidden')) {
            megaMenu.classList.remove('hidden', 'opacity-0');
            megaMenu.classList.add('block', 'opacity-100');
        } else {
            megaMenu.classList.remove('block', 'opacity-100');
            megaMenu.classList.add('hidden', 'opacity-0');
        }
    });


    languageButton.addEventListener('click', () => {
      // Toggle the visibility of the mega menu
      if (languagemegaMenu.classList.contains('hidden')) {
        languagemegaMenu.classList.remove('hidden', 'opacity-0');
        languagemegaMenu.classList.add('block', 'opacity-100');
      } else {
        languagemegaMenu.classList.remove('block', 'opacity-100');
        languagemegaMenu.classList.add('hidden', 'opacity-0');
      }
    });
    
    // Optional: Close the mega menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!megaMenuButton.contains(event.target) && !megaMenu.contains(event.target)) {
            megaMenu.classList.remove('block', 'opacity-100');
            megaMenu.classList.add('hidden', 'opacity-0');
        }
    });

    document.addEventListener('click', (event) => {
      if (!languageButton.contains(event.target) && !languagemegaMenu.contains(event.target)) {
        languagemegaMenu.classList.remove('block', 'opacity-100');
        languagemegaMenu.classList.add('hidden', 'opacity-0');
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
  
  
