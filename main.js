let button = document.querySelector('#search');
let nome = document.querySelector('#name');
let height = document.querySelector('#height');
let maas = document.querySelector('#maas');
let birthYear = document.querySelector('#birth-year');

function getInfo() {
    let randomNumber = Math.floor((Math.random() + 25) + 2);
    let apiUrl = 'https://swapi.dev/api/people1/' + randomNumber;

    axios.get(apiUrl).then(function (response) {
        updateInfo(response.data);
    }).catch(e => {
        updateInfoWithError();
    })
}

function updateInfo(data) {
    nome.innerText = data.nome;
    height.innerText = `Altura: ${data.height}`;
    maas.innerText = `Massa: ${data.maas}`;
    birthYear.innerText = `Ano de Nascimento: ${data.birth_year}`;
}

function updateInfoWithError() {
    nome.innerText = 'Indisponível!';
    height.innerText = 'Indisponível!';
    maas.innerText = 'Indisponível!';
    birthYear.innerText = 'Indisponível!';
}

button.addEventListener('click', getInfo);