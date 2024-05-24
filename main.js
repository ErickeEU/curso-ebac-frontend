document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar')
    const name = document.getElementById('profile-name')
    const username = document.getElementById('profile-username')
    const repositories = document.getElementById('repositories')
    const followers = document.getElementById('followers')
    const following = document.getElementById('following')
    const profile = document.getElementById('profile-link')
    const endpoint = 'https://api.github.com/users/ogiansouza'

    fetch(endpoint)
    .then(function(response){
        return response.json()
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
    .catch(function(erro){
        alert('vamo dançar tudo nu tudo nu tudo co dedo no cu menos eu')
    })
})