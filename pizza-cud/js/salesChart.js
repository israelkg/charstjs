

var ctx = document.getElementById('salesChart').getContext('2d');

const dataS =  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Catupiry',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#ff5e07'],
        borderColor: 'black',
        borderWidth: 1,
    },{
        label: 'Calabresa',
        data: [2, 10, 15, 10, 15, 10],
        backgroundColor: ['#fde9de'],
        borderColor: 'black',
        borderWidth: 1,
    },{
        label: 'Mussarela',
        data: [10, 15, 10, 15, 10, 15],
        backgroundColor: ['#ffc107'],
        borderColor: 'black',
        borderWidth: 1,
    },{
        label: 'Toscana',
        data: [10, 15, 10, 15, 10, 15],
        backgroundColor: ['#dc3545'],
        borderColor: 'black',
        borderWidth: 1,
    }]
}

const salesChart = new Chart(ctx, {
    type: 'bar',
    data: dataS,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vendas de Sabores Semestrais',
                font: {
                    size: 30,
                    family: 'Arial',
                },
                color: 'black',
                padding: {
                    top: 10,
                    bottom: 20
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 15,
                        family: 'Arial',
                    },
                    color: 'black',
                    padding: 10,
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: true,
                }
            }
        }
    }
})


// MODAL
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("openAddSaleModal").addEventListener("click", () => {
        document.getElementById("addModalSale").style.display = "flex";
    });
    document.getElementById("openUpdateSaleModal").addEventListener("click", () => {
        document.getElementById("updateModalSale").style.display = "flex";
        fillSelectFlavorUpdate();
    });
    document.getElementById("openRemoveSaleModal").addEventListener("click", () => {
        document.getElementById("removeModalSale").style.display = "flex";
        fillSelectFlavorRemove()
    });
});

// MODAL ADD
const flavorPizza = document.getElementById('flavorPizza');
const quantdPizza = document.getElementById('quantdPizza');
const colorPizza = document.getElementById('colorPizza');
const monthPizza = document.getElementById('monthSale');


function confirmBtn(){
    const newFlavor = flavorPizza.value;
    const newQuantdad = quantdPizza.value;
    const newColor = colorPizza.value;
    const monthSelect = monthPizza.value.trim();

    const array = generateChartDataArray(monthSelect, parseInt(newQuantdad), dataS.labels, 6);
    const indexMonth = dataS.labels.indexOf(monthSelect);

    const flavorExists = dataS.datasets.some(dataset => dataset.label == newFlavor);
    const colorExists = dataS.datasets.some(dataset => dataset.backgroundColor.includes(newColor));

    if(newFlavor == "" || newColor == "" || newQuantdad == "" || newQuantdad <= 0){
        alert("Preencha todos os campos!")
    }else if (flavorExists){
        alert("This flavor is already in the chart")
    } else if(colorExists){
        alert("This color is already in the chart");
    } else {
        dataS.datasets.push({
            label: newFlavor,
            data: array,
            backgroundColor: [newColor],
            borderColor: 'black',
            borderWidth: 1,
        })
        salesChart.update();
        // fillSelectFlavorUpdate();
        // fillSelectFlavorUpdate();
        document.getElementById('addModalSale').style.display = 'none';
    }
}

// MODAL UPDATE
function fillSelectFlavorUpdate() {
    const select = document.getElementById('updateFlavorSelect');
    select.innerHTML = "<option value=''> Select a flavor</option>";

    dataS.datasets.forEach(dataset => {
        const option = document.createElement('option');
        option.value = dataset.label;
        option.textContent = dataset.label;
        select.appendChild(option);
    })
}

function confirmBtnUp(){
    const newColorUp = document.getElementById('colorUp').value;
    const newQuantdadUp = document.getElementById('quantidadUp').value;
    const flavorSelect = document.getElementById('updateFlavorSelect').value;
    const listMonth = document.getElementById('monthSaleUp').value.trim();

    const array = generateChartDataArray(listMonth, parseInt(newQuantdadUp), dataS.labels, 6);
    const indexMonth = dataS.labels.indexOf(listMonth);

    if(newColorUp == "" || newQuantdadUp == "" || newQuantdadUp <= 0){
        alert("Preencha todos os campos!");
    } else {
        dataS.datasets.forEach(dataset => {
            if(dataset.label == flavorSelect){
                dataset.backgroundColor = [newColorUp];
                dataset.data[indexMonth] = parseInt(newQuantdadUp);
            }
        })
        salesChart.update();
        document.getElementById('updateModalSale').style.display = 'none';
    }
}


// MODAL REMOVE
function fillSelectFlavorRemove(){
    const select = document.getElementById('removeFlavorSelect');
    select.innerHTML = "<option value=''> Select a flavor</option>";
    dataS.datasets.forEach(dataset => {
        const option = document.createElement('option');
        option.value = dataset.label;
        option.textContent = dataset.label;
        select.appendChild(option);
        }
    )
}

function confirmBtnRemove() {
    const flavorSelect = document.getElementById('removeFlavorSelect').value;
    dataS.datasets.forEach(dataset => {
        if(dataset.label == flavorSelect){
            dataS.datasets.splice(dataS.datasets.indexOf(dataset), 1);
            salesChart.update();
        }
    })

    document.getElementById('removeModalSale').style.display = 'none';
}
