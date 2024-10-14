var ctx102 = document.getElementById('investmentChart102').getContext('2d');
let graph102;

function graphAux102(ctx102,years,vacunas,efectividad) {
    if(graph102) {
        graph102.destroy();
    }
    
    graph102 = new Chart(ctx102, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {   
                    label: vacunas[0],
                    data: efectividad[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0
                },
                {   
                    label: vacunas[1],
                    data: efectividad[1],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0
                },
                {   
                    label: vacunas[2],
                    data: efectividad[2],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0
                },
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Efectividad en %'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Vacunas'
                    }
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
}

function crearGrafico102(){
    fetch('../Data/pson.json')
        .then(response => response.json())
        .then(data =>{
            const years = ['Abdala','Soberana02','Soberana02 con Soberana Plus']
            const vacunas = ['Abdala','Soberana02','Soberana02 con Soberana Plus'];
            const efectividad = [92.28,62,91.2];
            graphAux102(ctx102,years,vacunas,efectividad)
        })
    
    .catch(error => {
        console.error("error al cargar el Json " + error)
});
}

crearGrafico102()



