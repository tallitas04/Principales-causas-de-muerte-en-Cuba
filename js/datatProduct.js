// Análisis del Personal Facultativo del Ministerio de Salud Pública
var ctx = document.getElementById('investmentChart').getContext('2d');
var selectHtml = document.getElementById('selectProvincia');
let graph;

function graph1(ctx, years, personalSalud, personalSaludValues) {
    if(graph) {
        graph.destroy();
    }

    graph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: personalSalud[0],
                    data: personalSaludValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 2,
                    tension: 0.1
                },
                {
                    label: personalSalud[1],
                    data: personalSaludValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[2],
                    data: personalSaludValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[3],
                    data: personalSaludValues[3],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
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
                    text: 'Personal facultativo del ministerio de salud publica [2006-2022]'
                }
            }
        }    
    });
}

function graph2(ctx, years, personalSalud, personalSaludValues) {
    if(graph) {
        graph.destroy();
    }

    graph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: personalSalud[0],
                    data: personalSaludValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 2,
                    tension: 0.1
                },
                {
                    label: personalSalud[1],
                    data: personalSaludValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[2],
                    data: personalSaludValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[3],
                    data: personalSaludValues[3],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[4],
                    data: personalSaludValues[4],
                    backgroundColor: 'rgba(203, 99, 232, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 232, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[5],
                    data: personalSaludValues[5],
                    backgroundColor: 'rgba(243, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(243, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: personalSalud[6],
                    data: personalSaludValues[6],
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
                    text: 'Personal facultativo del Ministerio de Salud Pública [1985-2022].'
                }
            }
        }    
    });
}

function crearGraficoAux(id, idProvincia){
    console.log("f " + id);
    if(id != 17){
        fetch('../Data/p5json.json')
        .then(response => response.json())
            .then(data => {
                const years = []
                for (const year of Object.keys(data["Personal_facultativo_del_ministerio_de_salud_publica_por_provincias"]["Medicos"])) {
                    if(id == 3 && year > 2010) continue;
                    years.push(year);
                    if((id == 1 || id == 4) && year < 2011)
                        years.pop();
                }
                
                const personalSalud = [];
                for (const personal of Object.keys(data["Personal_facultativo_del_ministerio_de_salud_publica_por_provincias"])) {
                    personalSalud.push(personal);
                }

                if(id == 2) idProvincia--; 
                if(id == 3) idProvincia--;
                if(id >= 5) idProvincia -= 2;
                if(id == 4) idProvincia--;
                const personalSaludValues = [];
                for (const personal of Object.values(data["Personal_facultativo_del_ministerio_de_salud_publica_por_provincias"])) {
                    const aux = []; 
                    let flag = true;
                    for (const year in personal) {
                        if(flag && year >= "2011" && id >= 5) { 
                            idProvincia++;
                            flag = false;
                        }
                        if(id == 2 && flag && year >= "2011") {
                            flag = false;
                            idProvincia++;
                        }
                        aux.push(personal[year][idProvincia])
                        if(year < "2011" && (id == 1 || id == 4)) {
                            aux.pop();
                        }
                        // console.log(personal[year][idProvincia]);
                    }   
                    if(id >= 5) idProvincia--;
                    if(id == 2) idProvincia--;
                    personalSaludValues.push(aux)
                }
                // console.log("g1");
                graph1(ctx, years, personalSalud, personalSaludValues);
                            
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    } else {
        fetch('../Data/pjson.json')
            .then(response => response.json())
            .then(data => {
                const years = []
                
                for (const year in data["Años"]) {
                    years.push(data["Años"][year]);
                }

                const personalSalud = [];
                const personalSaludValues = [];
                fetch('../Data/p4json.json')
                    .then(response => response.json())
                    .then(data => {
                    
                        for (const personal of   Object.keys(data["Personal_facultativo_del_ministerio_de_salud_publica"])) {
                            personalSalud.push(personal.toString());
                        }

                        for (const personalValues of Object.values(data["Personal_facultativo_del_ministerio_de_salud_publica"])) {
                            personalSaludValues.push(personalValues);
                        }

                        // console.log("g2");
                        graph2(ctx, years, personalSalud, personalSaludValues);
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
            
                });
                
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }
};

selectHtml.addEventListener('change', (event) => {
    let idProvincia;
    let id;
    for (let i = 0; i < selectHtml.options.length; i++){
        if(selectHtml.options[i].selected){
            idProvincia = i;
            id = i;
            break;
        }
    }
    // console.log(id);
    crearGraficoAux(id, idProvincia);
});

crearGraficoAux(2, 2);