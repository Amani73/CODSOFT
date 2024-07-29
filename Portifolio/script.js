let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more');
    const moreText = document.querySelector('.more-text');
    const aboutParagraph = document.querySelector('.about-content p');
  
    readMoreBtn.addEventListener('click', function() {
      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        aboutParagraph.style.maxHeight = "none";
        readMoreBtn.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        aboutParagraph.style.maxHeight = "4.5rem";
        readMoreBtn.textContent = "Read More";
      }
    });
  });
  
  document.querySelector('.read-more').addEventListener('click', function(event) {
    event.preventDefault();
    const content = document.querySelector('.about-content p');
    content.classList.toggle('expanded');
    
    if (content.classList.contains('expanded')) {
      this.textContent = 'Read less';
    } else {
      this.textContent = 'Read more';
    }
  });
  