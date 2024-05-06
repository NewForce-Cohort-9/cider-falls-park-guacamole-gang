import { getGuests } from "./database.js"

const guests = getGuests()

export const Guests = () => {
  let guestsHTML = "<ul>"

  for (const guest of guests) {
    guestsHTML += `
    <li id="guestNames" data-type = "guest"
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