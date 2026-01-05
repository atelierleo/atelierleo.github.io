const display = document.getElementById("display");
const savedtheme = localStorage.getItem("theme")
let current = "";

if (savedtheme == "dark") {
    document.body.classList.toggle("dark")
}

function changeTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    } else {
    localStorage.setItem("theme", "light");
    }
}

