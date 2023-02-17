import axios from "axios";

let myList = [];
async function fetchData(){
    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data);
        myList = result.data ;

        myList.sort((a, b) =>{
            return a.population - b.population});

        for (let i = 0; i < myList.length; i++) {
            // console.log(myList[i].name);
            // console.log(myList[i].region);
            // console.log(myList[i].population);

            // console.log(myList[i].region);
            let ul = document.getElementById('countries');
            let li = document.createElement("li");
            li.innerHTML = `<div id="listContainer">
            <span id="flag"><img id="flagCountry" src="${myList[i].flag}" alt="flag country"/></span>
            <div id="textContainer">
            <p id="countryName">${myList[i].name}</p>
            <p id="worldRegion">${myList[i].region}</p>
            </div>
            </div>
            <p id="countryPopulation">Has a population of ${myList[i].population} people</p>
            `;
            ul.appendChild(li)
            const colorNameCountry = document.getElementById('countryName');
            let colorCountry = myList[i].region;
            function colorNames() {
                switch (colorCountry) {
                    case 'Africa':
                        colorNameCountry.style.color="blue";
                        break;
                    case 'Americas':
                        console.log('green');
                        break;
                    case 'Asia':
                        console.log('red');
                        break;
                    case 'Europe':
                        console.log('yellow');
                        break;
                    case 'Oceania':
                        console.log('purple');
                        break;
                    default:
                        console.log('Unknown country region');
                        break;
                }
            }
            colorNames(colorCountry);
            colorNameCountry.style.color = "${colorNames}";
        }
    } catch (e){
        console.error(e)
    }
}

fetchData();

//     let colorCountry = 'Africa';
// switch (colorCountry) {
//     case 'Africa':
//         console.log('blue');
//         break;
//     case 'Americas':
//         console.log('green');
//         break;
//     case 'Asia':
//         console.log('red')
//         break;
//     case 'Europe':
//         console.log('yellow')
//         break;
//     case 'Oceania':
//         console.log('purple')
//         break;
//     default:
//         console.log('Unknown country region')
//         break;
// }