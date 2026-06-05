// DADOS (JSON)

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

    {
        id: 4,
        titulo: "Black Clover",
        tipo: "serie",
        ano: 2017,
        generos: ["ação", "fantasia"],
        nota: 8.7,
        protagonista: "Asta",
        episodios: 170,
        imagem: "img/black-clover.png"
    },

    {
        id: 5,
        titulo: "My Hero Academia",
        tipo: "serie",
        ano: 2016,
        generos: ["super-herói"],
        nota: 8.5,
        protagonista: "Izuku Midoriya",
        episodios: 159,
        imagem: "img/my-hero.png"
    },

    {
        id: 6,
        titulo: "Akame ga Kill",
        tipo: "serie",
        ano: 2014,
        generos: ["ação", "fantasia"],
        nota: 8.8,
        protagonista: "Tatsumi",
        episodios: 24,
        imagem: "img/akame.png"
    },

    {
        id: 7,
        titulo: "Solo Leveling",
        tipo: "serie",
        ano: 2024,
        generos: ["ação", "fantasia"],
        nota: 9.2,
        protagonista: "Sung Jin-Woo",
        episodios: 25,
        imagem: "img/solo-leveling.png"
    },

    {
        id: 8,
        titulo: "Gachiakuta",
        tipo: "serie",
        ano: 2025,
        generos: ["ação", "ficção"],
        nota: 8.9,
        protagonista: "Rudo",
        episodios: 12,
        imagem: "img/gachiakuta.png"
    },

    {
        id: 9,
        titulo: "Death Note",
        tipo: "serie",
        ano: 2006,
        generos: ["suspense"],
        nota: 9.6,
        protagonista: "Light Yagami",
        episodios: 37,
        imagem: "img/death-note.png"
    }
];


// HOME PAGE

const catalogoDiv = document.getElementById("catalogo");

if (catalogoDiv) {

    catalogo.forEach(anime => {

        catalogoDiv.innerHTML += `

            <div class="card">

                <img src="${anime.imagem}" alt="${anime.titulo}">

                <h2>${anime.titulo}</h2>

                <p><strong>Tipo:</strong> ${anime.tipo}</p>

                <p><strong>Ano:</strong> ${anime.ano}</p>

                <p><strong>Nota:</strong> ${anime.nota}</p>

                <p><strong>Protagonista:</strong> ${anime.protagonista}</p>

                <a href="detalhes.html?id=${anime.id}">
                    Ver detalhes
                </a>

            </div>
        `;
    });
}



// PÁGINA DE DETALHES

const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

const anime = catalogo.find(item => item.id === id);

const detalhes = document.getElementById("detalhes");


if (detalhes && anime) {

    detalhes.innerHTML = `

        <div class="detalhe-card">

            <img src="${anime.imagem}" alt="${anime.titulo}">

            <h1>${anime.titulo}</h1>

            <p><strong>Tipo:</strong> ${anime.tipo}</p>

            <p><strong>Ano:</strong> ${anime.ano}</p>

            <p><strong>Gêneros:</strong> ${anime.generos.join(", ")}</p>

            <p><strong>Nota:</strong> ${anime.nota}</p>

            <p><strong>Protagonista:</strong> ${anime.protagonista}</p>

            <p><strong>Episódios:</strong> ${anime.episodios}</p>

            <br>

            <a href="index.html">
                Voltar para o catálogo
            </a>

        </div>
    `;
}


