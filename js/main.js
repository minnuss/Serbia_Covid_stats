// GET THE INPUT VALUE FROM USER
const form = document.querySelector('.form')
const searchInput = document.querySelector('.search-input')
const btnOk = document.querySelector('.btn')

// searchInput.focus()

// default values
let defaultCountry = 'serbia'
let betterPopulationNums = 0
let capitalCity = ''
let nameOfCountry = searchInput.value

// MANUALY ADDED COUNTRIES INFORMATION, BECAUSE API STOPPED WORKING FOR FREE, THEY ADDED MONTHLY SUBSCRIPTIONS
let countries = [
    { "Country": "Andorra", "Capital": "Andorra la Vella", "Population": "77,006" },
    { "Country": "United Arab Emirates", "Capital": "Abu Dhabi", "Population": "9,630,959" },
    { "Country": "Afghanistan", "Capital": "Kabul", "Population": "37,172,386" },
    { "Country": "Antigua and Barbuda", "Capital": "St. John's", "Population": "96,286" },
    { "Country": "Anguilla", "Capital": "The Valley", "Population": "13,254" },
    { "Country": "Albania", "Capital": "Tirana", "Population": "2,866,376" },
    { "Country": "Armenia", "Capital": "Yerevan", "Population": "2,951,776" },
    { "Country": "Angola", "Capital": "Luanda", "Population": "30,809,762" },
    { "Country": "Antarctica", "Capital": "", "Population": "0" },
    { "Country": "Argentina", "Capital": "Buenos Aires", "Population": "44,494,502" },
    { "Country": "American Samoa", "Capital": "Pago Pago", "Population": "55,465" },
    { "Country": "Austria", "Capital": "Vienna", "Population": "8,847,037" },
    { "Country": "Australia", "Capital": "Canberra", "Population": "24,992,369" },
    { "Country": "Aruba", "Capital": "Oranjestad", "Population": "105,845" },
    { "Country": "Åland", "Capital": "Mariehamn", "Population": "26,711" },
    { "Country": "Azerbaijan", "Capital": "Baku", "Population": "9,942,334" },
    { "Country": "Bosnia and Herzegovina", "Capital": "Sarajevo", "Population": "3,323,929" },
    { "Country": "Barbados", "Capital": "Bridgetown", "Population": "286,641" },
    { "Country": "Bangladesh", "Capital": "Dhaka", "Population": "161,356,039" },
    { "Country": "Belgium", "Capital": "Brussels", "Population": "11,422,068" },
    { "Country": "Burkina Faso", "Capital": "Ouagadougou", "Population": "19,751,535" },
    { "Country": "Bulgaria", "Capital": "Sofia", "Population": "7,000,039" },
    { "Country": "Bahrain", "Capital": "Manama", "Population": "1,569,439" },
    { "Country": "Burundi", "Capital": "Gitega", "Population": "11,175,378" },
    { "Country": "Benin", "Capital": "Porto-Novo", "Population": "11,485,048" },
    { "Country": "Saint Barthélemy", "Capital": "Gustavia", "Population": "8,450" },
    { "Country": "Bermuda", "Capital": "Hamilton", "Population": "63,968" },
    { "Country": "Brunei", "Capital": "Bandar Seri Begawan", "Population": "428,962" },
    { "Country": "Bolivia", "Capital": "Sucre", "Population": "11,353,142" },
    { "Country": "Bonaire, Sint Eustatius, and Saba", "Capital": "", "Population": "18,012" },
    { "Country": "Brazil", "Capital": "Brasilia", "Population": "209,469,333" },
    { "Country": "Bahamas", "Capital": "Nassau", "Population": "385,640" },
    { "Country": "Bhutan", "Capital": "Thimphu", "Population": "754,394" },
    { "Country": "Bouvet Island", "Capital": "", "Population": "0" },
    { "Country": "Botswana", "Capital": "Gaborone", "Population": "2,254,126" },
    { "Country": "Belarus", "Capital": "Minsk", "Population": "9,485,386" },
    { "Country": "Belize", "Capital": "Belmopan", "Population": "383,071" },
    { "Country": "Canada", "Capital": "Ottawa", "Population": "37,058,856" },
    { "Country": "Cocos (Keeling) Islands", "Capital": "West Island", "Population": "628" },
    { "Country": "DR Congo", "Capital": "Kinshasa", "Population": "84,068,091" },
    { "Country": "Central African Republic", "Capital": "Bangui", "Population": "4,666,377" },
    { "Country": "Congo Republic", "Capital": "Brazzaville", "Population": "5,244,363" },
    { "Country": "Switzerland", "Capital": "Bern", "Population": "8,516,543" },
    { "Country": "Ivory Coast", "Capital": "Yamoussoukro", "Population": "25,069,229" },
    { "Country": "Cook Islands", "Capital": "Avarua", "Population": "21,388" },
    { "Country": "Chile", "Capital": "Santiago", "Population": "18,729,160" },
    { "Country": "Cameroon", "Capital": "Yaounde", "Population": "25,216,237" },
    { "Country": "China", "Capital": "Beijing", "Population": "1,392,730,000" },
    { "Country": "Colombia", "Capital": "Bogota", "Population": "49,648,685" },
    { "Country": "Costa Rica", "Capital": "San Jose", "Population": "4,999,441" },
    { "Country": "Cuba", "Capital": "Havana", "Population": "11,338,138" },
    { "Country": "Cabo Verde", "Capital": "Praia", "Population": "543,767" },
    { "Country": "Curaçao", "Capital": "Willemstad", "Population": "159,849" },
    { "Country": "Christmas Island", "Capital": "Flying Fish Cove", "Population": "1,500" },
    { "Country": "Cyprus", "Capital": "Nicosia", "Population": "1,189,265" },
    { "Country": "Czechia", "Capital": "Prague", "Population": "10,625,695" },
    { "Country": "Germany", "Capital": "Berlin", "Population": "82,927,922" },
    { "Country": "Djibouti", "Capital": "Djibouti", "Population": "958,920" },
    { "Country": "Denmark", "Capital": "Copenhagen", "Population": "5,797,446" },
    { "Country": "Dominica", "Capital": "Roseau", "Population": "71,625" },
    { "Country": "Dominican Republic", "Capital": "Santo Domingo", "Population": "10,627,165" },
    { "Country": "Algeria", "Capital": "Algiers", "Population": "42,228,429" },
    { "Country": "Ecuador", "Capital": "Quito", "Population": "17,084,357" },
    { "Country": "Estonia", "Capital": "Tallinn", "Population": "1,320,884" },
    { "Country": "Egypt", "Capital": "Cairo", "Population": "98,423,595" },
    { "Country": "Western Sahara", "Capital": "El-Aaiun", "Population": "273,008" },
    { "Country": "Eritrea", "Capital": "Asmara", "Population": "0" },
    { "Country": "Spain", "Capital": "Madrid", "Population": "46,723,749" },
    { "Country": "Ethiopia", "Capital": "Addis Ababa", "Population": "109,224,559" },
    { "Country": "Finland", "Capital": "Helsinki", "Population": "5,518,050" },
    { "Country": "Fiji", "Capital": "Suva", "Population": "883,483" },
    { "Country": "Falkland Islands", "Capital": "Stanley", "Population": "2,638" },
    { "Country": "Micronesia", "Capital": "Palikir", "Population": "112,640" },
    { "Country": "Faroe Islands", "Capital": "Torshavn", "Population": "48,497" },
    { "Country": "France", "Capital": "Paris", "Population": "66,987,244" },
    { "Country": "Gabon", "Capital": "Libreville", "Population": "2,119,275" },
    { "Country": "United Kingdom", "Capital": "London", "Population": "66,488,991" },
    { "Country": "Grenada", "Capital": "St. George's", "Population": "111,454" },
    { "Country": "Georgia", "Capital": "Tbilisi", "Population": "3,731,000" },
    { "Country": "French Guiana", "Capital": "Cayenne", "Population": "195,506" },
    { "Country": "Guernsey", "Capital": "St Peter Port", "Population": "65,228" },
    { "Country": "Ghana", "Capital": "Accra", "Population": "29,767,108" },
    { "Country": "Gibraltar", "Capital": "Gibraltar", "Population": "33,718" },
    { "Country": "Greenland", "Capital": "Nuuk", "Population": "56,025" },
    { "Country": "The Gambia", "Capital": "Banjul", "Population": "2,280,102" },
    { "Country": "Guinea", "Capital": "Conakry", "Population": "12,414,318" },
    { "Country": "Guadeloupe", "Capital": "Basse-Terre", "Population": "443,000" },
    { "Country": "Equatorial Guinea", "Capital": "Malabo", "Population": "1,308,974" },
    { "Country": "Greece", "Capital": "Athens", "Population": "10,727,668" },
    { "Country": "South Georgia and South Sandwich Islands", "Capital": "Grytviken", "Population": "30" },
    { "Country": "Guatemala", "Capital": "Guatemala City", "Population": "17,247,807" },
    { "Country": "Guam", "Capital": "Hagatna", "Population": "165,768" },
    { "Country": "Guinea-Bissau", "Capital": "Bissau", "Population": "1,874,309" },
    { "Country": "Guyana", "Capital": "Georgetown", "Population": "779,004" },
    { "Country": "Hong Kong", "Capital": "Hong Kong", "Population": "7,451,000" },
    { "Country": "Heard and McDonald Islands", "Capital": "", "Population": "0" },
    { "Country": "Honduras", "Capital": "Tegucigalpa", "Population": "9,587,522" },
    { "Country": "Croatia", "Capital": "Zagreb", "Population": "4,089,400" },
    { "Country": "Haiti", "Capital": "Port-au-Prince", "Population": "11,123,176" },
    { "Country": "Hungary", "Capital": "Budapest", "Population": "9,768,785" },
    { "Country": "Indonesia", "Capital": "Jakarta", "Population": "267,663,435" },
    { "Country": "Ireland", "Capital": "Dublin", "Population": "4,853,506" },
    { "Country": "Israel", "Capital": "Jerusalem", "Population": "8,883,800" },
    { "Country": "Isle of Man", "Capital": "Douglas", "Population": "84,077" },
    { "Country": "India", "Capital": "New Delhi", "Population": "1,352,617,328" },
    { "Country": "British Indian Ocean Territory", "Capital": "Diego Garcia", "Population": "4,000" },
    { "Country": "Iraq", "Capital": "Baghdad", "Population": "38,433,600" },
    { "Country": "Iran", "Capital": "Tehran", "Population": "81,800,269" },
    { "Country": "Iceland", "Capital": "Reykjavik", "Population": "353,574" },
    { "Country": "Italy", "Capital": "Rome", "Population": "60,431,283" },
    { "Country": "Jersey", "Capital": "Saint Helier", "Population": "90,812" },
    { "Country": "Jamaica", "Capital": "Kingston", "Population": "2,934,855" },
    { "Country": "Jordan", "Capital": "Amman", "Population": "9,956,011" },
    { "Country": "Japan", "Capital": "Tokyo", "Population": "126,529,100" },
    { "Country": "Kenya", "Capital": "Nairobi", "Population": "51,393,010" },
    { "Country": "Kyrgyzstan", "Capital": "Bishkek", "Population": "6,315,800" },
    { "Country": "Cambodia", "Capital": "Phnom Penh", "Population": "16,249,798" },
    { "Country": "Kiribati", "Capital": "Tarawa", "Population": "115,847" },
    { "Country": "Comoros", "Capital": "Moroni", "Population": "832,322" },
    { "Country": "St Kitts and Nevis", "Capital": "Basseterre", "Population": "52,441" },
    { "Country": "North Korea", "Capital": "Pyongyang", "Population": "25,549,819" },
    { "Country": "South Korea", "Capital": "Seoul", "Population": "51,635,256" },
    { "Country": "Kuwait", "Capital": "Kuwait City", "Population": "4,137,309" },
    { "Country": "Cayman Islands", "Capital": "George Town", "Population": "64,174" },
    { "Country": "Kazakhstan", "Capital": "Nur-Sultan", "Population": "18,276,499" },
    { "Country": "Laos", "Capital": "Vientiane", "Population": "7,061,507" },
    { "Country": "Lebanon", "Capital": "Beirut", "Population": "6,848,925" },
    { "Country": "Saint Lucia", "Capital": "Castries", "Population": "181,889" },
    { "Country": "Liechtenstein", "Capital": "Vaduz", "Population": "37,910" },
    { "Country": "Sri Lanka", "Capital": "Colombo", "Population": "21,670,000" },
    { "Country": "Liberia", "Capital": "Monrovia", "Population": "4,818,977" },
    { "Country": "Lesotho", "Capital": "Maseru", "Population": "2,108,132" },
    { "Country": "Lithuania", "Capital": "Vilnius", "Population": "2,789,533" },
    { "Country": "Luxembourg", "Capital": "Luxembourg", "Population": "607,728" },
    { "Country": "Latvia", "Capital": "Riga", "Population": "1,926,542" },
    { "Country": "Libya", "Capital": "Tripoli", "Population": "6,678,567" },
    { "Country": "Morocco", "Capital": "Rabat", "Population": "36,029,138" },
    { "Country": "Monaco", "Capital": "Monaco", "Population": "38,682" },
    { "Country": "Moldova", "Capital": "Chisinau", "Population": "3,545,883" },
    { "Country": "Montenegro", "Capital": "Podgorica", "Population": "622,345" },
    { "Country": "Saint Martin", "Capital": "Marigot", "Population": "37,264" },
    { "Country": "Madagascar", "Capital": "Antananarivo", "Population": "26,262,368" },
    { "Country": "Marshall Islands", "Capital": "Majuro", "Population": "58,413" },
    { "Country": "North Macedonia", "Capital": "Skopje", "Population": "2,082,958" },
    { "Country": "Mali", "Capital": "Bamako", "Population": "19,077,690" },
    { "Country": "Myanmar", "Capital": "Nay Pyi Taw", "Population": "53,708,395" },
    { "Country": "Mongolia", "Capital": "Ulaanbaatar", "Population": "3,170,208" },
    { "Country": "Macao", "Capital": "Macao", "Population": "631,636" },
    { "Country": "Northern Mariana Islands", "Capital": "Saipan", "Population": "56,882" },
    { "Country": "Martinique", "Capital": "Fort-de-France", "Population": "432,900" },
    { "Country": "Mauritania", "Capital": "Nouakchott", "Population": "4,403,319" },
    { "Country": "Montserrat", "Capital": "Plymouth", "Population": "9,341" },
    { "Country": "Malta", "Capital": "Valletta", "Population": "483,530" },
    { "Country": "Mauritius", "Capital": "Port Louis", "Population": "1,265,303" },
    { "Country": "Maldives", "Capital": "Male", "Population": "515,696" },
    { "Country": "Malawi", "Capital": "Lilongwe", "Population": "17,563,749" },
    { "Country": "Mexico", "Capital": "Mexico City", "Population": "126,190,788" },
    { "Country": "Malaysia", "Capital": "Kuala Lumpur", "Population": "31,528,585" },
    { "Country": "Mozambique", "Capital": "Maputo", "Population": "29,495,962" },
    { "Country": "Namibia", "Capital": "Windhoek", "Population": "2,448,255" },
    { "Country": "New Caledonia", "Capital": "Noumea", "Population": "284,060" },
    { "Country": "Niger", "Capital": "Niamey", "Population": "22,442,948" },
    { "Country": "Norfolk Island", "Capital": "Kingston", "Population": "1,828" },
    { "Country": "Nigeria", "Capital": "Abuja", "Population": "195,874,740" },
    { "Country": "Nicaragua", "Capital": "Managua", "Population": "6,465,513" },
    { "Country": "Netherlands", "Capital": "Amsterdam", "Population": "17,231,017" },
    { "Country": "Norway", "Capital": "Oslo", "Population": "5,314,336" },
    { "Country": "Nepal", "Capital": "Kathmandu", "Population": "28,087,871" },
    { "Country": "Nauru", "Capital": "Yaren", "Population": "12,704" },
    { "Country": "Niue", "Capital": "Alofi", "Population": "2,166" },
    { "Country": "New Zealand", "Capital": "Wellington", "Population": "4,885,500" },
    { "Country": "Oman", "Capital": "Muscat", "Population": "4,829,483" },
    { "Country": "Panama", "Capital": "Panama City", "Population": "4,176,873" },
    { "Country": "Peru", "Capital": "Lima", "Population": "31,989,256" },
    { "Country": "French Polynesia", "Capital": "Papeete", "Population": "277,679" },
    { "Country": "Papua New Guinea", "Capital": "Port Moresby", "Population": "8,606,316" },
    { "Country": "Philippines", "Capital": "Manila", "Population": "106,651,922" },
    { "Country": "Pakistan", "Capital": "Islamabad", "Population": "212,215,030" },
    { "Country": "Poland", "Capital": "Warsaw", "Population": "37,978,548" },
    { "Country": "Saint Pierre and Miquelon", "Capital": "Saint-Pierre", "Population": "7,012" },
    { "Country": "Pitcairn Islands", "Capital": "Adamstown", "Population": "46" },
    { "Country": "Puerto Rico", "Capital": "San Juan", "Population": "3,195,153" },
    { "Country": "Palestine", "Capital": "East Jerusalem", "Population": "4,569,087" },
    { "Country": "Portugal", "Capital": "Lisbon", "Population": "10,281,762" },
    { "Country": "Palau", "Capital": "Melekeok", "Population": "17,907" },
    { "Country": "Paraguay", "Capital": "Asuncion", "Population": "6,956,071" },
    { "Country": "Qatar", "Capital": "Doha", "Population": "2,781,677" },
    { "Country": "Réunion", "Capital": "Saint-Denis", "Population": "776,948" },
    { "Country": "Romania", "Capital": "Bucharest", "Population": "19,473,936" },
    { "Country": "Serbia", "Capital": "Belgrade", "Population": "6,982,084" },
    { "Country": "Russia", "Capital": "Moscow", "Population": "144,478,050" },
    { "Country": "Rwanda", "Capital": "Kigali", "Population": "12,301,939" },
    { "Country": "Saudi Arabia", "Capital": "Riyadh", "Population": "33,699,947" },
    { "Country": "Solomon Islands", "Capital": "Honiara", "Population": "652,858" },
    { "Country": "Seychelles", "Capital": "Victoria", "Population": "96,762" },
    { "Country": "Sudan", "Capital": "Khartoum", "Population": "41,801,533" },
    { "Country": "Sweden", "Capital": "Stockholm", "Population": "10,183,175" },
    { "Country": "Singapore", "Capital": "Singapore", "Population": "5,638,676" },
    { "Country": "Saint Helena", "Capital": "Jamestown", "Population": "7,460" },
    { "Country": "Slovenia", "Capital": "Ljubljana", "Population": "2,067,372" },
    { "Country": "Svalbard and Jan Mayen", "Capital": "Longyearbyen", "Population": "2,550" },
    { "Country": "Slovakia", "Capital": "Bratislava", "Population": "5,447,011" },
    { "Country": "Sierra Leone", "Capital": "Freetown", "Population": "7,650,154" },
    { "Country": "San Marino", "Capital": "San Marino", "Population": "33,785" },
    { "Country": "Senegal", "Capital": "Dakar", "Population": "15,854,360" },
    { "Country": "Somalia", "Capital": "Mogadishu", "Population": "15,008,154" },
    { "Country": "Suriname", "Capital": "Paramaribo", "Population": "575,991" },
    { "Country": "South Sudan", "Capital": "Juba", "Population": "8,260,490" },
    { "Country": "São Tomé and Príncipe", "Capital": "Sao Tome", "Population": "197,700" },
    { "Country": "El Salvador", "Capital": "San Salvador", "Population": "6,420,744" },
    { "Country": "Sint Maarten", "Capital": "Philipsburg", "Population": "40,654" },
    { "Country": "Syria", "Capital": "Damascus", "Population": "16,906,283" },
    { "Country": "Eswatini", "Capital": "Mbabane", "Population": "1,136,191" },
    { "Country": "Turks and Caicos Islands", "Capital": "Cockburn Town", "Population": "37,665" },
    { "Country": "Chad", "Capital": "N'Djamena", "Population": "15,477,751" },
    { "Country": "French Southern Territories", "Capital": "Port-aux-Francais", "Population": "140" },
    { "Country": "Togo", "Capital": "Lome", "Population": "7,889,094" },
    { "Country": "Thailand", "Capital": "Bangkok", "Population": "69,428,524" },
    { "Country": "Tajikistan", "Capital": "Dushanbe", "Population": "9,100,837" },
    { "Country": "Tokelau", "Capital": "", "Population": "1,466" },
    { "Country": "Timor-Leste", "Capital": "Dili", "Population": "1,267,972" },
    { "Country": "Turkmenistan", "Capital": "Ashgabat", "Population": "5,850,908" },
    { "Country": "Tunisia", "Capital": "Tunis", "Population": "11,565,204" },
    { "Country": "Tonga", "Capital": "Nuku'alofa", "Population": "103,197" },
    { "Country": "Turkey", "Capital": "Ankara", "Population": "82,319,724" },
    { "Country": "Trinidad and Tobago", "Capital": "Port of Spain", "Population": "1,389,858" },
    { "Country": "Tuvalu", "Capital": "Funafuti", "Population": "11,508" },
    { "Country": "Taiwan", "Capital": "Taipei", "Population": "22,894,384" },
    { "Country": "Tanzania", "Capital": "Dodoma", "Population": "56,318,348" },
    { "Country": "Ukraine", "Capital": "Kyiv", "Population": "44,622,516" },
    { "Country": "Uganda", "Capital": "Kampala", "Population": "42,723,139" },
    { "Country": "U.S. Outlying Islands", "Capital": "", "Population": "0" },
    { "Country": "United States", "Capital": "Washington", "Population": "327,167,434" },
    { "Country": "Uruguay", "Capital": "Montevideo", "Population": "3,449,299" },
    { "Country": "Uzbekistan", "Capital": "Tashkent", "Population": "32,955,400" },
    { "Country": "Vatican City", "Capital": "Vatican City", "Population": "921" },
    { "Country": "St Vincent and Grenadines", "Capital": "Kingstown", "Population": "110,211" },
    { "Country": "Venezuela", "Capital": "Caracas", "Population": "28,870,195" },
    { "Country": "British Virgin Islands", "Capital": "Road Town", "Population": "29,802" },
    { "Country": "U.S. Virgin Islands", "Capital": "Charlotte Amalie", "Population": "106,977" },
    { "Country": "Vietnam", "Capital": "Hanoi", "Population": "95,540,395" },
    { "Country": "Vanuatu", "Capital": "Port Vila", "Population": "292,680" },
    { "Country": "Wallis and Futuna", "Capital": "Mata Utu", "Population": "16,025" },
    { "Country": "Samoa", "Capital": "Apia", "Population": "196,130" },
    { "Country": "Kosovo", "Capital": "Pristina", "Population": "1,845,300" },
    { "Country": "Yemen", "Capital": "Sanaa", "Population": "28,498,687" },
    { "Country": "Mayotte", "Capital": "Mamoudzou", "Population": "279,471" },
    { "Country": "South Africa", "Capital": "Pretoria", "Population": "57,779,622" },
    { "Country": "Zambia", "Capital": "Lusaka", "Population": "17,351,822" },
    { "Country": "Zimbabwe", "Capital": "Harare", "Population": "14,439,018" }
]

