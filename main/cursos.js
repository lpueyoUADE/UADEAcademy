let favoritos = document.querySelectorAll(".cursos .favorito");

for (const boton of favoritos) {
    boton.addEventListener('click',(event) => {
        boton.classList.toggle('activo');
        boton.classList.toggle('bx-heart');
        boton.classList.toggle('bxs-heart');
    });
}