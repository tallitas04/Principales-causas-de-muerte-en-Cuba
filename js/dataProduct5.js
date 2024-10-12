var ctx5 = document.getElementById('investmentChart5').getContext('2d');
let graphaux5;

function graph6(ctx5, years, consultaAsistenciaMed, consultaAsistenciaMedValues) {
    if(graphaux5) {
        graphaux5.destroy();
    }

    graphaux5 = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: consultaAsistenciaMed[0],
                    data: consultaAsistenciaMedValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[1],
                    data: consultaAsistenciaMedValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[2],
                    data: consultaAsistenciaMedValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[3],
                    data: consultaAsistenciaMedValues[3],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[4],
                    data: consultaAsistenciaMedValues[4],
                    backgroundColor: 'rgba(203, 99, 232, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 232, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[5],
                    data: consultaAsistenciaMedValues[5],
                    backgroundColor: 'rgba(243, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(243, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[6],
                    data: consultaAsistenciaMedValues[6],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[7],
                    data: consultaAsistenciaMedValues[7],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[8],
                    data: consultaAsistenciaMedValues[8],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consultaAsistenciaMed[9],
                    data: consultaAsistenciaMedValues[9],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
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
                        text: 'Personal'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Años'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Consultas en cuerpos de guardia de asistencia médica por unidades de servicio [1985-2011].',
                    font: {
                        size: 18, // Tamaño del título
                    }
                }
            }
        }    
    });
}

function crearGrafico6(){
        fetch('../Data/pjson.json')
            .then(response => response.json())
            .then(data => {
                const years = []
                
                for (const year in data["Años"]) {
                    if (data["Años"][year] < 2012){
                    years.push(data["Años"][year]);
                    }
                }

                const consultaAsistenciaMed = [];
                const consultaAsistenciaMedValues = [];
                fetch('../Data/p8json.json')
                    .then(response => response.json())
                    .then(data => {
                    
                        for (const personal of   Object.keys(data["Consultas_en_cuerpos_de_guardia_de_asistencia_médica_por_unidades_de_servicio "])) {
                            consultaAsistenciaMed.push(personal.toString());
                        }

                        for (const personalValues of Object.values(data["Consultas_en_cuerpos_de_guardia_de_asistencia_médica_por_unidades_de_servicio "])) {
                            consultaAsistenciaMedValues.push(personalValues);
                        }

                        
                        graph6(ctx5, years, consultaAsistenciaMed, consultaAsistenciaMedValues);
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
            
                });
                
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }


crearGrafico6();
