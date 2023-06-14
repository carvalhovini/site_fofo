const photos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg'
    // Adicione mais nomes de arquivos de fotos, se necessário
];

let lastPhotoIndex = -1; // Índice da última foto exibida

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function cascadePhotos() {
    const photoElements = document.getElementsByClassName('photo');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    Array.from(photoElements).forEach((photo) => {
        const randomX = getRandomPosition(screenWidth);
        const randomY = getRandomPosition(screenHeight);

        photo.style.left = `${randomX}px`;
        photo.style.top = `${randomY}px`;
    });
}

function getRandomPhotoIndex() {
    return Math.floor(Math.random() * photos.length);
}

const captions = [
    'Nossa primeira viagem juntos para a Chapada dos Veadeiros!<br>Foi um momento incrível que vou recordar para sempre.<br>Não houve sequer um momento ruim, e pude admirar de perto toda a sua beleza.',
    'No dia do aniversário dela, fomos para o Pontão do Lago tomar um açaí.<br>Ficamos até tarde na beira do lago,<br>conversando e aproveitando cada segundo juntos.',
    'Nossa primeira Copa do Mundo juntos! Nessa foto,<br>estávamos na casa da Giulia antes do Brasil levar uma surra no jogo kkkkk.<br>Mesmo assim, foi um momento divertido e especial.',
    'Quando completamos 6 meses juntos, fomos comemorar em um café da manhã especial.<br>Te dei um buquê e saímos para almoçar também.<br>Cada momento ao seu lado é uma celebração.',
    'Uma foto nossa na Campus Party, em um estádio vazio, sem ninguém para estragar a vista.<br>Foram dias incríveis, cheios de diversão e boas lembranças.<br>Com você, tudo fica mais especial.'
    // Adicione mais textos correspondentes às fotos
];

function showRandomPhoto() {
    const randomIndex = getRandomPhotoIndex();
    const photo = photos[randomIndex];
    const caption = captions[randomIndex];

    const mainDiv = document.getElementById('main');
mainDiv.innerHTML = `
    <div class="polaroid">
        <img src="${photo}" alt="Nossa foto">
        <div class="caption">${caption}</div>
    </div>
    <button onclick="location.reload()">Voltar para a página inicial</button>
`;

}

window.addEventListener('DOMContentLoaded', cascadePhotos);

window.addEventListener('DOMContentLoaded', cascadePhotos);

