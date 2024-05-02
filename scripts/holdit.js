export const sectionsList = () => {
    let sectionHTML = `<section>`
    for (const section of sections) {
        sectionHTML += `<h2>${section.name}</h2>`
        for (const service of services) {
            if (servicesSection.serviceId === service.id && servicesSection.sectionId === section.id){
                sectionHTML += `<div>${service.name}</div>`
            }
            
        }
        for (const attraction of attractions) {
            if (attraction.id === attractionSection.sectionId && section.id === attractionsSection.sectionId){
                sectionHTML += `${attraction.name}`
            }
            
        }
    }
    sectionHTML += `</section>`
    return sectionHTML

}