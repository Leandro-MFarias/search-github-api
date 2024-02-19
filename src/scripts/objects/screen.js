const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do Perfil de Usuário" />
                
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                    <div class="follows">
                        <p>Seguidores ${user.myFollowers}</p>
                        <p>Seguindo ${user.iFollowing}</p>
                    </div>
                </div>
            /div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=
            `<li>
                <a class="repo-link" href="${repo.html_url}" target="_blank">${repo.name}
                <br><br>
                    <p class="repo-info">🍴${repo.forks}</p> 
                    <p class="repo-info">⭐${repo.stargazers_count}</p>
                    <p class="repo-info">👀${repo.watchers}</p>
                    <p class="repo-info">👨‍💻${repo.language ?? 'Não possuie tec'}</p> 
                </a>
            <li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>`
        }

        let eventItens = ''
        if (user.events.length > 0) {
            user.events.forEach(event => {
                let eventMessage = ''

                if (event.type === 'PushEvent') {
                    eventMessage = event.payload.commits.map(commit => commit.message)
                }
                eventItens += `<li><strong>${event.repo.name}</strong> - ${eventMessage}</li>`
            })

            this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Eventos</h2>
                <ul>${eventItens}</ul>
            </div>`
        } else {
            this.userProfile.innerHTML += 
            `<div class="events section">
                <h2>Eventos</h2>
                <p>Nenhum evento encontrado.</p>
            </div>`
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }