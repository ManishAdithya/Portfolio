document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const textToType = `[^_^] Sup folks ? I'm Manish Adithya\n\nWelcome to my World !\n\n$ I am an Android Security Researcher\n$ I am an AI developer\n$ I am a chess enthusiast\n$ I am a die hard Anime fan `;
    let index = 0;

    function typeText() {
        const cursorElement = document.querySelector('.cursor');
        if (cursorElement) {
            cursorElement.remove();
        }

        if (index < textToType.length) {
            if (textToType.charAt(index) === '\n') {
                if (textToType.charAt(index + 1) === '\n') {
                    textElement.innerHTML += '<br><br>';
                    index++;
                } else {
                    textElement.innerHTML += '<br>';
                }
            } else if (textToType.charAt(index) === '$') {
                textElement.innerHTML += `<span style="color: #057303;">$</span>`;
            } else {
                textElement.innerHTML += textToType.charAt(index);
            }

            index++;
            textElement.innerHTML += '<span class="cursor">|</span>';

            setTimeout(typeText, 100);
        } else {
            document.querySelector('.cursor').style.display = 'none';
        }
    }

    typeText();

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
