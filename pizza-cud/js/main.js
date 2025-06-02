

document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-close");
            document.getElementById(modalId).style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

function generateChartDataArray(labelSelecionado, valor, listaDeLabels, tamanhoArray){
    const indexOf = listaDeLabels.indexOf(labelSelecionado);
    if(indexOf == -1){
        alert("Index nao foi encontrado");
        return;
    }
    const array = Array(tamanhoArray).fill(0);
    array[indexOf] = valor;
    return array
}
