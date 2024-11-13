function toggleMode() {

    var mode = document.querySelector('.fa-solid')
    mode.classList.toggle("fa-moon");
    mode.classList.toggle("fa-sun");
  
    var body = document.body;
    var about = document.querySelector('.grid-item-about')
    var experience = document.querySelector('.grid-item-experience')
    var recognition = document.querySelector('.grid-item-recognition')
    var education = document.querySelector('.grid-item-education')
    var music = document.querySelector('.grid-item-music')
    var profile = document.querySelector('.grid-item-profile')
    var skills = document.querySelector('.grid-item-skills')
    var cv = document.querySelector('.cv')
    var scy = document.querySelector('.scy')
    var sci = document.querySelector('.sci')
    var resume = document.querySelector('.resume')
    var github = document.querySelector('.grid-item-git')
    var linkedin = document.querySelector('.grid-item-linkedin')
    var projectLinks = document.querySelector('.project-links')
    

    body.classList.toggle("dark-mode");
    about.classList.toggle("grid-item-about-dark");
    experience.classList.toggle("grid-item-experience-dark");
    recognition.classList.toggle("grid-item-recognition-dark");
    education.classList.toggle("grid-item-education-dark");
    music.classList.toggle("grid-item-music-dark");
    profile.classList.toggle("grid-item-profile-dark");
    skills.classList.toggle("grid-item-skills-dark");
    cv.classList.toggle("a-dark");
    resume.classList.toggle("a-dark");
    projectLinks.classList.toggle("a-dark");
    github.classList.toggle("grid-item-git-dark");
    linkedin.classList.toggle("grid-item-linkedin-dark");
    scy.classList.toggle("a-dark-social");
    sci.classList.toggle("a-dark-social");
  
  }