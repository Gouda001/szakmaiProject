let popupdiv = document.getElementById("popup_bg");

function openPopupMenu() {
    popupdiv.style.display = "block";
}

function closePopupMenu() {
    popupdiv.style.display = "none";
}

function mobileNav() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}