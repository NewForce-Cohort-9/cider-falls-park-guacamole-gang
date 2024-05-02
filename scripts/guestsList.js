import { getGuestList } from "./database.js"

const guests = getGuestList()

export const Guests = () => {
  let guestsHTML = "<ul>"

  for (const guest of guests) {
    guestsHTML += `
    <li data-type = "guest"
    data-name = "${guest.name}"
    data-id = "${guest.id}"
    data-sectionId = "${guest.sectionId}"
    >${guest.name}
    </li>`

  }

  guestsHTML += "</ul>"

  return guestsHTML
} 

/* id 
name
sectionId*/