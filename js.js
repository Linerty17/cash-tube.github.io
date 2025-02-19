// Disable Ctrl+U and Right-Click Context Menu
document.addEventListener("keydown", function (e) {
    // Check if the user presses the Ctrl key along with U
    if ((e.ctrlKey && e.key === "u") || (e.metaKey && e.key === "u")) {
        e.preventDefault(); // Prevent default browser behavior
    }
});

// Disable Right-Click Context Menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Prevent the context menu from appearing
});
