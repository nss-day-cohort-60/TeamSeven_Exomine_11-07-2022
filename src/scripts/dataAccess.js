export const transientState = {
    governors: [], 
    facilities: [], 
    colonies: [], 
    facilityMineralLog: [], 
    colonyMineralLog: [],
    facilitiesChoice: [],
    cart : {}
    
    // start as empty arrays that will store objects
}


const API = "http://localhost:8088"


/* GOVERNORS */
export const fetchGovernors = () => { 
    return fetch(`${API}/governors`)
        .then(response => response.json())
        .then(
            (governorsData) => { 
                transientState.governors = governorsData
            }
        )
}

export const getGovernors = () => { 
    return transientState.governors.map(governor => ({...governor}))
}

export const setGovernorsChoice = (id) => {
    return transientState.cart.governorsChoice=id
}

export const setFacilitiesChoice = (id) => {
    return transientState.cart.facilitiesChoice=id
}

export const setPurchaseChoice = (id) => {
    return transientState.cart.purchaseChoice=id
}


/* COLONIES */ 
export const fetchColonies = () => { 
    return fetch(`${API}/colonies`)
        .then(response => response.json())
        .then(
            (colonyData) => { 
                transientState.colonies = colonyData
            }
        )
}

export const getColonies = () => { 
    return transientState.colonies.map(colony => ({...colony}))
}


/* FACILITIES */ 
export const fetchFacilities = () => { 
    return fetch(`${API}/facilities`)
        .then(response => response.json())
        .then(
            (facilityData) => { 
                transientState.facilities = facilityData
            }
        )
}

export const getFacilities = () => { 
    return transientState.facilities.map(facility => ({...facility}))
}


export const getTransient = () => {
    return transientState.cart
}

/* FACILITY MINERAL LOG */ 
export const fetchFacilityMineralLog = () => { 
    return fetch(`${API}/facilityMineralLog`)
        .then(response => response.json())
        .then(
            (facilityData) => { 
                transientState.facilityMineralLog = facilityData
            }
        )
}

export const getFacilityMineralLog = () => { 
    return transientState.facilityMineralLog.map(facilityMineral => ({...facilityMineral}))
}

/* COLONY MINERAL LOG */ 
export const fetchColonyMineralLog = () => { 
    return fetch(`${API}/colonyMineralLog`)
        .then(response => response.json())
        .then(
            (colonyData) => { 
                transientState.colonyMineralLog = colonyData
            }
        )
}

export const getColonyMineralLog = () => { 
    return transientState.colonyMineralLog.map(colonyMineral => ({...colonyMineral}))
}


// export const sendFacilities = (userServiceRequest) => {

//     return fetch(`${API}/facilites`, "PUT")
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })
// }



// function that will POST mineral choice to API 
// export const purchaseMineral = (colonyPurchases) => { 

//     // sends information to json
//     const fetchOptions = { 
//         method: "POST", 
//         headers: { 
//             "Content-Type": "application/json"
//         }, 
//         body: JSON.stringify(colonyPurchases)
//     }

//     // fetch info from API 
//     // re-render & update state
//     return fetch(`${API}/mineralChoice`, fetchOptions)
//         .then(response => response.json())
//          .then(() => { 
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })
// }



