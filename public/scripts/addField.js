// Procurar o botão
document.querySelector("#add-time")
// Quando clicar nio botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos, mas quais?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?
    const fieldsInput = newFieldContainer.querySelectorAll('input');

    // Para cada campo.
    fieldsInput.forEach((field) => {
        if (field.value === "") {
            // se tiver vazio, obrigar usuário a preencher os dados
            alert('Preencha os campos para adicionar novos horários')
        } else {
            // pegar o field do momento e limpar
            field.value = "";
            // Colocar na pagina
            document.querySelector("#schedule-items").appendChild(newFieldContainer)
        }
    })
}
