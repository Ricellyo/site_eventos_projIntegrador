const btns = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');
const limparFiltrosBtn = document.getElementById('limparFiltros');

btns.forEach(btn => btn.addEventListener('change', filtrarEventos));
limparFiltrosBtn.addEventListener('click', limparFiltros);

function filtrarEventos() {
    const filtrosAtivos = Array.from(document.querySelectorAll('.btn:checked')).map(btn => btn.value);

    cards.forEach(card => {
        const filtrosCard = card.dataset.filtro.split(' ');

        if (filtrosAtivos.some(filtro => filtrosCard.includes(filtro))) {
             card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function limparFiltros() {
    btns.forEach(btn => {
        btn.checked = false;
    });
    cards.forEach(card => {
        card.style.display = 'flex';
    });
}