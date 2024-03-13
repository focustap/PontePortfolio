document.addEventListener("DOMContentLoaded", function() {
  const subHeaderLinks = document.querySelectorAll('.sub-header a');

  subHeaderLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
      });

      if (targetSection) {
        targetSection.classList.add('active-section');
      }
    });
  });
});
