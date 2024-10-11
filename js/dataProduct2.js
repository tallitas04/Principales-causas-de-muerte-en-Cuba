var ctx2 = document.getElementById('investmentChart2').getContext('2d');
let graphaux;

function graph3(ctx2, years, causasMuertes, causasMuertesValues) {
    if(graphaux) {
        graphaux.destroy();
    }

    graphaux = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: causasMuertes[0],
                    data: causasMuertesValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 2,
                    tension: 0.1
                },
                {
                    label: causasMuertes[1],
                    data: causasMuertesValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[2],
                    data: causasMuertesValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[3],
                    data: causasMuertesValues[3],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[4],
                    data: causasMuertesValues[4],
                    backgroundColor: 'rgba(203, 99, 232, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 232, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[5],
                    data: causasMuertesValues[5],
                    backgroundColor: 'rgba(243, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(243, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[6],
                    data: causasMuertesValues[6],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[7],
                    data: causasMuertesValues[7],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[8],
                    data: causasMuertesValues[8],
                    backgroundColor: 'rgba(203, 99, 32, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 32, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: causasMuertes[9],
                    data: causasMuertesValues[9],
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
                    text: 'Tasas_de_las_principales_causas_de_muertes [2000-2022].'
                }
            }
        }    
    });
}

function crearGrafico2(){
        fetch('/Data/pjson.json')
            .then(response => response.json())
            .then(data => {
                const years = []
                
                for (const year in data["Años"]) {
                    if (data["Años"][year] > 1999){
                    years.push(data["Años"][year]);
                    }
                }

                const causasMuertes = [];
                const causasMuertesValues = [];
                fetch('/Data/p6json.json')
                    .then(response => response.json())
                    .then(data => {
                    
                        for (const personal of   Object.keys(data["Tasas_de_las_principales_causas_de_muertes"])) {
                            causasMuertes.push(personal.toString());
                        }

                        for (const personalValues of Object.values(data["Tasas_de_las_principales_causas_de_muertes"])) {
                            causasMuertesValues.push(personalValues);
                        }

                        
                        graph3(ctx2, years, causasMuertes, causasMuertesValues);
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
            
                });
                
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }


crearGrafico2();