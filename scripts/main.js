import { Guests} from "./guestsList.js"
import { sectionsList, servicesList } from "./sectionsList.js"


const sectionContainer = document.querySelector("#sectionContainer")

const applicationHTML = `
<article class="serviceList">
${servicesList()}
</article>
<article>
    <section class="guestList">
        <h2>Guests</h2>
        ${Guests()}
    </section>
</article>


<article>
    <section class="sectionsList">
    <div>
        <h2 id="sectionHeader">Sections</h2>
        ${sectionsList()}
        </div>
    </section>
</article>
`
sectionContainer.innerHTML = applicationHTML
