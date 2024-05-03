import { sectionsList } from "./sectionsList.js";

const sectionContainer = document.querySelector("#sectionContainer")

const applicationHTML = `${sectionsList()}`

sectionContainer.innerHTML = applicationHTML