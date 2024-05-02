import { sectionsList } from "./sectionsList.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `${sectionsList()}`

mainContainer.innerHTML = applicationHTML