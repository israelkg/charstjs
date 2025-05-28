

function updateChart() {
    if(window.myChart) {
        window.myChart.data.labels.push('April');
        window.myChart.data.datasets[0].data.push(Math.floor(Math.random() * 20) + 1);
        window.myChart.update();
    }
}

function removeDataset() {
    if(window.myChart) {
        window.myChart.data.labels.pop();
        window.myChart.data.datasets.forEach(dataset => {
            dataset.data.pop();
        })
        window.myChart.update();
    }
}

function destroyChart() {
    if(window.myChart) {
        window.myChart.destroy();
    }
}