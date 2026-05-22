

const modeButton = document.querySelector(".modeButton");
const logo = document.querySelector(".logo");


modeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode = document.body.classList.contains("light-mode");

    if(lightMode){
        logo.src = "assets/images/logo-tecboard-preto.png";
        modeButton.src = "assets/images/dark-mode-button.png";
    }else{
        logo.src = "assets/images/logo-tecboard-branco.png";
        modeButton.src = "assets/images/light-mode-button.png";
    }

});






