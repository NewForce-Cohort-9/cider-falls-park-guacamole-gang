import { Guests} from "./guestsList.js"
import { sectionsList, servicesList } from "./sectionsList.js"


const sectionContainer = document.querySelector("#sectionContainer")

const applicationHTML = `
<<<<<<< HEAD
<h1 id="title">Cider Falls Park</h1>

<article class="detail--main--grid">
=======
<h1>Cider Falls Park</h1>
<article class="serviceList">
${servicesList()}
</article>
<article class="detail--right aligned list">
    <section class="guestList">
        <h2>Guests</h2>
        ${Guests()}
    </section>
</article>


<article class="detail--main grid">
>>>>>>> a650369942d1f3df45a9d53ba28adda076ff8a10
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