const transientCart = { 
    // start as empty arrays that will store objects
    governors: [], 
    colonies: [], 
    facilities: [], 
    cart: {

    }
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#mainContainer")


/* GOVERNORS */
export const fetchGovernors = () => { 
    return fetch(`${API}/governors`)
        .then(response => response.json())
        .then(
            (governorsData) => { 
                transientCart.governors = governorsData
            }
        )
}

export const getGovernors = () => { 
    return transientCart.governors.map(governor => ({...governor}))
}


/* COLONIES */ 
export const fetchColonies = () => { 
    return fetch(`${API}/colonies`)
        .then(response => response.json())
        .then(
            (colonyData) => { 
                transientCart.colonies = colonyData
            }
        )
}

export const getColonies = () => { 
    return transientCart.colonies.map(colony => ({...colony}))
}


/* FACILITIES */ 
export const fetchFacilities = () => { 
    return fetch(`${API}/facilities`)
        .then(response => response.json())
        .then(
            (facilityData) => { 
                transientCart.facilities = facilityData
            }
        )
}

export const getFacilities = () => { 
    return transientCart.facilities.map(facility => ({...facility}))
}


/* CART */ 
export const fetchCart = () => {
    return fetch(`${API}/cart`)
        .then(response => response.json())
        .then( 
            (cartData) => { 
                transientCart.cart = cartData
            }
        )
}

export const getCart = () => { 
    return transientCart.cart.map(item => ({...item}))
}


// function that will POST mineral choice to API 
export const purchaseMineral = (colonyPurchases) => { 

    // sends information to json
    const fetchOptions = { 
        method: "POST", 
        headers: { 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(colonyPurchases)
    }

    // fetch info from API 
    // re-render & update state
    return fetch(`${API}/mineralChoice`, fetchOptions)
        .then(response => response.json())
         .then(() => { 
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



