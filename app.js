'use strict'

const disciplinas = [
    {nome: 'PPDM', icon: 'instagram.png', cor: 'orange'},
    {nome: 'PRO', icon: 'youtube.png', cor: 'pink'},
    {nome: 'PWBE', icon: 'twitter.png', cor: 'lightblue'},
    {nome: 'PWFE', icon: 'web.png', cor: 'yellow'}
]



function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src =`./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.style = `--cor-hover: ${disciplina.cor}`
    novoItem.appendChild(novoSpan)

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)

const produtos = [
    {
      imagem: "produto1.jpg",
      nome: "Produto 1",
      descricao: "Descrição do produto 1",
      preco: "R$ 10,00",
      tamanhos: ["P", "M", "G"]
    },
    {
      imagem: "produto2.jpg",
      nome: "Produto 2",
      descricao: "Descrição do produto 2",
      preco: "R$ 20,00",
      tamanhos: ["P", "M", "G", "GG"]
    },
    {
      imagem: "produto3.jpg",
      nome: "Produto 3",
      descricao: "Descrição do produto 3",
      preco: "R$ 30,00",
      tamanhos: ["PP", "P", "M"]
    },
    {
      imagem: "produto4.jpg",
      nome: "Produto 4",
      descricao: "Descrição do produto 4",
      preco: "R$ 40,00",
      tamanhos: ["M", "G", "GG", "XG"]
    },
    {
      imagem: "produto5.jpg",
      nome: "Produto 5",
      descricao: "Descrição do produto 5",
      preco: "R$ 50,00",
      tamanhos: ["P", "M", "G"]
    }
  ];
  
  // ... (resto do código JavaScript)
  
  function criarCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card-produto");
  
    card.innerHTML = `
      <div class="header-card">
      </div>
      <footer>
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <div class="preco-avaliacao">
        <span class="preco">${produto.preco}</span>
      </div>
      <div class="tamanhos">
        <span>Tamanho:</span>
        <div class="opcoes-tamanho">
          ${produto.tamanhos.map(tamanho => `<span class="opcao-tamanho">${tamanho}</span>`).join("")}
        </div>
      </div>
      </footer>
      <button class="adicionar-carrinho">Adicionar ao carrinho</button>
    `;
  
    const main = document.querySelector("main");
    main.appendChild(card);
  }
  
  produtos.forEach(criarCard);
  