// POPULATE DEFAULT COUNTRY CAPITAL AND POPULATION ON PAGE LOAD
countries.find(c => {
    if (c.Country.toLowerCase() === defaultCountry) {
        // console.log(c.Capital)
        betterPopulationNums = c.Population
        capitalCity = c.Capital
    }
})

// API URL FOR GETTING COVID STATS BY COUNTRY
// const covidCountryURL = `https://corona.lmao.ninja/v2/countries/`
// const covidCountryURL = `https://corona.lmao.ninja/v3/covid-19/countries/`

const covidCountryURL = `https://disease.sh/v3/covid-19/countries/`

async function getCovidCountry(countryName = defaultCountry) {

    const res = await fetch(covidCountryURL + countryName)
    const data = await res.json()


    const resYesterday = await fetch(covidCountryURL + countryName + '?yesterday=true')
    const dataYesterday = await resYesterday.json()

    const res2DaysAgo = await fetch(covidCountryURL + countryName + '?twoDaysAgo=true')
    const data2DaysAgo = await res2DaysAgo.json()

    // console.log(data, dataYesterday, data2DaysAgo)

    setTimeout(() => {
        // send data to createTable()
        createTable(data, dataYesterday, data2DaysAgo)
    }, 700);
}
// getCovidCountry()


