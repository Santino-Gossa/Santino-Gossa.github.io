// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Animación de fade-in para todas las secciones al cargar
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 500);
    });

    // Animación de slide-in para las tarjetas de servicios
    const serviceCards = document.querySelectorAll(".servicio-tarjeta");
    serviceCards.forEach((card, index) => {
        card.style.transform = "translateY(50px)";
        card.style.opacity = 0;
        card.style.transition = "transform 0.8s ease, opacity 0.8s ease";
        setTimeout(() => {
            card.style.transform = "translateY(0)";
            card.style.opacity = 1;
        }, index * 300);
    });

    // Animación de hover en los botones
    const buttons = document.querySelectorAll(".cta-button, .linkedin-button, .Instagram-button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
            button.style.transition = "transform 0.3s, box-shadow 0.3s";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Animación de zoom para los videos al hacer hover
    const videos = document.querySelectorAll("iframe");
    videos.forEach((video) => {
        video.style.transition = "transform 0.3s";
        video.addEventListener("mouseover", () => {
            video.style.transform = "scale(1.02)";
        });

        video.addEventListener("mouseout", () => {
            video.style.transform = "scale(1)";
        });
    });

    // Animación al hacer scroll - efecto parallax
    window.addEventListener("scroll", () => {
        const heroSection = document.querySelector(".hero");
        const scrolled = window.scrollY;
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
});
