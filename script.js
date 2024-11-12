function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector('.threat-detection');
    
    // Toggle the 'active' class on the sidebar to show/hide it
    sidebar.classList.toggle("active");

    // Adjust the margin-left of the content when the sidebar is toggled
    if (sidebar.classList.contains("active")) {
        content.style.marginLeft = "250px"; // When sidebar is open, shift content right
    } else {
        content.style.marginLeft = "50px"; // When sidebar is closed, move content slightly to the right
    }

    // Toggle the "close" state on the menu button for animation
    document.getElementById("menu-button").classList.toggle("close");
}
