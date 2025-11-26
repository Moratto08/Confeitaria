//Vamos criar os elementos do HTML com JavaScript Dinamicamente

function criarItemCardapio(titulo, descricao, foto){
const divItemCardapio = document.createElement('div')
divItemCardapio.className = 'item-cardapio'
//colocar a classe

cosnt h3Titulo = document.createElement('h3')
h3Titulo.textContent = titulo

const pDescricao = document.createElement('p')
pDescricao.className = 'descricao'
// adicionar a classe

const img = document.createElement('img')
img.src = foto
img.className = 'img-item'

//Adicionando os elementos na div mãe
const divC = document.getElementById('cardapio')

divItemCardapio.appendChild(h3Titulo);
divItemCardapio.appendChild(pDescricao);
divItemCardapio.appendChild(img);

divC.appendChild(divItemCardapio)

}

// Execurando a função
criarItemCardapio('Bolo de chocolate','Um clássico irresistível com
            camadas de chocolate','https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/05/bolo_chocolate_leite.jpg')