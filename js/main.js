const apiUrl = 'https://corona.lmao.ninja/v2/countries'
const cardContent = document.querySelector('.card__content');

async function getStats() {
    const res = await fetch(apiUrl)
    const data = await res.json()

    // console.log(data[176])
    createTable(data[176])
}

getStats()

function createTable(data) {

    let { country, population, todayCases, todayDeaths, todayRecovered, cases, casesPerOneMillion, recovered, recoveredPerOneMillion, tests, active, deaths, deathsPerOneMillion, critical, criticalPerOneMillion } = data

    console.log(data.countryInfo.flag)

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