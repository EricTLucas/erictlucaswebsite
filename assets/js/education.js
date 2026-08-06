AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/CQEIGJ11EQ2P",
  },
  {
    title: "Deep Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: " https://www.coursera.org/account/accomplishments/specialization/certificate/SVCG4E2SRF02",
  }
  
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});





/* Project Cards */

// Array of objects for projects
const projects = [
  {
    title: "Exploratory Data Analysis",
    cardImage: "assets/images/eda_tool.png",
    description: "Exploratory Data Analysis Tool for quick summaries of csv files.",
    Githublink: "https://github.com/EricTLucas/EDA-Tool",
    mainlink: "https://github.com/EricTLucas/EDA-Tool",
  },
  {
    title: "Solitaire Game",
    cardImage: "assets/images/solitaire.png",
    description: "A simple solitaire game made with JavaScript.",
    Previewlink: "https://erictlucas.com/solitaire",
    Githublink: "https://github.com/EricTLucas/Solitaire",
    mainlink: "https://erictlucas.com/solitaire",
  },
];

// function for rendering project cards data
function showCards2() {
  const projectcards = document.querySelector(".projectcards");

  // Visible, no-devtools-needed status message
  if (!projectcards) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div style="background:red;color:#fff;padding:12px;font-family:monospace;">' +
      'project.js ERROR: .projectcards element not found in the page.</div>'
    );
    return;
  }

  try {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, mainlink }) => {

    // Build preview icon only if Previewlink exists
    const previewIcon = Previewlink
      ? `
        <li>
          <a href="${Previewlink}" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </a>
        </li>
      `
      : ""; // empty string → icon removed

    output += `
      <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" href="${mainlink}">
        <a href="${mainlink}" target="_blank" class="card-stretched-link"></a>
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          <div class="header"></div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h2 class="title">${title}</h2>
              </div>
              <ul class="menu-content"><br>
                ${previewIcon}
                <li>
                  <a href="${Githublink}" class="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  });

    projectcards.innerHTML = output;

    if (typeof AOS !== "undefined") {
      AOS.refreshHard();
    }
  } catch (err) {
    // Print the actual error directly on the page so you can read it without devtools
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div style="background:red;color:#fff;padding:12px;font-family:monospace;white-space:pre-wrap;">' +
      "project.js ERROR: " + err.message + "</div>"
    );
  }
}

// Run now if the DOM is already ready, otherwise wait for it
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showCards2);
} else {
  showCards2();
}

// Search/filter function — only relevant if you have a #myInput search box
function myFunction() {
  const input = document.getElementById("myInput");
  if (!input) return;

  const query = input.value.toUpperCase();
  const cards = document.getElementsByClassName("skill-card");
  const titles = document.getElementsByClassName("title");

  for (let i = 0; i < cards.length; i++) {
    const matches = titles[i].innerHTML.toUpperCase().includes(query);
    cards[i].style.display = matches ? "" : "none";
  }
}
