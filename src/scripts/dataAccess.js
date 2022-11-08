const transientState = { 
   
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
    return transientState.governorsChoice=id
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
    return transientState
}



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



