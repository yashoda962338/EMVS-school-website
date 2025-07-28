document.addEventListener("DOMContentLoaded", function () {
    loadLanguage();
});

function loadLanguage() {
    let lang = localStorage.getItem("language") || "en";
    applyLanguage(lang);
}

function applyLanguage(lang) {
    let translations = {
        en: {
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-gallery": "Gallery",
            "nav-events": "Events",
            "nav-contact": "Contact",
            "about-title": "About Our School",
            "mission-title": "Our Mission",
            "mission-text": "To empower students with knowledge, creativity, and leadership skills to excel in their future endeavors.",
            "vision-title": "Our Vision",
            "vision-text": "To be a leading institution in shaping young minds and fostering innovation in education."
        },
        mr: {
            "nav-home": "मुख्यपृष्ठ",
            "nav-about": "आमच्याबद्दल",
            "nav-gallery": "गॅलरी",
            "nav-events": "कार्यक्रम",
            "nav-contact": "संपर्क",
            "about-title": "आमच्या शाळेबद्दल",
            "mission-title": "आमचे ध्येय",
            "mission-text": "विद्यार्थ्यांना ज्ञान, सर्जनशीलता आणि नेतृत्व कौशल्याने सक्षम करणे.",
            "vision-title": "आमची दृष्टी",
            "vision-text": "तरुण मन घडविणारी आणि शिक्षणात नावीन्य आणणारी आघाडीची संस्था बनणे."
        }
    };

    for (let key in translations[lang]) {
        let element = document.getElementById(key);
        if (element) {
            element.innerText = translations[lang][key];
        }
    }
}

// भाषा निवडीचा प्रॉम्प्ट (फक्त पहिल्यांदा विचारेल)
if (!localStorage.getItem("language")) {
    let userLang = confirm("तुम्हाला वेबसाइट मराठीत पहायची आहे का?") ? "mr" : "en";
    localStorage.setItem("language", userLang);
    applyLanguage(userLang);
}
