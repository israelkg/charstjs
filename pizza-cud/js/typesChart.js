

var ctx = document.getElementById('typesChart').getContext('2d');

const typesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Delivery',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#007bff'],
            borderColor: ['#2b639f'],
            borderWidth: 2,
        },{
            label: 'Balcao',
            data: [2, 10, 15, 10, 15, 10],
            backgroundColor: ['#ff0018'],
            borderColor: ['#a62734'],
            borderWidth: 2,
        },{
            label: 'Presencial',
            data: [10, 15, 10, 15, 10, 15],
            backgroundColor: ['#00ff3c'],
            borderColor: ['#28a745'],
            borderWidth: 2,
        }]
    },
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
    document.getElementById("openAddTypeModal").addEventListener("click", () => {
        document.getElementById("addModalType").style.display = "flex";
    });
    document.getElementById("openUpdateTypeModal").addEventListener("click", () => {
        document.getElementById("updateModalType").style.display = "flex";
    });
});