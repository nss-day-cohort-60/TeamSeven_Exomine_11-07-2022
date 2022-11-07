//we need one.

const database = {
    transientCart: {},
    governors: [
        {
            id: 1,
            name: "Wilhuff Tarkin",
            colonyId: 1
        },{
            id: 2,
            name: "Mace Windu",
            colonyId: 2
        },{
            id: 3,
            name: "BEASLEY",
            colonyId: 3
        },{
            id: 4,
            name: "Chewbacca",
            colonyId: 2
        },{
            id: 5,
            name: "Queen Amidala",
            colonyId: 1
        },{
            id: 6,
            name: "Doctor Barnaby Burtswallier III",
            colonyId: 3
        }
    ],
    facilities: [
        {
            id: 1,
            name: "Ganymeade",
            iron: 645,
            transparentAluminum: 745,
            chromium: 623,
            beryllium: 567,
            benadryl: 168
        },
        {
            id: 2,
            name: "Io",
            iron: 645,
            transparentAluminum: 745,
            chromium: 623,
            beryllium: 567,
            benadryl: 168
        },
        {
            id: 3,
            name: "Titan",
            iron: 645,
            transparentAluminum: 745,
            chromium: 623,
            beryllium: 567,
            benadryl: 168
        },
        {
            id: 4,
            name: "New jersey",
            iron: 645,
            transparentAluminum: 745,
            chromium: 623,
            beryllium: 567,
            benadryl: 168
        },
    ],
    colonies: [
        {
            id: 1,
            name: "Jamestown, Venus",
            ironStock: 23,
            tAluminumStock: 32,
            chromiumStock: 4,
            berylliumStock: 57,
            benadrylStock: 789
        },{
            id: 2,
            name: "Losylvannia, Jupiter",
            ironStock: 6985,
            tAluminumStock: 654,
            chromiumStock: 345,
            berylliumStock: 42,
            benadrylStock: 4567
        },{
            id: 3,
            name: "Chawaysea, Wayland Prime",
            ironStock: 5,
            tAluminumStock: 5647,
            chromiumStock: 6,
            berylliumStock: 16,
            benadrylStock: 0
        },
    ]
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged"))
}

