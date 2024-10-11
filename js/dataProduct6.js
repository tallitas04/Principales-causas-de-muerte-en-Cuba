var ctx6 = document.getElementById('investmentChart6').getContext('2d');
let graph8;

function graph7(ctx6, years, enfermedades, tasas, id) {
        if(graph8) {
        graph8.destroy();
        }

        graph8 = new Chart(ctx6, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: enfermedades[0],
                    data: tasas[0][id],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 2,
                    tension: 0.1
                },
                {   
                    label: enfermedades[1],
                    data: tasas[1][id],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[2],
                    data: tasas[2][id],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[3],
                    data: tasas[3][id],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[4],
                    data: tasas[4][id],
                    backgroundColor: 'rgba(203, 99, 232, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 232, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[5],
                    data: tasas[5][id],
                    backgroundColor: 'rgba(243, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(243, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[6],
                    data: tasas[6][id],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[7],
                    data: tasas[7][id],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[8],
                    data: tasas[8][id],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: enfermedades[9],
                    data: tasas[9][id],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
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
                    text: 'Consultas_en_cuerpos_de_guardia_de_asistencia_médica_por_unidades_de_servicio [1985-2011].'
                }
            }
        }    
        });
        }

function crearGrafico(id){
    fetch('/Data/pjson.json')
        .then(response => response.json())
        .then(data => {
            
            const years = []
            for (const year in data["Años"]) {
                    if (data["Años"][year] >= 2009){
                        years.push(data["Años"][year]);
                    }
                }
                
                fetch('/Data/p9json.json')
                    .then(response => response.json())
                    .then(data => {
                        
                        const enfermedades = []
                        for (const obj of Object.values(data)){
                            if(enfermedades.indexOf(obj["Enfermedades"]) != -1) continue;
                            enfermedades.push(obj["Enfermedades"]);
                        }

                        const tasas = []

                        for(const enfermedad of enfermedades){
                            const tasasMasculinas = []
                            const tasasFemeninas = []
                            const tasasAmbos = []
                            for (const obj of Object.values(data)){
                                if(obj["Enfermedades"] == enfermedad){
                                    tasasMasculinas.push(obj["Tasas masculinas "]);
                                    tasasFemeninas.push(obj["Tasas femeninas"]);
                                    tasasAmbos.push(obj["Ambos sexos"]);    
                                }
                            }
                            console.log(tasasMasculinas.length);
                            tasasMasculinas.reverse();
                            tasasFemeninas.reverse();
                            tasasAmbos.reverse();
                            tasas.push([tasasMasculinas, tasasFemeninas, tasasAmbos]);
                        }
                        graph7(ctx6, years, enfermedades, tasas, id);
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
                });
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }


crearGrafico(0);
