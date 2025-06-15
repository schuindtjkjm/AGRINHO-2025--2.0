document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-comentario');
  const nomeInput = document.getElementById('nome');
  const mensagemInput = document.getElementById('mensagem');
  const lista = document.getElementById('lista-comentarios');

  let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

  comentarios.forEach((c, index) => adicionarComentario(c.nome, c.mensagem, index));

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (nome && mensagem) {
      const novoComentario = { nome, mensagem };
      comentarios.push(novoComentario);
      localStorage.setItem('comentarios', JSON.stringify(comentarios));
      adicionarComentario(nome, mensagem, comentarios.length - 1);
      form.reset();
    }
  });

  function adicionarComentario(nome, mensagem, index) {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `
      <strong>${nome}</strong>
      <p>${mensagem}</p>
      <button class="apagar" data-index="${index}">Apagar</button>
    `;
    lista.prepend(div);

    // Botão de apagar
    div.querySelector('.apagar').addEventListener('click', function () {
      const idx = parseInt(this.getAttribute('data-index'));
      comentarios.splice(idx, 1);
      localStorage.setItem('comentarios', JSON.stringify(comentarios));
      location.reload(); // recarrega a página pra atualizar tudo (é mais simples)
    });
  }
});




const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-17T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();