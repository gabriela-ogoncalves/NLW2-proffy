// Procurar o botão
document.querySelector("#add-time")
// Quando clicar nio botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos, mas quais?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?
    const fieldsInput = document.querySelectorAll('input');

    // Para cada campo, limpar.
    fieldsInput.forEach((field) => {
        // pegar o field do momento e limpar
        field.value = "";
    })

    // Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}