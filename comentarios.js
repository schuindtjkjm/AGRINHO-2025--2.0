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
