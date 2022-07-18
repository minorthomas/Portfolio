function reveal() {
    const technologiesSection = document.querySelector(".technologies");

    const progressBarHtml = document.querySelector("#html");
    const progressBarCss = document.querySelector("#css");
    const progressBarReact = document.querySelector("#react");

    let windowHeight = window.innerHeight;
    let elementTop = technologiesSection.getBoundingClientRect().top;
    let elementVisible = 20; //px

    const value1 = "65%";
    const value2 = "32%";
    const value3 = "98%";

    if (elementTop < windowHeight - elementVisible) {
        progressBarHtml.style.width = value1;

        progressBarCss.style.width = value2;

        progressBarReact.style.width = value3;
    }

}

window.addEventListener("scroll", reveal);
