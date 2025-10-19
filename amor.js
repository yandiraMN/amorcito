document.addEventListener('DOMContentLoaded', function() {
    crearCorazonesFlotantes();
    animarEstrofas();
    contadorAmor();
    escribirTitulo();

    document.getElementById("sorpresa").addEventListener("click", () => {
        alert("Gracias por este año lleno de amor. Eres mi todo 💕");
    });
    const fecha = document.querySelector('.fecha');
    fecha.addEventListener('click', function() {
        alert('Te amo más cada día que pasa. Este año es solo el comienzo de nuestra historia eterna juntos. ❤️');
    });
});

function crearCorazonesFlotantes() {
    const container = document.body;
    const elements = ['❤️', '⭐', '🌸'];

    setInterval(() => {
        const element = document.createElement('div');
        element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = '100vh';
        element.style.fontSize = Math.random() * 20 + 10 + 'px';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1000';
        element.style.animation = 'flotar 8s linear forwards';

        container.appendChild(element);

        setTimeout(() => element.remove(), 8000);
    }, Math.random() * 1000 + 1500);
}

function animarEstrofas() {
    const estrofas = document.querySelectorAll('.estrofa');
    estrofas.forEach((estrofa, index) => {
        estrofa.style.opacity = '0';
        estrofa.style.transform = 'translateY(20px)';
        estrofa.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            estrofa.style.opacity = '1';
            estrofa.style.transform = 'translateY(0)';
        }, index * 800);
    });
}


function escribirTitulo() {
    const titulo = document.querySelector('h1');
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    
    let i = 0;
    const intervalo = setInterval(() => {
        titulo.textContent += textoOriginal[i];
        i++;
        if (i >= textoOriginal.length) clearInterval(intervalo);
    }, 100);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes flotar {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    .estrofa:hover p { color:rgb(97, 3, 50); }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("sorpresa");
    const galeria = document.querySelector(".galeria");

    boton.addEventListener("click", () => {
        galeria.style.display = "block"; 
        boton.style.display = "none";    
    });
});
