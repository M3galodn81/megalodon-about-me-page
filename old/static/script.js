document.addEventListener("DOMContentLoaded", function() {
    var musicButton = document.getElementById("music_button");
    var socialButton = document.getElementById("social_button");
    var miscButton = document.getElementById("misc_button");

    var musicMenu = document.getElementById("music");
    var socialMenu = document.getElementById("social");
    var miscMenu = document.getElementById("misc");

    var blur = document.getElementsByClassName("background")[0];

    function closeAllMenus() {
        if (musicMenu) musicMenu.classList.remove("show");
        if (socialMenu) socialMenu.classList.remove("show");
        if (miscMenu) miscMenu.classList.remove("show");
        
        musicMenu.style.display = "none";
        socialMenu.style.display = "none";
        miscMenu.style.display = "none";
        
        blur.classList.remove("blurred");
    }

    function toggleMenu(menu) {
        var isMenuVisible = menu.classList.contains("show");
        if (!isMenuVisible) {
            menu.style.display = "block";
            setTimeout(function() {
                menu.classList.add("show");
            }, 0); // Allow time for the display change to be processed
            blur.classList.add("blurred");
        }
    }
    musicButton.onclick = function(event) {
        toggleMenu(musicMenu);
        event.stopPropagation();
    };

    socialButton.onclick = function(event) {
        toggleMenu(socialMenu);
        event.stopPropagation();
    };

    miscButton.onclick = function(event) {
        toggleMenu(miscMenu);
        event.stopPropagation();
    };

    // Close the menu if clicked outside of it
    document.onclick = function(event) {
        if (!musicMenu.contains(event.target) && !socialMenu.contains(event.target) && !miscMenu.contains(event.target) &&
            event.target !== musicButton && event.target !== socialButton && event.target !== miscButton) {
            closeAllMenus();
        }
    };
});
