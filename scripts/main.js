import { Guests} from "./guestsList.js"
import { sectionsList, servicesList } from "./sectionsList.js"


const sectionContainer = document.querySelector("#sectionContainer")

const applicationHTML = `
<h1 id="title">Cider Falls Park</h1>

<article class="detail--main grid">
    <section class="sectionsList">
        <h2>Sections</h2>
        ${sectionsList()}
    </section>
</article>

<article class="detail--right--aligned list">
    <section class="guestList">
        <h2>Guests</h2>
        ${Guests()}
    </section>
</article>
`
sectionContainer.innerHTML = applicationHTML