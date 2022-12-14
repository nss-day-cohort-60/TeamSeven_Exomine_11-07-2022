//<select> of facility names IF governor drop down<select> has changed.
//display available minerals as radio buttons when "change" eventListener happens.
//change events for radio buttons that adds 1 ton to transitory state (cart)
import { getFacilities, getTransient, setFacilitiesChoice, setPurchaseChoice, getFacilityMineralLog, getMinerals } from "./dataAccess.js"


export const Facilities = () => {
    const facilities = getFacilities()
    const transient = getTransient()
    let html = ""

    if (transient.governorsChoice) {
        html += `<label for="chooseFacility">Choose a Facility</label>
        <select id="0" name="chooseFacility">
        <option value="0">Choose a Facility</option>
        ${facilities.map(facility => {
            return `<option name="chooseFacility" value="${facility.id}">${facility.name}</option>`
        })}
        </select>`
    } else {
        html += `<label for="chooseFacility">Choose a Facility</label>
        <select id="facility" name="chooseFacility" value="1">
        <option value="0">First, Choose a Governor</option>
        </select>`
    }
    return html
}



export const FacilityMinerals = () => {

    let html = ""

    const transient = getTransient()
    const facilities = getFacilities()
    const filteredFacilities = facilities.filter(facility => transient.facilitiesChoice === facility.id)
    const facilityMineralLog = getFacilityMineralLog()
    const minerals = getMinerals()

 

    if (transient.facilitiesChoice) {

        for (const filteredFacility of filteredFacilities) {
            html += `<legend>Minerals Available at ${filteredFacility.name}</legend>`

        }

        for (const log of facilityMineralLog) {
            if (transient.facilitiesChoice === log.facilityId) {

                const mineralList = minerals.filter(mineral => mineral.id === log.mineralId)

                html += `  
                    ${mineralList.map(taco => `<div class="mineralRadio">
                    <input type="radio" id="${taco.id}" name="minerals">
                    <label for="${taco.id}">${log.stock} tons of ${taco.name}</label>
                    </div>`)}`
            }
            // for (const log of logs) {
            // for (const mineral of minerals){
            //     if (mineral.id === log.mineralId) {
            //         array.push(mineral)
            //     }
            //     }
        }
    }

    return html
}




mainContainer.addEventListener("change", (event) => {
    if (event.target.name === "chooseFacility") {
        setFacilitiesChoice(parseInt(event.target.value))
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})

mainContainer.addEventListener("change", (event) => {
    if (event.target.name === "minerals") {
        setPurchaseChoice(parseInt(event.target.id))
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})