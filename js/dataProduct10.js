var ctx10 = document.getElementById('investmentChart101').getContext('2d');
selectHtml101 = document.getElementById('select101');
let graph101;

function graphAux10(ctx10,years,unidad,unidadValues){
    if (graph101){
        graph101.destroy()
    }
    years.unshift(1985,1990,1995,2000);
    graph101 = new Chart(ctx10,{
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
                    text: 'Número de consultas médicas [1985-2022]',
                    font:{
                        size: 18
                    }
                }
            }

            
        }
    });
}

function graphAux101(ctx10,years,unidad,unidadValues){
    if (graph101){
        graph101.destroy()
    }
    years.unshift(1985,1990,1995,2000);
    graph101 = new Chart(ctx10,{
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
                    text: 'Número de consultas médicas por habitantes[1985-2022]',
                    font:{
                        size: 18
                    }
                }
            }

            
        }
    });
}

function crearGraficoAux10(id){
    if (id == '0'){
    
    fetch('../Data/pjson.json')
        .then(response => response.json())
        .then(data => {
            const years = []
            for (const year in data["Años"]) {
                if (data["Años"][year] > 2003){
                    years.push(data["Años"][year]);
                }
            }
            
            fetch('../Data/p18json.json')
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
                    graphAux10(ctx10,years,unidad,unidadValues);
                })
                .catch(error => {
                    console.error("error al cargar el Json " + error)
            });
        });
    }else{
        fetch('../Data/pjson.json')
        .then(response => response.json())
        .then(data => {
            const years = []
            for (const year in data["Años"]) {
                if (data["Años"][year] > 2003){
                    years.push(data["Años"][year]);
                }
            }
            
            fetch('../Data/p19json.json')
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
                    graphAux10(ctx10,years,unidad,unidadValues);
                })
                .catch(error => {
                    console.error("error al cargar el Json " + error)
            });
        });

    }
}

selectHtml101.addEventListener('change', (event)=>{
    let id;
    for (let i = 0; i < selectHtml101.options.length;i++){
        if ( selectHtml101.options[i].selected){
            id = i
            break
        }
    }

    crearGraficoAux10(id);

})

crearGraficoAux10(0);