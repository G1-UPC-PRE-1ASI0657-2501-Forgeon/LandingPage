let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    const languageSwitcher = document.querySelector('.language-switcher');
    languageSwitcher.textContent = currentLanguage.toUpperCase();
}