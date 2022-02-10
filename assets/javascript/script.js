// API key for OMBD
var omdbKey = "8f91bbc4";

// API key for Marvel
var marvelKey = "0265e94d30e0db384ca95fcdc7644186";

// user input keyword
var userInput = document.getElementById("user-input");

// drop down menu for selective api searches
var searchParameter = document.getElementById("search-params");

// search button call
var searchBtn = document.getElementById("search-btn");

// search button call
var searchAgainBtn = document.getElementById("searchAgainBtn");

// card page
var cardPage = document.getElementById("card-page");

// main page for removing + adding classes
var mainPage = document.getElementById("main-page");



// !!!!! Get previous searches from local storage - if they dont exist, create empty array to assign future searchs
var previousSearches =
  JSON.parse(localStorage.getItem("previous-search-history")) || [];


// function storageFetcher(previousSearches) {
//   previousSearches.push(userSearch);
//   localStorage.setItem(
//     "previous-search-history",
//     JSON.stringify(previousSearches)
//   )
// }


  
// search button with event listener
// the function that called the fetch functions based on search params will need to be called here
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const userSearch = userInput.value;

  //   mainPage.classList.add('hide')


  if (searchParameter.value === "mcu") {
    // removes main page elements NO ANIMATION !!!
    mainPage.remove();
    mcuFetcher(userSearch);
  } else if (searchParameter.value === "comics") {
    mainPage.remove();
    comics(userSearch);
  } else if (searchParameter.value === "events") {
  }
  //   function here
  else {
    console.log("Please select an option!");
    return;
  }
  
  // !!!!! add new search to the previosu searchs array then add this to local storage
  previousSearches.push(userSearch);
  localStorage.setItem(
    "previous-search-history",
    JSON.stringify(previousSearches)
  );


  //   if statment based on search parameters
  // search param value finder
  // if value == mcu > mcufetcher
});


// prototype fucntion for multiple film search cards
function mcuFetcher(userSearch) {
  fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=${omdbKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (filmFetch) {
      console.log(filmFetch);

      var noOfIterations = Math.min(filmFetch.Search.length, 9);

      console.log(noOfIterations);
      for (var i = 0; i < noOfIterations; i++) {
        // currently doesn't like the search[i] bit below
        var film = filmFetch.Search[i];

        let filmPoster = film.Poster;
        let filmTitle = film.Title;
        let filmYear = film.Year;

        let cardRender = document.createElement("div");
        let filmPosterEl = document.createElement("img");
        let filmTitleEl = document.createElement("h2");
        let filmYearEl = document.createElement("p");

        cardRender.setAttribute(
          "class",
          "flex flex-col flex-initial max-w-md m-5 ml-8 bg-slate-400 p-5 rounded-lg text-lg decoration-1"
        );
        filmPosterEl.setAttribute("class", "p-1 mt-2");
        filmTitleEl.setAttribute("class", "p-1 mt-2");
        filmYearEl.setAttribute("class", "p-1 mt-2");

        filmPosterEl.setAttribute("src", filmPoster);
        filmPosterEl.setAttribute("class", "rounded-lg");
        filmTitleEl.textContent = "Title: " + filmTitle;
        filmYearEl.textContent = "Release Year: " + filmYear;

        cardRender.append(filmTitleEl, filmPosterEl, filmYearEl);

        document.getElementById("card-page").appendChild(cardRender);
      }
    });
}


// THIS FINDS THE CHARACTER ID AND PARSES IT INTO THE comicFetcher function
function comics(userSearch) {
  fetch(
    `http://gateway.marvel.com/v1/public/characters?name=${userSearch}&apikey=${marvelKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (comicData) {
      var noResults = comicData.data.results.length === 0;

      if (noResults) {
        console.log("Why does spiderman not work?");
        return;
      }

      var foundCharacter = comicData.data.results[0];

      comicFetcher(foundCharacter.id);
    });
}


// THIS FETCHES THE COMICS AND APPENDS THEM TO DA PAGE
function comicFetcher(characterID) {
  fetch(
    `http://gateway.marvel.com/v1/public/characters/${characterID}/comics?apikey=${marvelKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (comicFetch) {
      var noOfIterations = Math.min(comicFetch.data.results.length, 9);

      for (var i = 0; i < noOfIterations; i++) {
        var character = comicFetch.data.results[i];

        let comicTitle = character.title;
        let comicCover =
          character.thumbnail.path + "." + character.thumbnail.extension;
        let comicDate = character.dates[0].date;
        console.log("On sale date: " + comicDate);
        let comicPages = character.pageCount;

        const cardRender = document.createElement("div");
        const comicCoverEl = document.createElement("img");
        const comicTitleEl = document.createElement("h2");
        const comicDateEl = document.createElement("p");
        const comicPagesEl = document.createElement("p");

        cardRender.setAttribute(
          "class",
          "flex flex-col flex-initial max-w-md m-5 ml-8 bg-slate-400 p-5 rounded-lg text-lg decoration-1"
        );
        comicTitleEl.setAttribute("class", "p-1 mt-2");
        comicDateEl.setAttribute("class", "p-1");
        comicPagesEl.setAttribute("class", "p-1");

        comicCoverEl.setAttribute("src", comicCover);
        comicCoverEl.setAttribute("class", "rounded-lg");

        // appender
        cardRender.setAttribute(
          "class",
          "flex flex-col flex-initial max-w-md m-5 ml-8 bg-slate-400 p-5 rounded-lg text-lg decoration-1"
        );

        comicTitleEl.textContent = "Title: " + comicTitle;
        comicDateEl.textContent = "On sale date: " + comicDate;
        comicPagesEl.textContent = "Page count: " + comicPages;

        cardRender.append(
          comicTitleEl,
          comicCoverEl,
          comicDateEl,
          comicPagesEl
        );
        document.getElementById("card-page").appendChild(cardRender);
      }
    });
}

// backBtn = document.removeAttribute('hide')
// add event listenr to bckbtn

// array of Marvel search terms allowed

// setup local storage, storing searches in an array. next we need to write a function recallign and rendering those searches.

searchAgainBtn.addEventListener("click", function() {
  // document.removeAttribute('hide')
  cardPage.remove();
  // mainPage.append();
  window.location.reload();
});


//  ?????????
previousSearches; 



// if previousSearches === true {
//   previoussearchbtn.appened.mainPage
// } else return


// Alert style notification appending to page on bad search that doesn't match the array !!!