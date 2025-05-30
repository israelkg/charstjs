
var ctx = document.getElementById('weeklyFrequencyChart').getContext('2d');

const dataF = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Sales Volume',
            data: [80, 61, 65, 70, 112, 125, 104],
            backgroundColor: ['#007bff'],
            borderColor: ['#2b639f'],
            borderWidth: 2,
        }]
}
const weeklyFrequencyChart = new Chart(ctx, {
    type: 'line',
    data: dataF,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Weekly Sales Report',
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
    document.getElementById("openUpdateFrequencyModal").addEventListener("click", () => {
        document.getElementById("updateFrequencyModal").style.display = "flex";
    });
});

// UPDATE
function confirmBtnUpdateFrequency(){
    const newQuantidad = document.getElementById("quantdadSales").value;
    const daySelect = document.getElementById("daysSale").value.trim();

    const array = generateChartDataArray(daySelect, parseInt(newQuantidad), dataF.labels, 7);
    const indexDay = dataF.labels.indexOf(daySelect);

    if(newQuantidad.trim() == '' || newQuantidad <= 0) {
        alert("Preencha todos os campos")
    } else{
        dataF.datasets[0].data[indexDay] = parseInt(newQuantidad)
        weeklyFrequencyChart.update();
        document.getElementById("updateFrequencyModal").style.display = 'none';
    }
}
