# Trabalho Prático - Semana 11

Nesta atividade, vamos dar continuidade ao projeto desenvolvido ao longo deste semestre, acrescentando a página de detalhes da aplicação.

Imagine que a página principal (home-page) mostre uma visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado para a página de detalhes. A página de detalhes vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome: Thays Caruline Durães de Assis
- Matrícula: 927818
- Descreva brevemente seu projeto:Meu projeto consiste em um catálogo de animes desenvolvido com HTML, CSS e JavaScript. A página inicial apresenta cards dinâmicos com informações dos animes cadastrados em uma estrutura JSON. Ao clicar em um anime, o usuário é direcionado para uma página de detalhes, onde são exibidas informações completas sobre o item selecionado. O projeto utiliza manipulação do DOM, query string para navegação entre páginas e geração dinâmica de conteúdo com JavaScript.


## Prints do trabalho

<<  COLOQUE A IMAGEM - HOME-PAGE - AQUI >>
![Home Page](img/inicio.png)

<<  COLOQUE A IMAGEM - TELA DE DETALHES - AQUI >>
 ![Página de Detalhes](img/detalhe.png)


## Dados em JSON
Inclua abaixo a estrutura de dados definida para o seu projeto, apresentando pelo menos dois exemplos de registros em formato JSON.

const catalogo = [
    {
        id: 1,
        titulo: "Naruto",
        tipo: "serie",
        ano: 2002,
        generos: ["ação", "aventura"],
        nota: 9.0,
        protagonista: "Naruto Uzumaki",
        episodios: 720,
        imagem: "img/naruto.png"
    },

    {
        id: 2,
        titulo: "Attack on Titan",
        tipo: "serie",
        ano: 2013,
        generos: ["ação", "drama"],
        nota: 9.5,
        protagonista: "Eren Yeager",
        episodios: 89,
        imagem: "img/aot.png"
    },

    {
        id: 3,
        titulo: "Hunter x Hunter",
        tipo: "serie",
        ano: 2011,
        generos: ["aventura", "fantasia"],
        nota: 9.4,
        protagonista: "Gon Freecss",
        episodios: 148,
        imagem: "img/h-x-h.png"
    },
