const database = {
    guests : [{
        id: 1,
        name : "Jarry Larry",
        sectionId : 4
        
    },
    {
        id: 2,
        name : "Marry Carrie",
        sectionId : 1
        
    },
    {
        id: 3,
        name : "John Doe",
        sectionId : 3
        
    },
    {
        id: 4,
        name : "Lisa Teresa",
        sectionId : 6
        
    },
    {
        id: 5,
        name : "Larry Jarry",
        sectionId : 5
        
    },
    {
        id: 6,
        name : "Holly Wally",
        sectionId : 2
        
    },
    {
        id: 7,
        name : "Josh Joshington",
        sectionId : 1
        
    },
    {
        id: 8,
        name : "Ben Bower",
        sectionId : 4
        
    },
    {
        id: 9,
        name : "Brooke Pardue",
        sectionId : 3
        
    },
    {
        id: 10,
        name : "Seth Fields",
        sectionId : 2
        
    }
],
sections: [{
        id : 1,
        name: "Lodge" 
},
{
    id : 2,
    name: "Lost Wolf Trail" 
},
{
    id : 3,
    name: "Chamfort River" 
},
{
    id : 4,
    name: "Gander River" 
},
{
    id : 5,
    name: "Campgrounds" 
},
{
    id : 6,
    name: "Pine Buffs Trail" 
}
],
services: [{
    id: 1,
    name: "Lodging"
},
{
    id: 2, 
    name: "Parking",
},
{
    id: 3,
    name: "Information"
},
{
    id: 4, 
    name: "Picnicking",
},
{
    id: 5,
    name: "Hiking"
},
{
    id: 6,
    name: "Rock Climbing"
},
{
    id: 7,
    name: "Rafting"
},
{
    id: 8,
    name: "Canoeing"
},
{
    id: 9,
    name: "Fishing"
},
{
    id: 10,
    name: "Zip lines"
}
],
serviceSections: [{
    id: 1,
    serviceId: 1,
    sectionId: 1

},
{
    id: 2,
    serviceId: 2,
    sectionId:1
},
{
    id: 3,
    serviceId: 3,
    sectionId: 1
},
{
    id: 4,
    serviceId: 4,
    sectionId:1
},
{
    id: 5,
    serviceId: 5,
    sectionId: 2
},
{
    id: 6,
    serviceId: 6,
    sectionId: 2
},
{
    id: 7,
    serviceId: 7,
    sectionId:3
},
{
    id: 8,
    serviceId: 8,
    sectionId: 3,
},
{
    id: 9,
    serviceId: 9,
    sectionId: 3
},
{
    id: 10,
    serviceId: 10,
    sectionId: 6
},
{
    id: 11,
    serviceId: 1,
    sectionId: 5
},
{
    id: 12,
    serviceId: 2,
    sectionId: 5
},
{
    id: 13,
    serviceId: 3,
    sectionId: 5
},
{
    id: 14,
    serviceId: 4,
    sectionId: 6
},
{
    id: 15,
    serviceId: 5,
    sectionId: 4
},
{
    id: 16,
    serviceId: 9,
    sectionId: 4
},
{
    id: 17,
    serviceId: 5,
    sectionId: 6

},

],
attractions: [{
    id: 1,
    name: "Hotel"
},
{
    id: 2,
    name: "Restaurant"
},
{
    id: 3,
    name: "Park Office"
},
{
    id: 4,
    name: "Children play areas"
},
{
    id: 5,
    name: "Food vendors"
}
],
attractionSections: [{
    id: 1,
    attractionId: 1,
    sectionId: 1
},
{
    id: 2,
    attractionId: 2,
    sectionId: 1
},
{
    id: 3,
    attractionId: 3,
    sectionId: 5
},
{
    id: 4,
    attractionId: 4,
    sectionId: 5
},
{
    id: 5,
    attractionId: 5,
    sectionId: 6
}
]

}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}
export const getSections = () => {
    return database.sections.map(sections => ({...sections}))
}
export const getServices = () => {
    return database.services.map(services => ({...services}))
}
export const getServiceSections = () => {
    return database.serviceSections.map(serviceSections => ({...serviceSections}))
}
export const getAttractions = () => {
    return database.attractions.map(attractions => ({...attractions}))
}
export const getAttractionSections = () => {
    return database.attractionSections.map(attractionSections => ({...attractionSections}))
}