// CREATING DESIGN FROM FETCHED DATA
const cardContent = document.querySelector('.card__content');

function createTable(data, dataYesterday, data2DaysAgo) {

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
            <h6>(Osvežava se popodne)</h6>
            <h2>Zaraženi: ${todayCases.toLocaleString("sr", "RS")}</h2>
            <h2>Umrlih: ${todayDeaths.toLocaleString("sr", "RS")}</h2>
            <h2>Ozdravili: ${todayRecovered.toLocaleString("sr", "RS")}</h2>
            <h1>Jučerašnja</h1>
            <h2>Zaraženi: ${dataYesterday.todayCases.toLocaleString("sr", "RS")}</h2>
            <h2>Umrlih: ${dataYesterday.todayDeaths.toLocaleString("sr", "RS")}</h2>
            <h2>Ozdravili: ${dataYesterday.todayRecovered.toLocaleString("sr", "RS")}</h2>
            <h1>Prekjučerašnja</h1>
            <h2>Zaraženi: ${data2DaysAgo.todayCases.toLocaleString("sr", "RS")}</h2>
            <h2>Umrlih: ${data2DaysAgo.todayDeaths.toLocaleString("sr", "RS")}</h2>
            <h2>Ozdravili: ${data2DaysAgo.todayRecovered.toLocaleString("sr", "RS")}</h2>
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
    // let nameOfCountry = searchInput.value

    // GET COUNTRIES CAPITAL AND POPULATION FROM ARRAY OF COUNTRIES
    countries.find(c => {
        if (c.Country.toLowerCase() === nameOfCountry) {
            // console.log(c.Capital)
            betterPopulationNums = c.Population
            capitalCity = c.Capital
        }
    })

    // CALL FOR USER ENTERED INPUT FIELD COUNTRY
    getCovidCountry(nameOfCountry)

    // reset input field
    searchInput.value = ''

    // removes focus from input field
    searchInput.blur()
})

