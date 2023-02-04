const checkbox = document.getElementById('theme-switch');
var r = document.querySelector(':root');

let stat = false;
checkbox.addEventListener('click', ()=>{
    if (stat) {
        document.getElementById('theme-icon').classList.replace('fa-moon-o', 'fa-sun-o')
        r.style.setProperty('--background-color', 'lightblue');
        r.style.setProperty('--color-toggle-accent', '#c3a554');
        r.style.setProperty('--background-color', '#ffffff');
        r.style.setProperty('--text-color', '#333');
    }
    else {
        document.getElementById('theme-icon').classList.replace('fa-sun-o', 'fa-moon-o')
        r.style.setProperty('--color-toggle-accent', '#a076ce');
        r.style.setProperty('--background-color', '#1c1c1c');
        r.style.setProperty('--text-color', '#ffffff');

        
    }
    stat = !stat;
    document.getElementById("theme-switch").classList.toggle('dark');
    console.log("theme switch clicked");
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
    console.log("theme switch clicked");
})