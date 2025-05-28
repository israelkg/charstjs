

var ctx = document.querySelector('.pizza-chart');
window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Catupiry',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Calabresa',
            data: [2, 10, 15, 10, 15, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'Mussarela',
            data: [10, 15, 10, 15, 10, 15],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
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
                    style: 'bold'
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
                        style: 'bold'
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