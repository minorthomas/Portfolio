const header = document.querySelector(".header");

const displayNavBar = `
    <nav class="header_navbar">
        <div class="header_navbar_logo">
            <a href="index.html">
                <img src="assets/logo/logo.png" height="30px" alt="Logo Minor Thomas">
                <p>Thomas</p>
            </a>
        </div>

        <button class="header_navbar_button" active="false">
        </button>

        <div class="header_navbar_links">
            <ul class="header_navbar_links_list">
                <li>
                    <a href="#">Projets</a>
                </li>
                <li>
                    <a href="#">Technologies</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
                <ul class="header_navbar_links_list_socials">
                    <li>
                        <a href="https://github.com/minorthomas" target="_blank">
                            <img src="assets/icons/github.png" alt="Github logo">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/minor-thomas/" target="_blank">
                            <img src="assets/icons/linkedin.png" alt="Github logo">
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
    </nav>
`

header.innerHTML = displayNavBar;


const btn = document.querySelector(".header_navbar_button");
const navbarLinks = document.querySelector(".header_navbar_links");



const displayHamburgerMenuLines = `
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="0" height="0">
        <path
            d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
    </svg>
`
const displayHamburgerMenuCross = `
    <svg fill="#c2c2c2" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" id="cross" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"/>
    </svg>
`



btn.innerHTML = displayHamburgerMenuLines;

btn.addEventListener("click", function () {
    const btnActive = btn.getAttribute("active");

    if (btnActive === "false") {
        navbarLinks.style.height = "100%";

        btn.setAttribute("active", "true");
        btn.style.zIndex = "2"
        btn.innerHTML = displayHamburgerMenuCross;

        btn.style.marginTop = "1em";
    } else if (btnActive === "true") {
        navbarLinks.style.height = "0%"

        btn.setAttribute("active", "false");
        btn.innerHTML = displayHamburgerMenuLines;
        btn.style.zIndex = "0"

        btn.style.marginTop = "0";
    } else {
        throw "Navbar attribute error: Active attribute not found";
    }
})