document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar')
    const name = document.getElementById('profile-name')
    const username = document.getElementById('profile-username')
    const repositories = document.getElementById('repositories')
    const followers = document.getElementById('followers')
    const following = document.getElementById('following')
    const profile = document.getElementById('profile-link')
    const endpoint = 'https://api.github.com/users/ErickeEU'

    fetch(endpoint)
    .then(function(response){
        if (response.ok) {
            console.log('Sucesso')
            return response.json()
        } else {
            alert('Ocorreu um erro. Tente novamente mais tarde.')
        }
    })
    .then(function(json){
        avatar.src = json.avatar_url
        name.innerText = json.name
        username.innerText = json.login
        repositories.innerText = json.public_repos
        followers.innerText = json.followers
        following.innerText = json.following
        profile.href = json.html_url
    })

})