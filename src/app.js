import axios from "axios";


async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');

        const myList = result.data;

        myList.sort((a, b) => {
            return a.population - b.population;
        });

        const ul = document.getElementById('countries');

        const listOfWorldCountries = myList.map((listOfWorldCountry) => {
            return  `<li><div id="listContainer">
            <span id="flag"><img id="flagCountry" src="${listOfWorldCountry.flag}" alt="flag country"/></span>
            <div id="textContainer">
            <p id="countryName" class="${listOfWorldCountry.region}">${listOfWorldCountry.name}</p>
            <p id="worldRegion">${listOfWorldCountry.region}</p>
            </div>
            </div>
            <p id="countryPopulation">Has a population of ${listOfWorldCountry.population} people</p>
            </li>
            `});

        ul.innerHTML = listOfWorldCountries.join('');

        const asiaColor = document.getElementsByClassName("Asia");
        const africaColor = document.getElementsByClassName("Africa");
        const americasColor = document.getElementsByClassName("Americas");
        const europeColor = document.getElementsByClassName("Europe");
        const oceaniaColor = document.getElementsByClassName("Oceania");


                for (let i = 0; i < asiaColor.length; i++) {
                asiaColor[i].style.color = 'red';
                 }
                for (let i = 0; i < africaColor.length; i++) {
                    africaColor[i].style.color = 'blue';
                }
                for (let i = 0; i < americasColor.length; i++) {
                    americasColor[i].style.color = 'green';
                }
                for (let i = 0; i < europeColor.length; i++) {
                    europeColor[i].style.color = '#F9DB24';
                }
                for (let i = 0; i < oceaniaColor.length; i++) {
                    oceaniaColor[i].style.color = 'purple';
                }

    } catch (e) {
        console.error('OOPS!!!!!')

    }
}

fetchData();


