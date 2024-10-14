var ctx7 = document.getElementById('investmentChart7').getContext('2d');
var selectHtml3 = document.getElementById('select3');
let graphaux7;

function graph9(ctx7, years, organos, tasas, id) {
    if(graphaux7) {
        graphaux7.destroy();
    }

    graphaux7 = new Chart(ctx7, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: organos[0],
                    data: tasas[0][id],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {   
                    label: organos[1],
                    data: tasas[1][id],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[2],
                    data: tasas[2][id],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[3],
                    data: tasas[3][id],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },{   
                    label: organos[4],
                    data: tasas[4][id],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {   
                    label: organos[5],
                    data: tasas[5][id],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[6],
                    data: tasas[6][id],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[7],
                    data: tasas[7][id],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },{   
                    label: organos[8],
                    data: tasas[8][id],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno azul claro
                    borderColor: 'rgba(54, 162, 235, 1)', // Borde azul
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {   
                    label: organos[9],
                    data: tasas[9][id],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[10],
                    data: tasas[10][id],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[11],
                    data: tasas[11][id],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {   
                    label: organos[12],
                    data: tasas[12][id],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[13],
                    data: tasas[13][id],
                    backgroundColor: 'rgba(203, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 99, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {
                    label: organos[14],
                    data: tasas[14][id],
                    backgroundColor: 'rgba(203, 199, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(203, 199, 132, 1)', // Borde rojo
                    borderWidth: 1,
                    pointRadius: 3,
                    tension: 0.1
                },
                {   
                    label: organos[15],
                    data: tasas[15][id],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno rojo claro
                    borderColor: 'rgba(255, 99, 132, 1)', // Borde rojo
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
                    text: 'Defunciones por sexo [2009-2022].',
                    font: {
                        size: 18, // Tamaño del título
                    }
                }
            }
        }    
    });
}

function crearGrafico(id){
        fetch('../Data/pjson.json')
            .then(response => response.json())
            .then(data => {
                
                const years = []
                for (const year in data["Años"]) {
                    if (data["Años"][year] >= 2009){
                        years.push(data["Años"][year]);
                    }
                }
                
                fetch('../Data/p14json.json')
                    .then(response => response.json())
                    .then(data => {
                        const organos = []
                        for (const obj of Object.values(data)){
                            if(organos.indexOf(obj["Localozaciones"]) != -1) continue;
                            organos.push(obj["Localozaciones"]);
                        }

                        // console.log(organos.length);
                        
                        const tasas = []

                        for(const organo of organos){
                            const DefuncionesMasculinas = []
                            const TasaMasculina = []
                            const DefuncionesFemeninas = []
                            const TasaFemeninas = [] 
                            
                            // console.log(organo)
                            
                            for (const obj of Object.values(data)){
                                if(obj["Localozaciones"] == organo){
                                    //console.log(obj['Localozaciones'])
                                    DefuncionesMasculinas.push(obj["Defunciones Masculinas "]);
                                    TasaMasculina.push(obj["Tasa masculina"]);
                                    DefuncionesFemeninas.push(obj["Defunciones Femeninas "]);    
                                    TasaFemeninas.push(obj["Tasa femeninas"])
                                }
                            //console.log(obj['Localozaciones'])
                            }
                            DefuncionesFemeninas.reverse();
                            TasaMasculina.reverse();
                            DefuncionesMasculinas.reverse();
                            TasaFemeninas.reverse();
                            tasas.push([DefuncionesMasculinas, TasaMasculina, DefuncionesFemeninas, TasaFemeninas]);
                        }
                        graph9(ctx7, years, organos, tasas, id);
                    })
                    .catch(error => {
                        console.error("error al cargar el Json " + error)
                });
            })
            .catch(error => {
                console.error("error al cargar el Json " + error)
        });
    }

selectHtml3.addEventListener('change', (event) => {
    let id;
    for(let i = 0; i < selectHtml3.options.length; i++){
        if(selectHtml3.options[i].selected){
            id = i;
            break;
        }
    }
    crearGrafico(id);
});

crearGrafico(0);
