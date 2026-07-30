document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Função para alternar o estado do menu hambúrguer
    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Bloqueia a rolagem da página quando o menu mobile estiver visível
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    };

    // Ouvinte do clique no botão hambúrguer
    menuToggle.addEventListener('click', toggleMenu);

    // Fecha o menu automaticamente ao clicar em um link interno
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fecha o menu caso a janela seja redimensionada para desktop com o menu aberto
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
