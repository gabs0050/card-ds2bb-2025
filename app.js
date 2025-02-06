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