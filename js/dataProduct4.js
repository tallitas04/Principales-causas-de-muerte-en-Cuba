var ctx4 = document.getElementById('investmentChart4').getContext('2d');
var selectHtml2 = document.getElementById('select2');
let graphaux4;

function graph2(ctx4, years, habitantesMedEst, habitantesMedEstValues) {
    if(graphaux4) {
        graphaux4.destroy();
    }

    graphaux4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {   
                    label: habitantesMedEst[0],
                    data: habitantesMedEstValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 2,
                    tension: 0.1
                },
                {
                    label: habitantesMedEst[1],
                    data: habitantesMedEstValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: habitantesMedEst[2],
                    data: habitantesMedEstValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: habitantesMedEst[3],
                    data: habitantesMedEstValues[3],
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
                    text: 'Habitantes por medico y estomatologo [1985-2022].'

                }
            }
        }    
    });
}

function graph22(ctx4, years, habitantesMedEst, habitantesMedEstValues) {
    if(graphaux4) {
        graphaux4.destroy();
    }

    graphaux4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {   
                    label: habitantesMedEst[0],
                    data: habitantesMedEstValues[0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 2,
                    tension: 0.1
                },
                {
                    label: habitantesMedEst[1],
                    data: habitantesMedEstValues[1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
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
                    text: 'Habitantes por medico y estomatologo [1985-2022].'

                }
            }
        }    
    });
}

function graph23(ctx4, years, habitantesMedEst, habitantesMedEstValues) {
    if(graphaux4) {
        graphaux4.destroy();
    }

    graphaux4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: habitantesMedEst[2],
                    data: habitantesMedEstValues[2],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 5,
                    tension: 0.1
                },
                {
                    label: habitantesMedEst[3],
                    data: habitantesMedEstValues[3],
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
                    text: 'Habitantes por medico y estomatologo [1985-2022].'

                }
            }
        }    
    });
}

function crearGrafico5(id){
    
        fetch('/Data/pjson.json')
            .then(response => response.json())
            .then(data => {
                const years = []
                
                for (const year in data["Años"]) {
                    
                    years.push(data["Años"][year]);
                    
                }

                const habitantesMedEst = [];
                const habitantesMedEstValues = [];
                fetch('/Data/p7json.json')
                    .then(response => response.json())
                    .then(data => {
                    
                        for (const personal of  Object.keys(data["Habitantes_por_medico_y_estomatologo"])) {
                            habitantesMedEst.push(personal.toString());
                        }

                        for (const personalValues of Object.values(data["Habitantes_por_medico_y_estomatologo"])) {
                            habitantesMedEstValues.push(personalValues);
                        }
                        
                        if(id == 0){
                            graph2(ctx4, years, habitantesMedEst, habitantesMedEstValues);  
                        } else if(id == 1){
                            graph22(ctx4, years, habitantesMedEst, habitantesMedEstValues);  
                        }else{
                            graph23(ctx4, years, habitantesMedEst, habitantesMedEstValues);  
                        }
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
            
                });
                
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }

selectHtml2.addEventListener('change', (event) => {
    let id;
    for (let i = 0; i < selectHtml2.options.length; i++){
        if(selectHtml2.options[i].selected){
            id = i;
            break;
        }
    }
    
    crearGrafico5(id);
});
    


crearGrafico5(0);
