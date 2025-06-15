document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-comentario');
  const nomeInput = document.getElementById('nome');
  const mensagemInput = document.getElementById('mensagem');
  const lista = document.getElementById('lista-comentarios');

  // Carregar comentários salvos
  const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
  comentarios.forEach(c => adicionarComentario(c.nome, c.mensagem));

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (nome && mensagem) {
      adicionarComentario(nome, mensagem);

      // Salvar no localStorage
      comentarios.push({ nome, mensagem });
      localStorage.setItem('comentarios', JSON.stringify(comentarios));

      form.reset();
    }
  });

  function adicionarComentario(nome, mensagem) {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `<strong>${nome}</strong><p>${mensagem}</p>`;
    lista.prepend(div);
  }
});
