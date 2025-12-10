function toggleProject(card) {
    card.classList.toggle("active");

    const items = card.querySelectorAll(".project-content p");

    items.forEach((item, index) => {
        item.style.animationDelay = card.classList.contains("active")
            ? (index * 0.1) + "s"
            : "0s";
    });
}
