

function popularTable(tableId, dataObject){
    const tableBody = document.getElementById(tableId)?.getElementsByTagName('tbody')[0];
    if(!tableBody) {
        console.error(`Elemento tbody da tabela com ID '${tableId}' nao encontrado!`);
        return;
    }
    if (!dataObject?.datasets) {
        console.error('Dados não disponíveis');
        return;
    }
    tableBody.innerHTML = '';

    dataObject.datasets.forEach((dataset, i) => {
        const row = tableBody.insertRow();
        const cell= row.insertCell();
        cell.textContent = dataset.label;

        dataset.data.forEach((sale) => {
            const saleCell = row.insertCell();
            saleCell.textContent = sale;
        })
    })
}