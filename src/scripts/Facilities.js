//<select> of facility names IF governor drop down<select> has changed.
//display available minerals as radio buttons when "change" eventListener happens.
//change events for radio buttons that adds 1 ton to transitory state (cart)
import { getFacilities, getTransient, setFacilitiesChoice, setPurchaseChoice, getFacilityMineralLog } from "./dataAccess.js"


export const Facilities = () => {
    const facilities = getFacilities()
    const transient = getTransient()
    let html = ""

    if (transient.governorsChoice) {
        html += `<label for="chooseFacility">Choose a Facility</label>
        <select id="facility" name="chooseFacility" value="1">
        <option value="0">Choose a Facility</option>
        ${facilities.map(facility => {
            return `<option name="chooseFacility" value="${facility.name}">${facility.name}</option>`
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

    const facilities = getFacilities()
    const facilityLog = getFacilityMineralLog()
    const transient = getTransient()
  

    let html = ""
    if (transient.facilitiesChoice) {
        for (const facility of facilities) {
            for (const mineral of facilityLog) {
                if (facility.name === transient.facilitiesChoice && facility.id === mineral.mineral.id) {
                    html += `
                <legend>Minerals Available at ${facility.name}</legend>
                
                <div class="mineralRadio">
                    <input type="radio" id="iron" name="minerals">
                    <label for="${facility.id}">${mineral.stock} tons of Iron</label>
                    <input type="radio" id="transparentAluminum" name="minerals">
                    <label for="${facility.id}">${mineral.stock} tons of Transparent Aluminum</label>
                    <input type="radio" id="chromium" name="minerals">
                    <label for="${facility.id}">${mineral.stock} tons of Chromium</label>
                    <input type="radio" id="beryllium" name="minerals">
                    <label for="${facility.id}">${mineral.stock} tons of Beryllium</label>
                    <input type="radio" id="benadryl" name="minerals">
                    <label for="${facility.id}">${mineral.stock} tons of Benadryl</label>
                </div>
               `
                }
            }
        }
    } else {
        html += `<legend>Facility Minerals</legend>`
    }
    return html
}

mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
        setFacilitiesChoice(event.target.value)
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})

mainContainer.addEventListener("change", (event) => {
    if (event.target.name === "minerals") {
        setPurchaseChoice(event.target.id)
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})