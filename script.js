// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.querySelector('[data-search]');
//     const videoOutputs = document.querySelectorAll('#framevalue iframe');
  
//     searchInput.addEventListener("input", e => {
//       const value = e.target.value;
//       console.log(value);
  
//       videoOutputs.forEach(element => {
//         const title = element.getAttribute('title');
//         console.log(title);
//       });
//     });
//   });
  
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('[data-search]');
    const iframes = document.querySelectorAll('.iframeContainerStyle');
  
    searchInput.addEventListener("input", e => {
      const searchValue = e.target.value.toLowerCase();
  
      iframes.forEach(iframe => {
        const iframeTitle = iframe.querySelector('iframe').getAttribute('title').toLowerCase();
        if (iframeTitle.includes(searchValue)) {
          iframe.style.display = 'block'; // Show the iframe
        } else {
          iframe.style.display = 'none'; // Hide the iframe
        }
      });
    });
  });
  