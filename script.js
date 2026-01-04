const display = document.getElementById("display");
const savedtheme = localStorage.getItem("theme")
let current = "";

if (savedtheme == "dark") {
    document.body.classList.toggle("dark")
}

document.querySelectorAll(".buttons button").forEach(btn => {
    btn.addEventListener("click", () => handleClick(btn.dataset.value));
});

function handleClick(value) {
    if (value === "=") {
        try {
            current = eval(current).toString();
            display.textContent = current;
        }   catch {
            display.textContent = "Error";
            current = "";
        }
        return;
    }

    current += value;
    display.textContent = current;
}
function changeTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    } else {
    localStorage.setItem("theme", "light");
    }
}

function clearData() {
    localStorage.clear()
}