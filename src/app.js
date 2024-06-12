document.addEventListener('DOMContentLoaded', function() {
    fetchPage();
  });
  
  function fetchPage() {
    const currentLocation = window.location.href;
  
    const entryUrl = new URL('entry.html', currentLocation);
  
    fetch(entryUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Content of entry.html:', data);
        document.getElementById('entry-content').innerHTML = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  