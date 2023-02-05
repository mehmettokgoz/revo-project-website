initializeLanguage();

function setUpEnglishContent() {
    sessionStorage.setItem("language", "EN")
    document.getElementById("site-flash-title").innerHTML = "Transparent and Trustworthy Vote Counting based on Web3";
    document.getElementById("language-selection").innerHTML = "TR";
}

function setUpTurkishContent() {
    sessionStorage.setItem("language", "TR");
    document.getElementById("site-flash-title").innerHTML = "Blockzincir tabanlı şeffaf oy sayım sistemi";
    document.getElementById("language-selection").innerHTML = "EN";
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