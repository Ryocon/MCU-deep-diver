
// API key for OMBD
var omdbKey = "8f91bbc4"

// API key for Marvel
var marvelKey = "0265e94d30e0db384ca95fcdc7644186"

// user input keyword
var userInput = document.getElementById('user-input')

// drop down menu for selective api searches
var searchParameter = document.getElementById('search-params')

// search button call
var searchBtn = document.getElementById('search-btn')

// card page
var cardPage = document.getElementById('card-page')

// main page for removing + adding classes
var mainPage = document.getElementById('main-page')






// search button with event listener
// the function that called the fetch functions based on search params will need to be called here
searchBtn.addEventListener("click", (event)=>{
        event.preventDefault();
      const userSearch = userInput.value

        //   mainPage.classList.add('hide')

      if (searchParameter.value === 'mcu') {
        // removes main page elements NO ANIMATION !!!  
        mainPage.remove()
        mcuFetcher(userSearch)
      } else if (searchParameter.value === 'comics') {
        comics(userSearch);
      } else if (searchParameter.value === 'events') {

      }
    //   function here
      
      else {
          console.log('Please select an option!')
          return
      }

      

    //   if statment based on search parameters
    // search param value finder
    // if value == mcu > mcufetcher

    });


//  bespoke fetch functions for each of the search parameters
// will need a function to call the functions individually
// each will make the cards
// each will need the control loop
function mcuFetcher(userSearch) {
    fetch(`http://www.omdbapi.com/?t=${userSearch}&apikey=${omdbKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     
    
        
        // Data pulling (nested within the .then function)
 
        let moviePoster = data.Poster

        let movieTitle = data.Title
        console.log('Movie title: ' + movieTitle)

        let releaseDate = data.Released
        console.log('Release date: ' + releaseDate)

        let moviePlot = data.Plot
        console.log('Plot: ' + moviePlot)

        // create

        // card div to put all data in
        const cardRender = document.createElement('div')
        
        const moviePosterEl = document.createElement('img')
        const movieTitleEl = document.createElement('h2')
        const releaseDateEl = document.createElement('p')
        const moviePlotEl = document.createElement('p')

        cardRender.setAttribute('class', 'flex flex-col flex-initial max-w-md m-5 ml-8 bg-slate-400 p-5 rounded-lg text-lg decoration-1')
        movieTitleEl.setAttribute('class', 'p-1 mt-2')
        releaseDateEl.setAttribute('class', 'p-1')
        moviePlotEl.setAttribute('class', 'p-1')


        // ammend

        moviePosterEl.setAttribute('src', moviePoster)
        moviePosterEl.setAttribute('class', 'rounded-lg')

        movieTitleEl.textContent = 'Title: ' + movieTitle
        releaseDateEl.textContent = 'Release date: ' + releaseDate
        moviePlotEl.textContent = 'Plot: ' + moviePlot 


        // append

        cardRender.append(moviePosterEl, movieTitleEl, releaseDateEl, moviePlotEl)

        document.getElementById('card-page').appendChild(cardRender)


        

        // make it clear the page after each search

        // at some point store in local

    }
    )

}

function comics(userSearch) {
  fetch(`http://gateway.marvel.com/v1/public/characters?name=${userSearch}&apikey=${marvelKey}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      }
      );
    
     
    }
  





// array of Marvel search terms allowed