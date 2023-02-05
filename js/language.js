
initializeLanguage();

function updateAllTexts() {
    let lan = sessionStorage.getItem('language');

    let menu_items = document.getElementsByClassName("menu-link");

    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].innerHTML = menu[i][lan];
    }

    document.getElementById("language-selection").innerHTML = langs[lan];

    document.getElementById("site-flash-title").innerHTML = flashContent.title[lan];
    document.getElementById("site-flash-content").innerHTML = flashContent.content[lan];

    document.getElementById("vision-title").innerHTML = visionSection.title[lan];
    document.getElementById("vision-content").innerHTML = visionSection.content[lan];

    document.getElementById("how-it-works-title").innerHTML = howItWorks.title[lan];
    document.getElementById("how-it-works-content").innerHTML = howItWorks.content[lan];

    document.getElementById("team-title").innerHTML = team.title[lan];

    document.getElementById("contact-title").innerHTML = contact.title[lan];
    document.getElementById("contact-content").innerHTML = contact.content[lan];
}

function setUpEnglishContent() {
    sessionStorage.setItem("language", "EN")
    updateAllTexts();
}

function setUpTurkishContent() {
    sessionStorage.setItem("language", "TR");
    updateAllTexts();
}

function initializeLanguage() {

    if (sessionStorage.getItem('language') === 'TR') {
        setUpTurkishContent();
    } else if (sessionStorage.getItem('language') === 'EN') {
        setUpEnglishContent();
    } else {
        setUpEnglishContent();
    }
}

function updateLanguage() {
    if (sessionStorage.getItem('language') === 'TR') {
        setUpEnglishContent();
    } else if (sessionStorage.getItem('language') === 'EN') {
        setUpTurkishContent();
    }
}

const language = document.getElementById('lan-switch');

language.addEventListener('click', ()=>{
    console.log('language');
    updateLanguage();
})