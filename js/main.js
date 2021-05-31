// GET THE INPUT VALUE FROM USER
const form = document.querySelector('.form')
const searchInput = document.querySelector('.search-input')
const btnOk = document.querySelector('.btn')

// searchInput.focus()

// default values
let betterPopulationNums = 0
let capitalCity = ''

// GETTING THE REAL COUNTRY NAME FROM USER INPUT USING ANOTHER API AND PASSING THE VALUE TO getCovidCountry()
const apiCountry = 'https://restcountries.eu/rest/v2/name/'

async function getCountryIso(nameOfCountry = "Serbia") {
    const res = await fetch(apiCountry + nameOfCountry)
    const data = await res.json()

    // console.log(data)
    // console.log(nameOfCountry)

    // hardcoded India country because of bad API result
    if (nameOfCountry === 'india' || nameOfCountry === 'India' || nameOfCountry === 'indi') {
        let countryName = 'India'
        betterPopulationNums = data[1].population
        capitalCity = data[1].capital
        getCovidCountry(countryName)
    } else {
        // every other country results are good
        let countryName = data[0].alpha3Code

        // console.log('naziv zemlje', countryName)
        betterPopulationNums = data[0].population
        capitalCity = data[0].capital
        getCovidCountry(countryName)
    }
}

getCountryIso()

// API URL FOR GETTING COVID STATS BY COUNTRY
const covidCountryURL = `https://corona.lmao.ninja/v2/countries/`

async function getCovidCountry(countryName = "Serbia") {

    const res = await fetch(covidCountryURL + countryName)
    const data = await res.json()
    // console.log(data)

    setTimeout(() => {
        // send data to createTable()
        createTable(data)
    }, 700);
}
getCovidCountry()

// CREATING DESIGN FROM FETCHED DATA
const cardContent = document.querySelector('.card__content');

function createTable(data) {

    let { country, population, todayCases, todayDeaths, todayRecovered, cases, casesPerOneMillion, recovered, recoveredPerOneMillion, tests, active, deaths, deathsPerOneMillion, critical, criticalPerOneMillion } = data

    // console.log(data.countryInfo.flag)

    const dataHTML = `
    <div class="card--title">
             <h1>${country}</h1>
             <h2>Glavni grad: ${capitalCity}</h2>
            <h2>Populacija: ${betterPopulationNums.toLocaleString("sr", "RS")}</h2>
            <img src="${data.countryInfo.flag}" alt="">
        </div>
        <div class="card-daily">
            <h1>Dnevna statistika</h1>
            <h2>Zaraženi: ${todayCases.toLocaleString("sr", "RS")}</h2>
            <h2>Umrlih: ${todayDeaths.toLocaleString("sr", "RS")}</h2>
            <h2>Ozdravili: ${todayRecovered.toLocaleString("sr", "RS")}</h2>
        </div>
        <div class="card-stats">
            <h1>Ukupna statistika</h1>
            <h2>Slučajeva: ${cases.toLocaleString("sr", "RS")}</h2>
            <h2>Slučajeva na 1mil: ${casesPerOneMillion.toLocaleString("sr", "RS")}</h2>
            <h2>Ozdravili: ${recovered.toLocaleString("sr", "RS")}</h2>
            <h2>Ozdravili na 1mil: ${recoveredPerOneMillion.toLocaleString("sr", "RS")}</h2>
            <h2>Testiranih: ${tests.toLocaleString("sr", "RS")}</h2>
            <h2>Zaraženih: ${active.toLocaleString("sr", "RS")}</h2>
            <h2>Umrlih: ${deaths.toLocaleString("sr", "RS")}</h2>
            <h2>Umrlih na 1mil: ${deathsPerOneMillion.toLocaleString("sr", "RS")}</h2>
            <h2>Kritično: ${critical.toLocaleString("sr", "RS")}</h2>
            <h2>Kritično na 1mil: ${criticalPerOneMillion.toLocaleString("sr", "RS")}</h2>
        </div>
    `
    cardContent.innerHTML = dataHTML
}

// EVENTS
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(searchInput.value)
    let nameOfCountry = searchInput.value
    getCountryIso(nameOfCountry)
    searchInput.value = ''

    searchInput.blur()
})

// GET COUNTRY NAME OPTIONS IN SEARCH INPUT WHEN USER IS TYPING
const apiCountryName = 'https://restcountries.eu/rest/v2/name/'
const dataListEl = document.getElementById('suggestion-countries')

searchInput.addEventListener('input', async () => {
    let searchValue = searchInput.value
    // console.log(searchValue)

    // Reset options every time user types new character
    dataListEl.innerHTML = ''

    let res = await fetch(apiCountryName + searchValue)
    let data = await res.json()
    // console.log(data)

    // Check if there is more then 5 results, or less then 5
    let length = data.length > 5 ? 5 : data.length

    for (let i = 0; i < length; i++) {
        // Country names from fetched results
        let countryName = data[i].name
        // console.log(countryName)

        let optionEl = document.createElement('option')
        optionEl.setAttribute('value', countryName)
        dataListEl.appendChild(optionEl)
    }

})

