

const modeButton = document.querySelector(".modeButton");
const logo = document.querySelector(".logo");


modeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode = document.body.classList.contains("light-mode");

    if(lightMode){
        logo.src = "img/logo-tecboard-preto.png";
        modeButton.src = "img/dark-mode-button.png";
    }else{
        logo.src = "img/logo-tecboard-branco.png";
        modeButton.src = "img/light-mode-button.png";
    }

});






