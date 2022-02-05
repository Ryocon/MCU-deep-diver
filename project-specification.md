# MCU-deep-diver Walkthrough

- As a User I am intested in thr Marvel Universe
- I Want to find wider lore from that character and film
- I am shown this combined information from OMDB and Marvel API.
- Displayed as a card etc, let user interact with that data. (Might be Bonus only)

- user types in a Marvel characters name in an input box.
- search button, on click trigger a functionn which get that input
- use that input for getting the character information from the marvel api, with function using fetch
- use that input to get information from the omdb about the character, with seperate function using fetch
- another function is called which saves the input to local storage
- inside those two functions once you get the relevant data back, deconstruct, and dynamically load on page

- getUserInput()
- getMarvelCharInformation(input)
- getOmdbCharInformation(input)
- renderMarvelHtml(data)
- renderOmdbHtml(data)
- saveSearchLocalStorage(input)

- combining all that OMDB MARVEL API information together into fancy card.
- generate list of buttons below search of search history
- If we display multiple chatacter info cards we would need to generate cards Dynamically rather than designing them in html then filling them in with the info dynamically generated. (like list of trop trump cards etc for comparison) - but thats extra work I think.




## Updates
- When I search a Marvel key term I select a parameter from a dropdown box
- Film, TV Series, Comic, Event, Characters, Stories
- Local storage used to go back to the last search made by the user (on the homepage)
- Pages on desktop to load 9 cards at a time (animated)
- Pages on mobile load 3
- Cards will be bespoke in appending data pulled
- Cards generated in JS and appended to HTML
- Example Film - Title, Poster, Release date, short plot
- Will need to implement a loop to prevent overloading the page (url query)
- Load more button based on loop

- Will need to add ip to github for marvelapi to work