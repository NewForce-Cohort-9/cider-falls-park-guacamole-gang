<<<<<<< HEAD
import { getGuests } from "./guestsList.js"
import { getSections } from "./sectionsList.js"
import { getServices } from "./database.js"
import { getAttractions } from "./database.js"
import { getServiceSections } from "./database.js"
import { getAttractionSections } from "./database.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>

<article class="detail--right aligned list">
    <section class="guestList">
        <h2>Guests</h2>
        ${getGuests()}
    </section>
</article>


<article class="detail--main grid">
    <section class="sectionsList">
        <h2>Sections</h2>
        ${getSections()}
    </section>

    <section class="servicesList">
        <h3>Services</h3>
        ${getServices()}
    </section>
    
    <section class="attractionsList">
       <h3></h3>
       ${getAttractions()}
    </section>
   </article>


   <article class="detail--clickable services list ">
    <section class="serviceSection">
        <h2>Guests</h2>
        ${getServiceSections()}
    </section>

    <section class="attractionsSection">
        <h2>Guests</h2>
        ${getAttractionSections()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML
=======
import { sectionsList } from "./sectionsList.js";

const sectionContainer = document.querySelector("#sectionContainer")

const applicationHTML = `${sectionsList()}`

sectionContainer.innerHTML = applicationHTML
>>>>>>> main
