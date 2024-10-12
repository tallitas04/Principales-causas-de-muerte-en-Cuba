var ctx8 = document.getElementById('investmentChart8').getContext('2d');
var selectHtml8 = document.getElementById('selectProvincia2');
let graph11;

function graphAux8(ctx8, years, residentes, provincia) {
    if(graph11) {
        graph11.destroy();
    }
    if(provincia == "Toda Cuba"){
        years.unshift(1980,1990,2000,2006, 2007, 2008);
    }
    // console.log(residentes[0])
    graph11 = new Chart(ctx8, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {   
                    label: provincia,
                    data: residentes,
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
                    text: 'Población residente de Cuba por provincias [2009-2022].',
                    font: {
                        size: 18, // Tamaño del título
                    }
                }
            }
        }    
    });
}

function crearGraficoAux8(id, provincia){
    fetch('../Data/pjson.json')
        .then(response => response.json())
        .then(data => {
            const years = []
            for (const year in data['Años']) {
                if(data['Años'][year] > 2008){
                    years.push(data["Años"][year])
                }
            }
        
            fetch('../Data/p16json.json')
                .then(response => response.json())
                .then(data => {

                    const residentes = []
                    for (const value of Object.values(data["Poblacion_residente_en_Cuba"])) {
                        residentes.push(value);                       
                    }
                    // console.log(residentes[1])
                    graphAux8(ctx8, years, residentes[id], provincia);
                })
                .catch(error => {
                    console.error("error al cargar el Json " + error)
            });
        });
};

selectHtml8.addEventListener('change', (event) => {
    let provincia;
    let id;
    for (let i = 0; i < selectHtml8.options.length; i++){
        if(selectHtml8.options[i].selected){
            provincia = selectHtml8.options[i].innerText;
            id = i;
            break;
        }
    }
    // console.log(id);
    crearGraficoAux8(id, provincia);
});

crearGraficoAux8(2, "La Habana");