
function criarItemCardapio(titulo, descricao, foto) {
    
    const divItemCardapio = document.createElement('div');
    divItemCardapio.className = 'item-cardapio';
    // colocar a classe
    
    const h3Titulo = document.createElement('h3');
    h3Titulo.textContent = titulo;

    const pDescicao = document.createElement('p');
    pDescicao.textContent = descricao;
    pDescicao.className = 'descricao';

    const img = document.createElement('img');
    img.src = foto;
    img.className = 'img-item';

    const divC = document.getElementById('cardapio');

    divItemCardapio.appendChild(h3Titulo);
    divItemCardapio.appendChild(pDescicao);
    divItemCardapio.appendChild(img);

    divC.appendChild(divItemCardapio);
}

criarItemCardapio('Bolo de Chocolate', 'o padrao amado por todos',
     'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/05/bolo_chocolate_leite.jpg');
