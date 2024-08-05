// Function to load and inject HTML content
function loadAndInject(elementId, filePath) {
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Inject the loaded content into the specified element
          document.getElementById(elementId).innerHTML = xhr.responseText;
        } else {
          console.error('Failed to load ' + filePath);
        }
      }
    };
  
    // Fetch the content of the HTML file
    xhr.open('GET', filePath, true);
    xhr.send();
  }
  
  // Inject header into the <header> element
  loadAndInject('header', 'header.html');
  
  // Inject footer into the <footer> element
  loadAndInject('footer', 'footer.html');
  