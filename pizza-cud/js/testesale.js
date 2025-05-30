

var ctx = document.getElementById('salesChart').getContext('2d');

 const data =  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Catupiry',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#ff5e07'],
        borderColor: 'black',
        borderWidth: 2,
    },{
        label: 'Calabresa',
        data: [2, 10, 15, 10, 15, 10],
        backgroundColor: ['#fde9de'],
        borderColor: 'black',
        borderWidth: 2,
    },{
        label: 'Mussarela',
        data: [10, 15, 10, 15, 10, 15],
        backgroundColor: ['#ffc107'],
        borderColor: 'black',
        borderWidth: 2,
    },{
        label: 'Toscana',
        data: [10, 15, 10, 15, 10, 15],
        backgroundColor: ['#dc3545'],
        borderColor: 'black',
        borderWidth: 2,
    }]
 }

const salesChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vendas de Pizzas Semestrais',
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
    });
});

function removeSalesChart() {
    alert("teste de btn")
}
