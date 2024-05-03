import { getSections, getServices, getAttractions, getAttractionSections, getServiceSections } from "./database.js"

const sections = getSections()
const servicesSection = getServiceSections()
const services = getServices()
const attractionSection= getAttractionSections()
const attractions = getAttractions()



export const sectionsList = () => {
    let sectionHTML = `<section>`
    for (const serviceSec of servicesSection) {
        for (const section of sections) {
            sectionHTML += `<h2 data-type="section">${section.name}</h2>`
            sectionHTML+= `<div>Services:</div>`
            for (const service of services) {
                
                if(section.id === serviceSec.sectionId && serviceSec.serviceId === service.id) {
                    sectionHTML += `<div>${service.name}</div>`
                }
                
            }
        }
    } 
    sectionHTML += `<div>Other Attractions:</div>`
    for (const attractionSec of attractionSection) {
        for (const attraction of attractions) {
            for (const section of sections) {
                if(section.id === attractionSec.sectionId && attractionSec.attractionId === attraction.id) {
                    sectionHTML += `<div> ${attraction.name}</div>`
                }
                
            }
        }
    }      
    sectionHTML += `</section>`
    return sectionHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "section"){
            let counter = 0
            for (const guest of guests) {
                if(parseInt(itemClicked.dataset.id) === guest.sectionId)
                    counter ++
                
            }
            window.alert(`There are ${counter} guests in this area.`)
        }
    }
)