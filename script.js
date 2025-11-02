// =========================
// Bright Sprouts Navigation Toggle 
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("main-nav");

    if (!btn || !nav) {
        console.error("❌ Menu button or nav not found in DOM.");
        return;
    }

    console.log("✅ Script loaded. Ready to toggle menu.");

    function toggleNav() {
        const isOpen = nav.classList.toggle("open");
        btn.classList.toggle("open", isOpen);
        btn.setAttribute("aria-expanded", isOpen);
        console.log(isOpen ? "🔓 Menu opened" : "🔒 Menu closed");
    }

    // Toggle on button click
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleNav();
    });

    // Close when clicking a link
    nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            nav.classList.remove("open");
            btn.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
            console.log("🧩 Closed from link click");
        }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !btn.contains(e.target)) {
            nav.classList.remove("open");
            btn.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
            console.log("🧩 Closed from outside click");
        }
    });

    // Close when pressing Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            nav.classList.remove("open");
            btn.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
            console.log("🧩 Closed from Escape key");
        }
    });
});