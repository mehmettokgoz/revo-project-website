initializeColors()

function setUpDarkTheme() {
    var r = document.querySelector(':root');
    sessionStorage.setItem('theme', 'dark');
    r.style.setProperty('--color-toggle-accent', '#a076ce');
    r.style.setProperty('--background-color', '#1c1c1c');
    r.style.setProperty('--text-color', '#ffffff');
    document.getElementById('theme-icon').classList.replace('fa-sun-o', 'fa-moon-o')
}

function setUpLightTheme() {
    var r = document.querySelector(':root');
    sessionStorage.setItem('theme', 'light');
    r.style.setProperty('--color-toggle-accent', '#c3a554');
    r.style.setProperty('--background-color', '#ffffff');
    r.style.setProperty('--text-color', '#333');
    document.getElementById('theme-icon').classList.replace('fa-moon-o', 'fa-sun-o')
}

function initializeColors() {
    if (sessionStorage.getItem('theme') === 'dark') {
        document.getElementById('theme-icon').classList.replace('fa-sun-o', 'fa-moon-o')
        setUpDarkTheme()
    } else if (sessionStorage.getItem('theme') === 'light') {
        document.getElementById('theme-icon').classList.replace('fa-moon-o', 'fa-sun-o')
        setUpLightTheme();
    }
}

function updateColors() {
    if (sessionStorage.getItem("theme")) {
        if (sessionStorage.getItem('theme') === 'dark') {
            setUpLightTheme();
        } else if (sessionStorage.getItem('theme') === 'light') {
            setUpDarkTheme();
        }
    } else {
        setUpDarkTheme();
    }
}

const checkbox = document.getElementById('theme-switch');

checkbox.addEventListener('click', ()=>{
    updateColors();
})

const language = document.getElementById('lan-switch');

let lan = false;
language.addEventListener('click', ()=>{
    if (stat) {
        document.getElementById("site-flash-title").innerHTML = "Blockzincir tabanlı şeffaf oy sayım sistemi";
        document.getElementById("language-selection").innerHTML = "EN";
    }
    else {
        document.getElementById("site-flash-title").innerHTML = "Transparent and Trustworthy Vote Counting based on Web3";
        document.getElementById("language-selection").innerHTML = "TR";
    }
    stat = !stat;
    document.getElementById("theme-switch").classList.toggle('dark');
})