// Show the Home page
function showHome() {

    document.getElementById("homePage").style.display = "block";

    document.getElementById("reviewPage").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Show the Movie Review page
function showReview() {

    document.getElementById("homePage").style.display = "none";

    document.getElementById("reviewPage").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Toggle Dark and Light Mode
function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("light-mode")) {

        button.innerHTML = "🌙 Dark";

    } else {

        button.innerHTML = "☀️ Light";

    }
}