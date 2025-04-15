const skills = [
    {
      title: "HTML",
      category: "Frontend",
      short: "Структура страницы",
      full: "HTML — язык разметки, основа любой веб-страницы.",
    },
    {
      title: "CSS",
      category: "Frontend",
      short: "Стилизация контента",
      full: "CSS задаёт оформление элементов: цвета, шрифты, отступы и т.д.",
    },
    {
      title: "JavaScript",
      category: "Frontend",
      short: "Язык программирования",
      full: "JS делает страницы интерактивными, работает с DOM, API и логикой.",
    },
    {
      title: "Node.js",
      category: "Backend",
      short: "Серверная среда JS",
      full: "Позволяет писать backend на JavaScript — API, логика, базы данных.",
    },
    {
      title: "Git",
      category: "Soft skills",
      short: "Контроль версий",
      full: "Позволяет отслеживать изменения, работать в команде, делать ветки.",
    },
    {
      title: "Командная работа",
      category: "Soft skills",
      short: "Soft-навык",
      full: "Умение работать с другими людьми, давать и принимать фидбек.",
    }
  ];
const htmlMain = document.querySelector("main");
let filterBtn = document.getElementById("all");

// render skills
function renderSkills(filterType) {
    if (filterType === "all") {
        skills.forEach(function(skill, index) {
            htmlMain.insertAdjacentHTML('beforeend', 
                `<div class="skills-card" id="skill-id-${index}">
                    <div class="ckills-card__info">
                        <h2>${skill.title}</h2>
                        <h3>Категория: ${skill.category}</h3>
                        <h3>${skill.short}</h3>
                        <p>${skill.full}</p>
                    </div>
                    <button onclick="showMore('skill-id-${index}')">Подробно</button>
                </div>`
        );
        });
    } else if (filterType === "frontend") {
        skills.forEach(function(skill, index) {
            if (skill.category === "Frontend") {
                htmlMain.insertAdjacentHTML('beforeend', 
                `<div class="skills-card" id="skill-id-${index}">
                        <div class="ckills-card__info">
                            <h2>${skill.title}</h2>
                            <h3>Категория: ${skill.category}</h3>
                            <h3>${skill.short}</h3>
                        <p id="${index}">${skill.full}</p>
                        </div>
                        <button onclick="showMore('skill-id-${index}')">Подробно</button>
                    </div>`
            );
            }
        });
    } else if (filterType === "backend") {
        skills.forEach(function(skill, index) {
            if (skill.category === "Backend") {
                htmlMain.insertAdjacentHTML('beforeend', 
                `<div class="skills-card" id="skill-id-${index}">
                        <div class="ckills-card__info">
                            <h2>${skill.title}</h2>
                            <h3>Категория: ${skill.category}</h3>
                            <h3>${skill.short}</h3>
                        <p id="text-id-${index}">${skill.full}</p>
                        </div>
                        <button onclick="showMore('skill-id-${index}')">Подробно</button>
                    </div>`
            );
            }
        });
    }
    else if (filterType === "soft") {
        skills.forEach(function(skill, index) {
            if (skill.category === "Soft skills") {
                htmlMain.insertAdjacentHTML('beforeend', 
                `<div class="skills-card" id="skill-id-${index}">
                        <div class="ckills-card__info">
                            <h2>${skill.title}</h2>
                            <h3>Категория: ${skill.category}</h3>
                            <h3>${skill.short}</h3>
                        <p id="${index}">${skill.full}</p>
                        </div>
                        <button onclick="showMore('skill-id-${index}')">Подробно</button>
                    </div>`
            );
            }
        });
    }
    
}
renderSkills('all');

// filter skills
function filterSkills(a) {
    htmlMain.innerHTML = "";
    filterBtn.classList.remove("active");
    filterBtn.disabled = false
    filterBtn = document.getElementById(a);
    filterBtn.classList.add("active");
    filterBtn.disabled = true
    console.log(filterBtn);
    renderSkills(a);
}
all.addEventListener("click", function() {
    filterSkills("all");
});
frontend.addEventListener("click", function() {
    filterSkills("frontend");
});
backend.addEventListener("click", function() {
    filterSkills("backend");
});
soft.addEventListener("click", function() {
    filterSkills("soft");
});

// show more

function showMore(id) {
    console.log(id);
    let skill = document.getElementById(id);
    let text = skill.querySelector("p");
    let btn = skill.querySelector("button");
    text.classList.toggle("show");
    console.log(btn.innerHTML);
    if (btn.innerHTML === "Подробно") {
        btn.innerHTML = "Скрыть";
    } else {
        btn.innerHTML = "Подробно";
    }
}