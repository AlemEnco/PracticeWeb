

function saluda(){
    //let hola = ""

    let numerOne = 1;
    let numerTwo = 3;

    let suma = numerOne + numerTwo

    console.log("12" + suma)
}
//saluda()

function recorrido(){
    let numeros = [[2,6],2,3,4,5,6,7,8,9,10]

    console.log(numeros[0][1])

    numeros.forEach(e => {
        
        // if(e > 5){
        //     console.log("Hola: " + e)
        // }
        // if(e > 9){
        //     console.log("Mayor que 9")
        // }
        // else{
        //     console.log("**")
        // }

        
    });

    var personas = [
        {
            nombre: "Juan",
            edad: 30,
            profesion: "Ingeniero",
            ciudad: "Madrid"
        },
        {
            nombre: "María",
            edad: 25,
            profesion: "Doctora",
            ciudad: "Barcelona"
        },
        {
            nombre: "Pedro",
            edad: 35,
            profesion: "Abogado",
            ciudad: "Valencia"
        },
        {
            nombre: "Alem",
            edad: 26,
            profesion: "Arquitecta",
            ciudad: "Sevilla"
        },
        {
            nombre: "Luis",
            edad: 40,
            profesion: "Profesor",
            ciudad: "Bilbao"
        },
        {
            nombre: "Laura",
            edad: 32,
            profesion: "Contadora",
            ciudad: "Málaga"
        },
        {
            nombre: "Carlos",
            edad: 45,
            profesion: "Programador",
            ciudad: "Alicante"
        },
        {
            nombre: "Sofía",
            edad: 27,
            profesion: "Diseñadora",
            ciudad: "Murcia"
        },
        {
            nombre: "Daniel",
            edad: 33,
            profesion: "Ingeniero",
            ciudad: "Granada"
        },
        {
            nombre: "Elena",
            edad: 29,
            profesion: "Médica",
            ciudad: "Zaragoza"
        }
    ];

    //let edad = persona.edad

    console.log(personas)

    let arreglo = []

    let div = document.getElementById("listaTrabajadores")

    personas.forEach(e => {

        if(e.edad > 28){
            
            arreglo.push(e)
            let test = document.createElement("li")
            test.innerHTML = `${e.nombre} tiene ${e.edad} años`
            div.appendChild(test)
            //console.log(`${e.nombre} tiene ${e.edad} años`)
        }
       
    })

    console.log(div)

    // console.log("Buenas noches " + persona.profesion + " " + persona.nombre + ", me contaron que celebró su cumple N° " + persona.edad + " en " + persona.ciudad)
    // console.log(`Buenas noches ${persona.profesion} ${persona.nombre}, me contaron que celebró su cumple N° ${persona.edad} en ${persona.ciudad}`)
}

//recorrido()

function miprimerapeticion(){
    let div = document.getElementById("listaTrabajadores")
    let select = document.getElementById("nombres")
    let apitest = "https://rickandmortyapi.com/api/character/?page=4"
    let result = []
    fetch(apitest)
    .then(response => response.json())
    .then(datos => {
        console.log(datos.results)
        result = datos.results

        result.forEach(e => {
            let option = document.createElement("option")
            //divContainer.classList.add('container')
            option.innerHTML = `${e.name}`
    
            select.appendChild(option)

            let divCard = document.createElement("div")
            div.classList.add('card')
            let img = document.createElement("img")
            img.setAttribute('src', e.image)
            let divContainer = document.createElement("div")
            divContainer.classList.add('container')
            divContainer.innerHTML = `<h4><b>${e.name}</b></h4>`
    
            divCard.appendChild(img)
            divCard.appendChild(divContainer)
            div.appendChild(divCard)
            
            //console.log(`${e.nombre} tiene ${e.edad} años`
           
        })
    })
}



function listarPersonajes(){
    let section1 = document.getElementById("imagenes")
    let section2 = document.getElementById("imagenes2")
    let apitest = "https://rickandmortyapi.com/api/character/?page=3"
    let result = []
    fetch(apitest)
    .then(response => response.json())
    .then(datos => {
        console.log(datos.results)
        result = datos.results
        let i = 0
        result.forEach(e => {
            if(i < 8){
                let divPersonajes = document.createElement("div")
                divPersonajes.classList.add('personaje')
                let img = document.createElement("img")
                img.setAttribute('src', e.image)
                divPersonajes.appendChild(img)
                section1.appendChild(divPersonajes)
            }
            else if(i > 8 && i < 16){
                let divPersonajes = document.createElement("div")
                divPersonajes.classList.add('personaje')
                let img = document.createElement("img")
                img.setAttribute('src', e.image)
                divPersonajes.appendChild(img)
                section2.appendChild(divPersonajes)
            }
            i++
            //console.log(`${e.nombre} tiene ${e.edad} años`
           
        })
    })
}

listarPersonajes()
//miprimerapeticion()