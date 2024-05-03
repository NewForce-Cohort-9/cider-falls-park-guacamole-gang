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

        let servicefilter = servicesSection.filter(serviceSec => section.id === serviceSec.sectionId )
        // console.log(servicefilter)

        let servicehtml = servicefilter.map( serviceSec => {
            const service = services.find(service => serviceSec.serviceId === service.id)
            return`<li>${service.name}</li>`
        })
        // console.log(servicehtml)


        // for (const serviceSec of servicesSection) {
        //     for (const service of services) { 
        //         if(section.id === serviceSec.sectionId && serviceSec.serviceId === service.id) {
        //             sectionHTML += `<li>${service.name}</li>`
        //         }
        //     }
            
        // }

        sectionHTML += servicehtml.join(" ")

        sectionHTML += `</ul>`
        
        let numb = 0

        for (const attractionSec of attractionSection) {
           
            for (const attraction of attractions) {
                if(section.id === attractionSec.sectionId && attractionSec.attractionId === attraction.id) {
                    numb++
                    if(numb  === 1 ){
                        sectionHTML += `<ul><h3>Other Attractions:</h3>`
                    }
                    sectionHTML += `<li>${attraction.name}</li>`
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

export const servicesList = () => {
    let serviceHTML = `<ul class="servicesList">Cider Falls Park offers the following services: `
    for (const service of services) {
        serviceHTML += `<li data-type="service" data-id="${service.id}">${service.name}</li>`
    }
    serviceHTML +=`</ul>`
    return serviceHTML
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "service"){
            let alert = ""
            let alertTwo = ""
            let counter = 0
            for (const serviceSec of servicesSection) {
                for (const section of sections) {
                    if( parseInt(itemClicked.dataset.id) === serviceSec.serviceId && section.id === serviceSec.sectionId) {
                        counter ++
                        if (counter === 1){
                            alert += `${section.name} `
                        }
                        if (counter > 1){
                            alertTwo +=`, ${section.name}`
                        }

                    }
                    
                }
            }
            window.alert(`This service is available in ${alert}${alertTwo}.`)
        }
    }
)


// loop section
// for of
// compare service

// compare attraction 