getCovidCountry()

// GET COUNTRY NAME OPTIONS IN SEARCH INPUT WHEN USER IS TYPING
const dataListEl = document.getElementById('suggestion-countries')

searchInput.addEventListener('input', async () => {

    // get user input converted to toLowerCase
    let searchValue = searchInput.value.toLowerCase()
    // console.log(searchValue)

    // set global variable nameOfCountry to fast input option, so search can change capital and population values
    nameOfCountry = searchValue

    // Reset options every time user types new character
    dataListEl.innerHTML = ''

    // filter out countries array for user inputs only
    let countriesFilter = countries.filter(c => c.Country.toLowerCase().includes(searchValue))

    // check new filtered array for user inputs only
    for (let i = 0; i < countriesFilter.length; i++) {
        // Country names from fetched results
        let countryName = countriesFilter[i].Country
        // console.log(countryName)

        let optionEl = document.createElement('option')
        optionEl.setAttribute('value', countryName)
        dataListEl.appendChild(optionEl)
    }
})

// *******************************************************

// NOT WORKING ANYMORE, API ADDED PAYED SUBSCRIPTIONS

// GETTING THE REAL COUNTRY NAME FROM USER INPUT USING ANOTHER API AND PASSING THE VALUE TO getCovidCountry()
// const apiCountry = 'https://restcountries.eu/rest/v2/name/'

