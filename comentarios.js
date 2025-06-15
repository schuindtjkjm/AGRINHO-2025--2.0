// Gera um ID aleatório
function gerarId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Identificador único do usuário no navegador
let userId = localStorage.getItem('userId');
if (!userId) {
  userId = gerarId();
  localStorage.setItem('userId', userId);
}

// Carrega os comentários do LocalStorage
let comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

const form = document.getElementById('form-comentario');
const lista = document.getElementById('lista-comentarios');

// Exibe os comentários na tela
function mostrarComentarios() {
  lista.innerHTML = '';
  comentarios.forEach(comentario => {
    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = '<strong>${comentario.nome}</strong><p>${comentario.mensagem}</p>';

    if (comentario.autorId === userId) {
      const botao = document.createElement('button');
      botao.textContent = 'Apagar';
      botao.className = 'btn-apagar';
      botao.onclick = () => apagarComentario(comentario.id);
      div.appendChild(botao);
    }

    lista.prepend(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome && mensagem) {
    const novoComentario = {
      id: gerarId(),
      nome,
      mensagem,
      autorId: userId
    };

    comentarios.push(novoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
    mostrarComentarios();
    form.reset();
  } else {
    alert('Preencha tudo, meu bem!');
  }
});

function apagarComentario(id) {
  comentarios = comentarios.filter(c => c.id !== id);
  localStorage.setItem('comentarios', JSON.stringify(comentarios));
  mostrarComentarios();

  const botao = document.createElement('button');
  botao.textContent = 'x';
  botao.className = 'deletar';
  botao.onclick = () => li.remove();

  li.appendChild(botao);
  lista.appendChild(li);
  form.reset();
}



document.getElementById('addComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;

    if (commentText) {
        const commentsSection = document.getElementById('commentsSection');

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        commentDiv.innerHTML = `
            ${commentText} 
            <span class="deleteButton">X</span>
        `;

        commentsSection.appendChild(commentDiv);
        commentInput.value = '';

        // Adiciona funcionalidade para apagar o comentário
        const deleteButton = commentDiv.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function() {
            commentsSection.removeChild(commentDiv);
        });
    }
});
