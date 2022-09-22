// We are building a fighting game using APIs
// We are using from superheroapi.com
// Let's go

// Our service uses an access token (Personal ID)
// Then the base URL

const myToken = '759041635204041'
const baseUrl = `https://www.superheroapi.com/api.php/${myToken}`

// Using this below, we will make a fuction
// fetch('https://www.superheroapi.com/api.php/759041635204041/245')
//     .then(content => content.json())
//     .then(json => console.log(json))

// Lets set our variables
let heading = `<h2 class="text-sm text-center underline underline-offeset-8 md:text-lg">CHARACTER STATS</h2>`

let player1 = document.getElementById('player1')
let player1Name = document.getElementById('player1Name')
let player1Powerstats = document.getElementById('player1Powerstats')

let player2 = document.getElementById('player2')
let player2Name = document.getElementById('player2Name')
let player2Powerstats = document.getElementById('player2Powerstats')

let getNewHero = document.getElementById('getNewHero')

let searchInput = document.getElementById('searchInput')
let search1 = document.getElementById('search1')
let search2 = document.getElementById('search2')

// Now we create a function to grab a random ID from our baseURL...
// This is for the random Character

const getRandomHero = (id, id2, name) => {
    fetch(`${baseUrl}/${id}`)
    .then(content => content.json())
    .then(json => {
        console.log(json)

        let stats = getStats(json)

        let heroName = json.name
        player1Name.innerText = heroName.toUpperCase()

        let heroImg = json.image.url
        player1.src = `${heroImg}`

        let powerstats = json.powerstats
        player1Powerstats.innerHTML = `${heading} ${stats}`
    })
    fetch(`${baseUrl}/${id2}`)
    .then(content => content.json())
    .then(json => {
        // console.log(json)

        let heroName = json.name
        player2Name.innerText = heroName.toUpperCase()

        let heroImg = json.image.url
        player2.src = `${heroImg}`

        let stats = getStats(json)
        player2Powerstats.innerHTML = `${heading} ${stats}`
    })
};

// This is for the search Button for 1st player

const searchHero1 = (name) => {
    console.log(searchInput.value)
    fetch(`${baseUrl}/search/${name}`)
    .then(content => content.json())
    .then(json => {
        console.log(json)

        let heroName = json.results[0].name
        player1Name.innerText = heroName.toUpperCase()

        let heroImg = json.results[0].image.url
        player1.src = `${heroImg}`

        let stats = getStats(json.results[0])
        player1Powerstats.innerHTML = `${heading} ${stats}`
    })
}

// This is for the search Button for 2nd player

const searchHero2 = (name) => {
    fetch(`${baseUrl}/search/${name}`)
    .then(content => content.json())
    .then(json => {
        console.log(json)

        let heroName = json.results[0].name
        player2Name.innerText = heroName.toUpperCase()

        let heroImg = json.results[0].image.url
        player2.src = `${heroImg}`

        let stats = getStats(json.results[0])
        player2Powerstats.innerHTML = `${heading} ${stats}`
    })
}

// We would like to display stats for each character selected.

const getStats = (hero) => {
    // console.log(Object.keys(hero.powerstats))
    const heroStats = Object.keys(hero.powerstats).map(stat => {
        return `<h2>${stat.toUpperCase()}: ${hero.powerstats[stat]}</h2>`
    })
    console.log(heroStats)
    return heroStats.join('')
}


const getRandom = () => {
    const numberOfHereos = 731
    return Math.floor(Math.random() * numberOfHereos)+ 1
}


// Call the onclick function
// this way everytime the random hero button is clicked...
// it will spawn a new hero
getNewHero.onclick = () => getRandomHero(getRandom(), getRandom())

// This will activate the function and let us search...
// our desired character.
search1.onclick = () => searchHero1(searchInput.value)
search2.onclick = () => searchHero2(searchInput.value)