// async function getCountryIso(nameOfCountry = "Serbia") {
//     const res = await fetch(`https://countriesnow.space/api/v0.1/countries`)
//     const data = await res.json()

//     console.log(data.data.forEach(country => {
//         console.log(country.country)
//     }))
//     // console.log(nameOfCountry)

//     // hardcoded India country because of bad API result
//     if (nameOfCountry === 'india' || nameOfCountry === 'India' || nameOfCountry === 'indi') {
//         let countryName = 'India'
//         betterPopulationNums = data[1].population
//         capitalCity = data[1].capital
//         getCovidCountry(countryName)
//     } else {
//         // every other country results are good
//         let countryName = data[0].alpha3Code

//         // console.log('naziv zemlje', countryName)
//         betterPopulationNums = data[0].population
//         capitalCity = data[0].capital
//         getCovidCountry(countryName)
//     }
// }

// getCountryIso()


// // GET COUNTRY NAME OPTIONS IN SEARCH INPUT WHEN USER IS TYPING
// const apiCountryName = 'https://restcountries.eu/rest/v2/name/'
// const dataListEl = document.getElementById('suggestion-countries')

// searchInput.addEventListener('input', async () => {
//     let searchValue = searchInput.value
//     // console.log(searchValue)

//     // const apiCountryUrl = `http://api.countrylayer.com/v2/name/{${searchValue}}?access_key=2d3455f077a9a96451f65993bbc8e9db&FullText=false`

//     // Reset options every time user types new character
//     dataListEl.innerHTML = ''

//     // let res = await fetch(apiCountryName + searchValue)
//     let res = await fetch(apiCountryUrl)
//     let data = await res.json()
//     // console.log(data)

//     // Check if there is more then 5 results, or less then 5
//     let length = data.length > 5 ? 5 : data.length

//     for (let i = 0; i < length; i++) {
//         // Country names from fetched results
//         let countryName = data[i].name
//         // console.log(countryName)

//         let optionEl = document.createElement('option')
//         optionEl.setAttribute('value', countryName)
//         dataListEl.appendChild(optionEl)
//     }
// })

// *******************************************************


