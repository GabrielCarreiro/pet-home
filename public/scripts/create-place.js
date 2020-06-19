function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then (res => res.json() )
    .then (states => {
        for (const state of states){
            ufSelect.innerHTML += `<option value ="${state.id}">${state.nome} </option>`
        }
    })
}

populateUFs()

function getCities(event){
    const citySelects = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options [indexOfSelectedState].text
    

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelects.innerHTML = "<option value> Selecione a cidade </option>"

    fetch(url)
    .then (res => res.json())
    .then (cities => {

        for(const city of cities){
            citySelects.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



const placesToGo = document.querySelectorAll(".place-grid li")

for(const places of placesToGo){
    places.addEventListener("click", handleSelecteditem)
}

const placesSelect = document.querySelector("input[name=places]")

let selectedPlaces = []

function handleSelecteditem(event){

    const placesLi = event.target


    placesLi.classList.toggle("selected")

    const placesId = event.target.dataset.id
    

    const alreadySelected = selectedPlaces.findIndex( places =>{
        const placesFound = places == placesId
        return placesFound
    })

    if(alreadySelected >=0 ){
    
        const filteredplaces = selectedPlaces.filter(places => {
            const placesIsDifferent = places != placesId
            return placesIsDifferent
        })

        selectedPlaces = filteredplaces

    }else{

        
        selectedPlaces.push(placesId)

    }
        
    placesSelect.value = selectedPlaces
    
}


