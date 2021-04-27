// GET THE INPUT VALUE FROM USER
const form = document.querySelector('.form')
const searchInput = document.querySelector('.search-input')
const btnOk = document.querySelector('.btn')

// searchInput.focus()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(searchInput.value)
    let nameOfCountry = searchInput.value
    getCountryIso(nameOfCountry)
    searchInput.value = ''
})

btnOk.addEventListener('click', (e) => {
    if (searchInput.value.length < 3) return

    e.preventDefault()
    let nameOfCountry = searchInput.value
    getCountryIso(nameOfCountry)
    searchInput.value = ''
})

// GETTING THE REAL COUNTRY NAME FROM USER INPUT USING ANOTHER API AND PASSING THE VALUE TO getCovidCountry()
const apiCountry = 'https://restcountries.eu/rest/v2/name/'

async function getCountryIso(nameOfCountry) {
    const res = await fetch(apiCountry + nameOfCountry)
    const data = await res.json()

    console.log(data)
    let countryName = data[0].alpha3Code
    console.log('naziv zemlje', countryName)
    getCovidCountry(countryName)
}

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
            <h2>Populacija: ${population.toLocaleString("sr", "RS")}</h2>
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

