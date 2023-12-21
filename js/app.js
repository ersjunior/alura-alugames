/* Tentando sozinho 

function alterarStatus() {
    let statusJogo = document.querySelector('input').value
}
*/

// correção aula

function alterarStatus(id) {
    let gameClinado = document.getElementById(`game-${id}`);
    let imagem = gameClinado.querySelector('.dashboard__item__img');
    let botao = gameClinado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClinado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        alert(`Você alugou o jogo ${nomeJogo.textContent}`);
    } else {
        alert(`Você devolveu o jogo ${nomeJogo.textContent}`);        
    }
}