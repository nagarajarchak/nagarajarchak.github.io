function toggleMode() {

    var mode = document.querySelector('.fa-solid')
    mode.classList.toggle("fa-moon");
    mode.classList.toggle("fa-sun");

    var mobMode = document.querySelector('.mobile-ld')
    mobMode.classList.toggle("fa-moon");
    mobMode.classList.toggle("fa-sun");

    var body = document.body;
    var scy = document.querySelector('.scy')
    var sci = document.querySelector('.sci')
    var github = document.querySelector('.grid-item-git')
    var linkedin = document.querySelector('.grid-item-linkedin')
    var projectLinks = document.querySelector('.project-links')
    var blogLinks = document.querySelector('.blog-links')
    

    body.classList.toggle("dark-mode");
    projectLinks.classList.toggle("a-dark");
    blogLinks.classList.toggle("a-dark");
    github.classList.toggle("grid-item-git-dark");
    linkedin.classList.toggle("grid-item-linkedin-dark");
    scy.classList.toggle("a-dark-social");
    sci.classList.toggle("a-dark-social");
  
  }