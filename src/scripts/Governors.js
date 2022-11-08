import {getGovernors, setGovernorsChoice } from "./dataAccess.js"

//creating drop down <select> with list of all governor.name
//we need'a getter
//generate Colony Mineral list based on governor.colonyId fk IF greater than 0.

export const Governors = () => {
    const govna = getGovernors()

    let html = `
        <ul>
            <label for="governor">Choose a Governor:</label>
            <select id="governorsList">
                <option value="governor">Governors</option>
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


document.addEventListener("change", (event) => {
    if(event.target.name === "governor") {
        setGovernorsChoice(parseInt(event.target.value))
        //renderColony()

    }
})
 

//using.find to match the ids. once the ids are matched, then we can render the proper data. render colonies function is a messy messy 

/*
export const renderColony = () => { 
    const colonies = getColonies()
    const cart = transientCart()

    const matchedColony = colonies.find(col => col.id === cart.governors)
    //gov drop will populate the transient cart. if the gov.id is the colony.id render the colony data
    `
    <ul>
        <div id="colonyMinerals">
            // ${colonies.map(
            //     col => {

            //         if (col.id === )
            //         return `div id="${col.id}" name="colonies">${col.name}</div>
            //                 <li>${col.ironStock}</li>
            //                 <li>${col.tAluminumStock}</li>
            //                 <li>${col.chromiumStock}</li>
            //                 <li>${col.berylliumStock}</li>
            //                 <li>${col.benadrylStock}</li>`
            //     }
            // )}


    </ul>`
}
*/ 


