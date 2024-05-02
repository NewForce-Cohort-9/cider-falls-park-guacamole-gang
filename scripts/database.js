const database = {
    sections: [
        {id: 1, name: "Thunder River"}
    ],
    services: [
        {id: 1, name: "Hiking"}
    ],
    serviceSections: [
        {id: 1, serviceId: 1, sectionId: 1}
    ],
    attractions: [
        {id:1, name: "Hotel"}
    ],
    attractionSections:[
        {id: 1, sectionId: 1, attractionId: 1}
    ]
}

export const getSections = () => {
    return database.sections.map(section => ({...section}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getServiceSections = () => {
    return database.serviceSections.map(serviceSec => ({...serviceSec}))
}

export const getAttractions = () => {
    return database.attractions.map(attraction => ({...attraction}))
}

export const getAttractionSections = () => {
    return database.attractionSections.map(attractionSec => ({...attractionSec}))
}