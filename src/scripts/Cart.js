// Displays values stored in transitory state
// Purchase button as click event that:
    // compare and confirm click event target to the button
    // add transitory values to Colony minerals
    // reset the transitory state
import { getTransient, getColonies, getColonyMineralLog, getFacilityMineralLog, getMinerals, getFacilities, putColonyLog, putFacilityLog, postColonyLog } from "./dataAccess.js"


export const Cart = () => {
    const transient = getTransient()
    const colonies = getColonies()
    const facilities = getFacilities()
    const minerals = getMinerals()
    const filteredFacilities = facilities.filter(filt=>filt.id===transient.facilitiesChoice)
    const filteredColonies = colonies.filter(colon=>colon.id===transient.coloniesChoice)
    const filteredMinerals = minerals.filter(min=>min.id===transient.purchaseChoice)
    let html=`
    <div class="spaceCart">
        <legend>Space Cart</legend>
        `
        if(transient.purchaseChoice){
            for(const colon of filteredColonies){
                for(const min of filteredMinerals){
                    for(const filt of filteredFacilities){
                    
                    html +=`1 ton of ${min.name} from ${filt.name} for ${colon.name}.`
                    }
                }
            }
        }

    html += `<button id="button">Purchase Mineral</button>
    </div>`
    return html
}

mainContainer.addEventListener(
    "click",
    (e) => {
        //confirm what was clicked
        if(e.target.id === "button"){
            //declaring objects
            const transient = getTransient()

            const colonies = getColonies()
            const [filteredColonies] = colonies.filter(colon=>colon.id===transient.coloniesChoice)

            const facilities = getFacilities()
            const [filteredFacilities] = facilities.filter(filt=>filt.id===transient.facilitiesChoice)
            
            const minerals = getMinerals()
            const [filteredMinerals] = minerals.filter(min=>min.id===transient.purchaseChoice)

            const coloniesLog = getColonyMineralLog()
            const [filteredCLog] = coloniesLog.filter(log=>log.colonyId===filteredColonies.id && log.mineralId===filteredMinerals.id)

            const facilitiesLog = getFacilityMineralLog()
            const [filteredFLog] = facilitiesLog.filter(log=>log.facilityId===filteredFacilities.id && log.mineralId===filteredMinerals.id)

            //modify objects to pass as arguments
            if(filteredCLog){
                filteredCLog.stock += 1
                putColonyLog(filteredCLog)
            }else{
                const cLogObj ={
                    colonyId:filteredColonies.id,
                    mineralId:filteredMinerals.id,
                    stock:1
                }
                postColonyLog(cLogObj)
            }
            filteredFLog.stock -= 1
            putFacilityLog(filteredFLog)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)