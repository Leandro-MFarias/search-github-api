import { baseUrl, eventsQuantity } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}${userName}/events?per_page=${eventsQuantity}`)
    const events = await response.json()
    return events.filter(element => element.type === 'CreanteEvent' || element.type === 'PushEvent').slice(0,eventsQuantity)
}

export { getEvents }