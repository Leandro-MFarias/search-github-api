const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    myFollowers: '',
    iFollowing: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.myFollowers = gitHubUser.followers
        this.iFollowing = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(event) {
        this.events = event
    }
}

export { user }