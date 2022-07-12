function reveal() {
    const technologiesSection = document.querySelector(".technologies");

    const progressBarHtml = document.querySelector("#html");
    const progressBarCss = document.querySelector("#css");
    const progressBarReact = document.querySelector("#react");

    let windowHeight = window.innerHeight;
    let elementTop = technologiesSection.getBoundingClientRect().top;
    let elementVisible = 0;

    const value1 = "65%";
    const value2 = "32%";
    const value3 = "98%";

    if (elementTop < windowHeight - elementVisible) {
        progressBarHtml.style.transition = "2s";
        progressBarHtml.style.width = value1;

        progressBarCss.style.transition = "2s";
        progressBarCss.style.width = value2;

        progressBarReact.style.transition = "2s";
        progressBarReact.style.width = value3;
    }

}

window.addEventListener("scroll", reveal);
