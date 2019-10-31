
let headerDiv = document.querySelector('.cards')
axios.get('https://api.github.com/users/AnthonyLopez1120')
  .then(response =>{
    console.log(response.data);
    let stuff = response.data;
    headerDiv.appendChild(gitHubCard(stuff))


  })
  .catch(error => {
    console.log("Error:", err);
})




const followersArray = ["emilyelri", "lyndsiWilliams", "cmruss", "bseverino", "wsu718"];

followersArray.forEach(item=>{
  axios.get(`https://api.github.com/users/${item}`)
  .then(
    response=>{
        console.log(response.data)
        let followersInfo = response.data
        headerDiv.appendChild(gitHubCard(followersInfo))
  
      
    })
        
})


  


function gitHubCard(obj){
  let card = document.createElement('div')
  let pic = document.createElement('img')
  let info = document.createElement('div')
  let name = document.createElement('h3')
  let userName = document.createElement('p')
  let location = document.createElement('p')
  let profile = document.createElement('p')
  let link = document.createElement('a')
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let bio = document.createElement('p')

  card.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')
  
  pic.src = obj.avatar_url
  name.textContent = `${obj.name}`
  userName.textContent= `${obj.login}`
  location.textContent = `Location: ${obj.location}`
  profile.textContent = "Profile: "
  link.textContent = obj.html_url
  link.href = obj.html_url
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`

  card.appendChild(pic)
  card.appendChild(info)
    info.appendChild(name)
    info.appendChild(userName)
    info.appendChild(location)
    info.appendChild(profile)
      profile.appendChild(link)
    info.appendChild(followers)
    info.appendChild(following)
    info.appendChild(bio)

  return card;
}


