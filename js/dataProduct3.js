var ctx3 = document.getElementById('investmentChart3').getContext('2d');
let graphaux2;

function graph4(ctx, years, consulta, consultaValues) {
    if(graphaux2) {
        graphaux2.destroy();
    }

    graphaux2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: consulta[0],
                    data: consultaValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[1],
                    data: consultaValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[2],
                    data: consultaValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[3],
                    data: consultaValues[3],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[4],
                    data: consultaValues[4],
                    backgroundColor: 'rgba(203, 99, 232, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 232, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[5],
                    data: consultaValues[5],
                    backgroundColor: 'rgba(243, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(243, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[6],
                    data: consultaValues[6],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[7],
                    data: consultaValues[7],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[8],
                    data: consultaValues[8],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[9],
                    data: consultaValues[9],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[10],
                    data: consultaValues[10],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[11],
                    data: consultaValues[11],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[12],
                    data: consultaValues[12],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[13],
                    data: consultaValues[13],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: consulta[14],
                    data: consultaValues[14],
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
                    text: 'Consultas externas de asistencia médica por unidades de servicio [1985-2011].',
                    font: {
                        size: 18, // Tamaño del título
                    }
                }
            }
        }    
    });
}

function crearGrafico3(){
        fetch('../Data/pjson.json')
            .then(response => response.json())
            .then(data => {
                const years = []
                
                for (const year in data["Años"]) {
                    if (data["Años"][year] < 2012){
                    years.push(data["Años"][year]);
                    }
                }

                const consulta = [];
                const consultaValues = [];
                fetch('../Data/p3json.json')
                    .then(response => response.json())
                    .then(data => {
                    
                        for (const personal of   Object.keys(data["Consultas_externas_de_asistencia_médica_por_unidades_de_servicio "])) {
                            consulta.push(personal.toString());
                        }

                        for (const personalValues of Object.values(data["Consultas_externas_de_asistencia_médica_por_unidades_de_servicio "])) {
                            consultaValues.push(personalValues);
                        }

                        
                        graph4(ctx3, years, consulta, consultaValues);
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
            
                });
                
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }


crearGrafico3();
