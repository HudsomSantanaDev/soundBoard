let audios = [
    {
        legenda: "Desbeijar minha boca", caminho: "audio/henriqueejulianooficial-desbeijar-minha-boca-c2f932ee.mp3"
    },
    {
        legenda: "Garrafas vazias", caminho: "audio/henriqueejulianooficial-garrafas-vazias-f5cf6a61.mp3"
    },
    {
        legenda: "Quem pegou pegou", caminho: "audio/henriqueejulianooficial-quem-pegou-pegou-b0f3933d.mp3"
    },
    {
        legenda: "Dengo", caminho: "audio/joaogomescantor-dengo-802f8e08.mp3"
    },
    {
        legenda: "MONTAGEM BAILÃO", caminho: "audio/MONTAGEM BAILÃO.mp3"
    },
    {
        legenda: "Nada Nada", caminho: "audio/Nada Nada (Super Slowed).mp3"
    },
    {
        legenda: "Beijo pra jogo", caminho: "audio/tarcisiodoacordeon-beijo-pra-jogo-2f951c5f.mp3"
    },
    {
        legenda: "A gente fez amor", caminho: "audio/unhapintadaoficial-01-a-gente-fez-amor-2-19153414.mp3"
    },
    {
        legenda: "A gente fez amor", caminho: "audio/unhapintadaoficial-01-a-gente-fez-amor-2-19153414.mp3"
    },

];
let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i = 0; i < 9; i++) {
    //legenda vai devolver um array pelo querySelector
    legendas[i].textContent = audios[i].legenda;
    //adicionado dtata-item ao audios
    botoes[i].setAttribute('data-item', i);
}
let audioTag = document.querySelector('audio');

//pega a lista de botoes 
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        })
    });
});