document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#name');
    const nomeDeUsuario = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repositorios = document.querySelector('#repositories');
    const seguidores = document.querySelector('#followers');
    const seguindo = document.querySelector('#following');
    const link = document.querySelector('#github-link');

    fetch('https://api.github.com/users/JC-Aires')
    .then(function(ret) {
        return ret.json();
    })
    .then(function(json) {
        nome.innerText = json.name;
        nomeDeUsuario.innerText = json.login;
        avatar.src = json.avatar_url;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
})