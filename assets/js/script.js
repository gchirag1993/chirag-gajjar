"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
const frameworksLanguagesExpertiesButtons = [
  {
    name: "PHP",
    icon: "./assets/images/svg/php.svg",
  },
  {
    name: "Laravel",
    icon: "./assets/images/svg/laravel.svg",
  },
  {
    name: "WordPress",
    icon: "./assets/images/svg/wordpress.svg",
  },
  {
    name: "CodeIgniter",
    icon: "./assets/images/svg/codeigniter.svg",
  },
  {
    name: "Symfony",
    icon: "./assets/images/svg/symfony.svg",
  },
  {
    name: "JavaScript",
    icon: "./assets/images/svg/javascript.svg",
  },
  {
    name: "Angular (Beginner)",
    icon: "./assets/images/svg/angular.svg",
  },
];

const paymentGatewayExpertiesButtons = [
  {
    name: "Razorpay",
    icon: "./assets/images/svg/razorpay.png",
  },
  {
    name: "Stripe",
    icon: "./assets/images/svg/stripe.svg",
  },
  {
    name: "Paytm",
    icon: "./assets/images/svg/paytm.svg",
  },
];
const apiServicesExpertiesButtons = [
  {
    name: "REST API",
    icon: "./assets/images/svg/rest-api.svg",
  },
];
const webUiTechButtons = [
  {
    name: "MVC Architecture",
    icon: "./assets/images/svg/MVC.svg",
  },
  {
    name: "JSON",
    icon: "./assets/images/svg/json.svg",
  },
  {
    name: "XML",
    icon: "./assets/images/svg/xml.svg",
  },
  {
    name: "HTML",
    icon: "./assets/images/svg/html.svg",
  },
  {
    name: "HTML5",
    icon: "./assets/images/svg/html5.svg",
  },
  {
    name: "CSS",
    icon: "./assets/images/svg/css.svg",
  },
  {
    name: "CSS3",
    icon: "./assets/images/svg/css3.svg",
  },
  {
    name: "SCSS",
    icon: "./assets/images/svg/scss.svg",
  },
  {
    name: "Bootstrap",
    icon: "./assets/images/svg/bootstrap.svg",
  },
  {
    name: "jQuery",
    icon: "./assets/images/svg/jquery.svg",
  },
  {
    name: "AJAX",
    icon: "./assets/images/svg/AJAX.svg",
  },
];
const uiUXToolsExpertiesButtons = [
  {
    name: "Figma",
    icon: "./assets/images/svg/figma.svg",
  },
];
const unitTestingExpertiesButtons = [
  {
    name: "Unit Tests",
    icon: "./assets/images/svg/unit-testing.png",
  },
];
const deploymentProcessExpertiesButtons = [
  "Cirrus",
  "Travis",
  "Codemagic",
  "Bitrise",
];

const projectManagementToolsExpertiesButtons = [
  {
    name: "Jira",
    icon: "./assets/images/svg/jira.svg",
  },
  {
    name: "asana",
    icon: "./assets/images/svg/asana.svg",
  },
  {
    name: "Slack",
    icon: "./assets/images/svg/slack.svg",
  },
];

const deploymentExpertiesButtons = [
  {
    name: "Web",
    icon: "./assets/images/svg/web.svg",
  },
];

const databaseExpertiesButtons = [
  {
    name: "MySQL",
    icon: "./assets/images/svg/mysql.svg",
  },
];
const versionControlExpertiesButtons = [
  {
    name: "Git",
    icon: "./assets/images/svg/git.svg",
  },
  {
    name: "Github",
    icon: "./assets/images/svg/github.svg",
  },
  {
    name: "SVN",
    icon: "./assets/images/svg/svn.svg",
  },
];
const tootlUtilitiesExpertiesButtons = [
  {
    name: "Visual Studio Code",
    icon: "./assets/images/svg/visual-studio-code.svg",
  },
  {
    name: "Postman",
    icon: "./assets/images/svg/postman-icon.svg",
  },
];

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const overlay = document.querySelector("[data-overlay]");
const testimonialImg = document.querySelector("[data-testimonials-avatar]");

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

function createButtonListWithIcon(buttonNames, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  buttonNames.forEach((item) => {
    const button = document.createElement("button");
    const icon = document.createElement("img"); // Use img instead of span
    icon.className = "icon";
    icon.src = item.icon;
    icon.alt = `${item.name} icon`;

    button.className = "toolBtn";
    button.textContent = item.name;
    button.appendChild(icon);
    container.appendChild(button);
  });
}

// Call the function with different lists and container IDs
createButtonListWithIcon(
  frameworksLanguagesExpertiesButtons,
  "frameworksLanguagesExperties"
);

createButtonListWithIcon(
  paymentGatewayExpertiesButtons,
  "paymentGatewayExperties"
);

createButtonListWithIcon(
  tootlUtilitiesExpertiesButtons,
  "tootlUtilitiesExperties"
);
createButtonListWithIcon(
  versionControlExpertiesButtons,
  "versionControlExperties"
);
createButtonListWithIcon(databaseExpertiesButtons, "databaseExperties");
createButtonListWithIcon(apiServicesExpertiesButtons, "apiServicesExperties");
createButtonListWithIcon(webUiTechButtons, "webUiTech");
createButtonListWithIcon(deploymentExpertiesButtons, "deploymentExperties");

createButtonListWithIcon(
  projectManagementToolsExpertiesButtons,
  "projectManagementToolsExperties"
);
createButtonListWithIcon(unitTestingExpertiesButtons, "unitTestingExperties");
createButtonListWithIcon(uiUXToolsExpertiesButtons, "uiUXToolsExperties");
