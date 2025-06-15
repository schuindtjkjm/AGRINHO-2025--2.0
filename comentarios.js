document.getElementById("add-comment").addEventListener("click", function() {
    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value;

    if (commentText) {
        var commentsDiv = document.getElementById("comments");
        
        // Cria um novo elemento de comentário
        var commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = commentText;

        // Adiciona um botão de apagar
        var deleteButton = document.createElement("span");
        deleteButton.className = "delete-button";
        deleteButton.textContent = " [Apagar]";
        
        deleteButton.addEventListener("click", function() {
            commentsDiv.removeChild(commentDiv);
        });

        commentDiv.appendChild(deleteButton);
        commentsDiv.appendChild(commentDiv);

        // Limpa o campo de entrada
        commentInput.value = '';
    } else {
        alert("Por favor, escreva um comentário!");
    }
});

