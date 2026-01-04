const display = document.getElementById("display");
let current = "";

document.querySelectorAll(".buttons button").forEach(btn => {
    btn.addEventListener("touchstart", () => handleClick(btn.dataset.value));
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
function toggledark() {
    document.body.classList.toggle("dark");
}