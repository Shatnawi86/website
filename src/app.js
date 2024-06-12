document.addEventListener('DOMContentLoaded', async function() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) {
      header.innerHTML = await fetchComponent('./header.html');
  }

  if (footer) {
      footer.innerHTML = await fetchComponent('./footer.html');
  }
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
