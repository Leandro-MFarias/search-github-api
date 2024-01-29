import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvents } from "./services/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (enter) => {
    const userName = enter.target.value
    const key = enter.which || enter.keyCode
    const isEnterPressed = key === 13

    if(isEnterPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    console.log(repositoriesResponse)
    const eventResponse = await getEvents(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventResponse)

    screen.renderUser(user)
}

function validateEmptyInput(userName) {
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}