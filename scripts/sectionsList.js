import { getSections, getServices, getAttractions, getAttractionSections, getServiceSections, getGuests } from "./database.js"

const sections = getSections()
const servicesSection = getServiceSections()
const services = getServices()
const attractionSection= getAttractionSections()
const attractions = getAttractions()
const guests = getGuests()



export const sectionsList = () => {
    let sectionHTML = `<section>`
    for (const section of sections) {
    sectionHTML += `<div class="${section.id}">`

        sectionHTML += `<h2 data-type="section" data-id="${section.id}">${section.name}</h2>`
        sectionHTML+= `<ul><h3>Services:</h3>`
        for (const serviceSec of servicesSection) {
            
            for (const service of services) {
                
                if(section.id === serviceSec.sectionId && serviceSec.serviceId === service.id) {
                    
                    sectionHTML += `<li>${service.name}</li>`
                }
            }
            
        }
        sectionHTML += `</ul>`
        sectionHTML += `<ul><h3>Other Attractions:</h3>`
        for (const attractionSec of attractionSection) {
            for (const attraction of attractions) {
                if(section.id === attractionSec.sectionId && attractionSec.attractionId === attraction.id) {
                    
                    sectionHTML += `<li> ${attraction.name}</li>`
                }
                    
              }
            }
            sectionHTML += `</ul>`
            sectionHTML += `</div>`
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