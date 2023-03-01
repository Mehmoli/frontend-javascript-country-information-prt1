import axios from "axios";

//MAAK EEN VARIABELE AAN MET DE NAAM USERINPUT
//HAAL DE GEGEVENS OP VAN USER-INPUT
const userInput = document.getElementById('user-input');
//MAAK EEN VARIABELE AAN MET DE NAAM SUBMITBTN
//HAAL DE GEGEVENS OP VAN SUBMITBUTTON
const submitBtn = document.getElementById('submitButton');
//ZET EEN EVENTLISTENER OP CLICK VAN SUBMITBUTTON EN ACTIVEER FUNCTIE GETUSERINPUT
submitBtn.addEventListener('click', getUserInput);

//MAAK EEN FUNCTIE VOOR HET OPHALEN VAN EEN LAND
function getUserInput(e) {
    e.preventDefault();
    getData(userInput.value);
    userInput.value = '';
}


//MAAK EEN ASYNCHRONE FUNCTIE VOOR HET OPHALEN VAN DATA
async function getData(searchName){
    userInput.innerHTML = ``;
    let searchResult;
    try{
            //MAAK EEN VARIABELE RESULT VOOR HET OPSLAAN VAN OPGEHAALDE DATA
            const result = await axios.get(`https://restcountries.com/v2/name/${searchName}`);
            console.log(result.data);
            searchResult = result.data[0];
            //MAAK EEN VARIABELE VOOR COUNTRYCARD EN HAAL DE GEGEVENS OP
            const countryCard = document.getElementById('country-card');

            //ZET IN HTML IN VARRIABELE COUNTRYCARD DE INTERACTIVE ELEMENTEN
            countryCard.innerHTML = `<img id="flagCountry" src="${searchResult.flag}" alt="flag country"/><span id="nameCountry"><h2>${searchResult.name}</h2></span>
                             <hr>
                             <p>${searchResult.name} is situated in ${searchResult.subregion}. It has a population of ${searchResult.population} people.</p>
                             <p>The capital is ${searchResult.capital} ${currencyChecker(searchResult.currencies)}</p>
                             <p>They speak ${languageChecker(searchResult.languages)}</p>  
                             `;
            const removeCountries = document.getElementById('countries');
            removeCountries.remove();


    } catch (e){
        //ALS SEARCHRESULT GEEN GELDIGE WARDE HEEFT
        if (!searchResult) {
            //MAAK EEN VARIABELE EN HAAL ELEMENT MET ID COUNTRY-CARD OP
            const errorMessage = document.getElementById('country-card');
            //ZET IN OPGEHAALDE ELEMENT EEN P ELEMENT MET TEXT
            errorMessage.innerHTML = `<p class="errorMessage">There is no country with the name ${searchName.toUpperCase()}. You can try again..</p>`
        }
        console.log(e);

    }
}
//MAAK EEN FUNCTIE DIE CHECKT OF ER IN EEN LAND TWEE VERSCHILLENDE CURRENCIES WORDEN GEBRUIKT
function currencyChecker(currencies) {
    let output = ' and you can pay with ';
    if (currencies.length === 2) {
        return output + `${currencies[0].name} and ${currencies[1].name}'s`;
    } else {
        return output + `${currencies[0].name}'s`;
    }
    
}

//MAAK EEN FUNCTIE DIE CHECKT OF ER IN EEN LAND VERSCHILLENDE TALEN WORDEN GEBRUIKT

function languageChecker(languages) {
    let speakLanguages = `They speak `;
    if (languages.length === 3) {
        return speakLanguages + `${languages[0].name}, ${languages[1].name} and ${languages[2].name}.`;
    } else if (languages.length === 2) {
        return speakLanguages + `${languages[0].name} and ${languages[1].name}.`;
    }
        return speakLanguages + `${languages[0].name}.`;
}
