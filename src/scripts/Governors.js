import { getGovernors, setGovernorsChoice, getTransient, getColonies, getColonyMineralLog, getMinerals } from "./dataAccess.js"

//creating drop down <select> with list of all governor.name
//we need'a getter
//generate Colony Mineral list based on governor.colonyId fk IF greater than 0.
const mainContainer = document.querySelector("#mainContainer")

export const Governors = () => {
    const govna = getGovernors()

    let html = `
        <ul>
            <label for="governor">Choose a Governor:</label>
            <select id="governorsList">
                <option name="governor">Governors</option>
                ${govna.map(
        gov => {
            return `<option value="${gov.id}" name="governor">${gov.name}</option>`
        }
    ).join("")
        }
            </select>
        </ul>`

    return html

}

export const colonyStock = () => {

    const transient = getTransient()
    const governors = getGovernors()
    const filteredGovernors = governors.filter(governor => transient.governorsChoice === governor.id)

    const colonies = getColonies()
    // const filteredColonies = colonies.filter(colony => {
    //     return colony.id === filteredGovernors.map(governor => governor.colonyId)
    // })

    const colonyMineral = getColonyMineralLog()
    const minerals = getMinerals()

    let html = ""



    if (transient.governorsChoice) {
        for (const governor of filteredGovernors) {
            const filteredColonies = colonies.filter(colony =>
                colony.id === governor.colonyId)

            html += `${filteredColonies.map(taco => `<legend>${taco.name} Mineral Stock</legend>
            <ul>`)}`

            const filteredLog = colonyMineral.filter(taco =>
                taco.colonyId === governor.colonyId)
                for (const filteredLogs of filteredLog) {
                   
                    const filteredMinerals = minerals.filter(taco =>
                    taco.id === filteredLogs.mineralId)
                    
                    html += `${filteredMinerals.map(mineral => 
                        `<li>${filteredLogs.stock} of ${mineral.name}</li>`).join("")}
                    ` 
                     
                
                

                    
                }
            }

            html += "</ul>"
        }

    return html
}

mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "governorsList") {
        setGovernorsChoice(parseInt(event.target.value))
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})

/*
for(const governor of governors){
    if(transient.governorsChoice === governor.id){
        for(const colony of colonies){
            if(governor.colonyId === colony.id){
            html += `< legend > ${ colony.name } Mineral Stock</legend >
            <ul>
                <li>Iron: ${colony.ironStock} tons</li>
                <li>Transparent Aluminum: ${colony.tAluminumStock} tons</li>
                <li>Chromium: ${colony.chromiumStock} tons</li>
                <li>Beryllium: ${colony.berylliumStock} tons</li>
                <li>Benadryl: ${colony.benadrylStock} tons</li>
            </ul>`
                }
            }}
        }
    }else{
        html += `
                < legend > Mineral Stock</legend >
                    `
        */ 