var ctx102 = document.getElementById('investmentChart102').getContext('2d');
var graph102 = new Chart(ctx102, {
    type: 'bar',
    data: {
        labels: [
            "Soberana 02", 
            "Soberana Plus", 
            "Abdala", 
        ],
        datasets: [{
            label: '',
            data: [
                62,
                91.28,
                92.28
            ],
            backgroundColor: ['rgba(0,255,0)', 'rgba(255,0,0)', 'rgba(0,0, 255)'],
            borderColor: ['rgba(0,255,0)', 'rgba(255,0,0)', 'rgba(0,0, 255)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        
        plugins: {
            title: {
                display: true,
                text: 'Efectividad de las vacunas cubanas.',
                font: {
                    size: 18, // Tamaño del título
                }
            }
    }
    }
});