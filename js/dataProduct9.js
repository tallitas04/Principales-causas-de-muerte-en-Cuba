var ctx09 = document.getElementById('investmentChart09').getContext('2d');
let graph09;

function graphAux09(ctx09,years,unidad,unidadValues){
    if (graph09){
        graph09.destroy()
    }
    graph09 = new Chart(ctx09,{
        type: 'line',
        data:{
            labels:years,
            datasets: [
                {
                    label:unidad[0],
                    data: unidadValues[0],
                    backgroundColor: 'rgb(12,34,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[1],
                    data: unidadValues[1],
                    backgroundColor: 'rgb(90,114,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[2],
                    data: unidadValues[2],
                    backgroundColor: 'rgb(12,234,187)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[3],
                    data: unidadValues[3],
                    backgroundColor: 'rgb(150,154,157)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[4],
                    data: unidadValues[4],
                    backgroundColor: 'rgb(12,34,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[5],
                    data: unidadValues[5],
                    backgroundColor: 'rgb(12,34,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[6],
                    data: unidadValues[6],
                    backgroundColor: 'rgb(12,34,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[7],
                    data: unidadValues[7],
                    backgroundColor: 'rgb(12,34,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[8],
                    data: unidadValues[8],
                    backgroundColor: 'rgb(12,34,87)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },

                {
                    label:unidad[9],
                    data: unidadValues[9],
                    backgroundColor: 'rgb(112,134,187)',
                    borderColor: 'rgb(80,80,80)',
                    borderWidth:1,
                    pointRadius:3,
                    tension:0.1
                },
            ]
        },

        options:{
            responsive: true,
            scales:{
                y: {
                    beginAtZero:true,
                    title:{
                    display:true,
                    text:'numero de unidades'
                    }
                },

                x:{
                    title:{
                    display:true,
                    text:'Años'
                    }
                }
            },

            plugins:{
                title:{
                    display:true,
                    text: 'Número de unidades de servicio disponibles en el país [2009-2022]',
                    font:{
                        size: 18
                    }
                }
            }

            
        }
    });
}

function crearGraficoAux09(){
    
    fetch('../Data/pjson.json')
        .then(response => response.json())
        .then(data => {
            const years = []
            for (const year in data["Años"]) {
                if (data["Años"][year] > 2008){
                    years.push(data["Años"][year]);
                }
            }
            
            fetch('../Data/p17json.json')
                .then(response => response.json())
                .then(data =>{
                    const unidad = [];
                    for (const personal of Object.keys(data)){
                        unidad.push(personal);
                    }

                    const unidadValues = [];
                    for (const personalValues of Object.values(data)){
                        unidadValues.push(personalValues);
                    }
                    console.log(unidadValues)
                    graphAux09(ctx09,years,unidad,unidadValues);
                })
                .catch(error => {
                    console.error("error al cargar el Json " + error)
            });
        });
}

crearGraficoAux09()