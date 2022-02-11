// Marvel Characters

var marvelCharacters = [
  "3D MAN”, “3-D MAN”, “ANT-MAN”, “ANTMAN”, “ANT MAN”, “ABOMINATION”, “CHANG LAM”, “ABRAHAM CORNELIUS”, “ABRAHAM ERSKINE”, “ADRIAN TOOMES”, “AGATHA HARKNESS”, “AIM AGENTS”, “ALPHA DOG”, “AMPHIBIAN”, “SQUADRON SUPREME”, “ANACONDA”, “BLANCHE SITZNSKI”, “SITZ SKI BLANCHE”, “ANCIENT ONE”, “APOCALYPSE”, “ARCADE”, “ARCANNA”, “ARCANNA JONES”, “ARNIM ZOLA”, “ANGEL”, “WARREN WORTHINGTON III”, “ARSENAL”, “ASP”, “CLEO NEFERTITI”, “ASSEMBLE”, “BALDER”, “BANSHEE”, “SEAN CASSIDY”, “BARON ZEMO”, “BARON STRUCKER”, “BEETLE”, “BEN PARKER”, “BEN REILLY”, “BETTY BRANT”, “BETTY ROSS”, “LUCAS BISHOP”, “BLACK BOLT”, “BLACK CAT”, “FELICA HARDY”, “JACK TERR BLACK”, “BLACK KNIGHT”, “DANE WHITMAN”, “BLACK MAMBA”, “TANDY SEALY”, “BLACK PANTHER”, “T CHALLA UDAKU”, “BLACK TALON”, “MONICA CHANG”, “BLACK WIDOW",
  "NATASHA ROMANOFF",
  "BLACKHEART",
  "BLACKLASH",
  "MARC SCOTT",
  "BLADE",
  "ERIC CROSS BROOKS",
  "BLOB",
  "FRED J. DUKES",
  "BLUR",
  "BOLIVAR TRASK",
  "BOMBSHELL",
  "BOOMERANG",
  "FRED MYERS",
  "BUCKY",
  "BULLDOZER",
  "BULLSEYE",
  "BENJAMIN POINTDEXTER",
  "BRUCE BANNER",
  "BLASTAAR",
  "CABLE",
  "CALLISTO",
  "CAMELLIA",
  "CANNONBALL",
  "SAM GUTHRIE",
  "CAPTAIN AMERICA",
  "STEVE ROGERS",
  "CAPTAIN ATLAS",
  "CAPTAIN BRITAIN",
  "BRAIN BRADDOCK",
  "CAPTAIN FRANCE",
  "HUGO ETHERLINCK",
  "CAPTAIN ITALY",
  "UMBERTO LANDI",
  "CAPTAIN SPAIN",
  "CARLOS FRAILE",
  "CAPTAIN UK",
  "CARNAGE",
  "VENOM",
  "CAROL DANVERS",
  "CAPTAIN MARVEL",
  "CATHERINE MORA",
  "CHAMELEON",
  "THE CHAMPION",
  "CHITAURI",
  "ULTIMATE MARVEL",
  "THE COLONEL",
  "ABDUL AL-RAHMAN",
  "COLOSSUS",
  "CONTESSA VALENTINA ALLEGRA DI FONTAINE",
  "CROSSBONES",
  "BROCK RUMLOW",
  "CRYSTAL",
  "CYCLOPS",
  "SCOTT SUMMERS",
  "CLINT BARTON",
  "HAWKEYE",
  "DAI THOMAS",
  "DANIEL TOLIVER",
  "DAREDEVIL",
  "MAT MURDOCK",
  "MATTHEW MURDOCK",
  "DARIO AGGER",
  "CEO",
  "DAZZLER",
  "ALLISON BLAIRE",
  "ALI ALLISON",
  "DEACON FROST",
  "DEADPOOL",
  "WADE WILSON",
  "DEATH ADDER",
  "DEATHLOK",
  "DEATHSTRIKE",
  "YURIKO OYAMA",
  "DEREK MORGAN",
  "DETONATOR",
  "RICKY GIBSON",
  "DEVIL DINOSAUR",
  "DIABLO",
  "DOCTOR OCTOPUS",
  "OTTO OCTAVIUS",
  "DOCTOR STRANGE",
  "STEPHEN STRANGE",
  "DOMINO",
  "DRAKE RAVEN",
  "DOOMBOT",
  "DOCTOR SPECTRUM",
  "DR. FAUSTUS",
  "DOCTOR FAUSTUS",
  "JOHANN FENNHOFF",
  "DREADKNIGHT",
  "BRAM VELSING",
  "DREAMCATCHER",
  "DE LONE WOLF",
  "ASIM LIMBU",
  "DAISY JOHNSON",
  "ECHO",
  "MAYA LOPEZ",
  "EGO",
  "ELECTRO",
  "MAX DILLON",
  "ELEKTRA",
  "ELEKTRA NATCHIOS",
  "EMMA FROST",
  "WHITE QUEEN",
  "ENCHANTRESS",
  "ENID RICH",
  "ELLIE CAMACHO",
  "FALCON",
  "SAM WILSON",
  "FANCY DAN",
  "DAN RUBENSTEIN",
  "FANDRAL",
  "FENIS",
  "FILAMENT",
  "FIN CASEY",
  "IVORY SHADOW",
  "FIREPOWER",
  "FIRESTAR",
  "LIZ ALLEN",
  "ELIZABETH ALLEN",
  "FORGE",
  "FOUNTAIN",
  "FRANKLIN FOGGY NELSON",
  "FOGGY",
  "FRANKLIN NELSON",
  "FRANKLIN RICHARDS",
  "FRANKLIN STORM",
  "FRED FLASH THOMPSON",
  "FURY",
  "NICK FURY",
  "GAH LAK TUS",
  "GALLOWGLASS",
  "GAMBIT",
  "REMY LEBEAU",
  "GAMORA",
  "GARRISON KANE",
  "GELDOFF",
  "GHOST",
  "GHOST RIDER",
  "GHOSTWARE",
  "GIANT MAN",
  "HANK",
  "SCOTT EDWARD HARRIS LANG",
  "SCOTT LANG",
  "GLADIATOR",
  "GLENN TALBOT",
  "GREEN GOBLIN",
  "NORMAN OSBORN",
  "GORGON",
  "GRASS HOPPER",
  "GRIZZLY",
  "GREGORY STARK",
  "GUARDIAN",
  "GUARDIAN OF THE GALAXY",
  "GWEN STACY",
  "GROOT",
  "GILGAMESH",
  "HAMMER",
  "EISENHOWER CANTY",
  "HAMMERHEAD",
  "HARD-DRIVE",
  "HAVOK",
  "ALEXANDER ‘ALEX’ SUMMERS",
  "HAWK-OWL",
  "JACK DANNER",
  "THE AVENGERS",
  "HEATHER HUDSON",
  "HEIMDALL",
  "HELA",
  "HELLCAT",
  "PATSY WALKER",
  "HOBGOBLIN",
  "HARRY OSBORN",
  "HOGUN",
  "HOWARD THE DUCK",
  "HULK",
  "THE HULK",
  "THE INCREDIBLE HULK",
  "ROBERT BRUCE BANNER",
  "BRUCE BANNER",
  "HUMAN TORCH",
  "JOHN STORM",
  "JOHNNY STORM",
  "HURRICANE",
  "HYPERION",
  "ICEMAN",
  "ROBERT DRAKE",
  "BOBBY DRAKE",
  "IKARIS",
  "IMPOSSIBLE MAN",
  "INERTIA",
  "INVISIBLE WOMAN",
  "SUSAN STORM",
  "IRON FIST",
  "DANNY RAND",
  "DANIEL RAND",
  "IRON MAN",
  "TONY STARK",
  "IRON MONGER",
  "SHANE OBADIAH",
  "JACKAL",
  "JAMES BRADDOCK",
  "JAMES HUDSON",
  "JAMES RUPERT",
  "JIM RUPERT",
  "RHODES",
  "WAR MACHINE",
  "JAMES BUCHANAN ‘BUCKY’ BARNES",
  "JANE FOSTER",
  "EDWIN JARVIS",
  "JEANNE DE WOLFE",
  "JENNIFER WALTERS",
  "JESSICA JONES",
  "JIMMY HUDSON",
  "JIMMY WOO",
  "JOHN RYKER",
  "JOHN STACY",
  "J. JONAH JAMESON",
  "JUGGERNAUT",
  "CAIN MARKO",
  "JUSTIN HAMMER",
  "KAINE",
  "KANG THE CONQUEROR",
  "KAREN GRANT",
  "JEAN GREY",
  "KARMA",
  "XI'AN COY MAHN",
  "KARNAK",
  "KA-ZAR",
  "KENNY ‘KING KONG’ MCFARLANE",
  "KINGPIN",
  "WILSON FISK",
  "KRAVEN THE HUNTER",
  "SERGEI KRAVINOFF",
  "KREE",
  "KORG",
  "KATE BISHOP",
  "LADY LARK",
  "LAYLA MILLER",
  "STAN LEE",
  "LEECH",
  "LEVIATHAN",
  "LIEBERMAN",
  "LILANDRA NERAMANI",
  "LIZARD",
  "CURTUS CONNORS",
  "LOCKJAW",
  "LOKI",
  "LONGSHOT",
  "ARTHUR CENTINO",
  "LUKE CAGE",
  "LIBERATOS",
  "MADAME WEB",
  "MAGICIAN",
  "ELLIOT BOGGS",
  "MAGNETO",
  "ERIK LENSHERR",
  "MARVEL GIRL",
  "JEAN GREY",
  "MAN-APE",
  "M'BAKU",
  "MANDARIN",
  "MAN-THING",
  "TED SALLIS",
  "MANTIS",
  "MARK RAXTON",
  "MARY PARKER",
  "MARY JANE WATSON",
  "MASTER MENCE",
  "EMIL BURBANK",
  "MASTERMIND",
  "MAXIMUS",
  "MAY PARKER",
  "MEPHISTO",
  "MILES WARREN",
  "CAPTAIN WINTER",
  "MILES MORALES",
  "MISTER FANTASTIC",
  "REED RICHARDS",
  "MR. ROSE",
  "MS. MARVEL",
  "GEORGE TARLETON",
  "MOJO ADAMS",
  "MOLE MAN",
  "ARTHUR MOLEKEVIC",
  "MORBIUS",
  "VLAD TEPES DRACULA",
  "MOIRA MACTAGGERT",
  "MORLOCKS",
  "MONTANA",
  "MOONDRAGON",
  "HEATHER DOUGLAS",
  "MEDUSA",
  "MOON KNIGHT",
  "MOONKNIGHT",
  "MARC SPECTOR",
  "MULTIPLE MAN",
  "JAMES MADROX",
  "MYSTERIO",
  "QUENTIN BECK",
  "MYSTIQUE",
  "RAVEN DARKHÖLME",
  "NAMOR",
  "NATHANIEL RICHARDS",
  "NERD HULK",
  "NEBULA",
  "THE NEW SENTINELS",
  "NIGHTMARE",
  "NIGHTCRAWLER",
  "KURT WAGNER",
  "NIGHTHAWK",
  "KYLE RICHMOND",
  "NIHIL",
  "NORTHSTAR",
  "JEAN-PAUL BEAUBIER",
  "NOVA",
  "RICK JONES",
  "NUKE",
  "ODIN",
  "OMEGA RED",
  "THE ONE ABOVE ALL",
  "ONSLAUGHT",
  "ORB WEAVER",
  "OWL",
  "OX",
  "BRUNO SANCHEZ",
  "PALADIN",
  "MARC SPECTOR",
  "PANDORA",
  "MARGARET WATSON",
  "PENULTIMATE",
  "ULTIMATE MARVEL",
  "PERUN",
  "PETE WISDOM",
  "PHIL COULSON",
  "AGENT COULSON",
  "SHIELD",
  "S.H.I.E.L.D.",
  "PHOENIX FORCE",
  "PHOEBE MCALLISTER",
  "PILEDRIVER",
  "POLARIS",
  "LORNA DANE",
  "POWER MAN",
  "POWER PRINCESS",
  "PRIMAL SCREAMER",
  "PRINCESS PYTHON",
  "THE PRINCIPAL",
  "LARRY JONES",
  "PROWLER",
  "AARON DAVIS",
  "PROTEUS",
  "DAVID XAVIER",
  "PSYLOCKE",
  "ELISABETH ‘BETTY’ BRADDOCK",
  "PYRO",
  "PEPPER POTTS",
  "THE PUNISHER",
  "FRANK CASTLE",
  "PETER PARKER",
  "SPIDERMAN",
  "SPIDER MAN",
  "SPIDER-MAN",
  "PETER QUILL",
  "PIETRO MAXIMOFF",
  "QUASAR",
  "QUICKSILVER",
  "PIETRO LENSHERR",
  "RAGE",
  "RALPH BOHNER",
  "WANDAVISION",
  "RED SKULL",
  "RED GHOST",
  "RED GUARDIAN",
  "RED WASP",
  "PETRA LASKOV",
  "RHINO",
  "RHONA BURCHILL",
  "ROBBIE BURCHILL",
  "RICHARD PARKER",
  "RINGER",
  "ANTHONY DAVIS",
  "ROBBIE ROBERTSON",
  "ROCKET RACCOON",
  "ROGUE",
  "RONAN THE ACCUSER",
  "SABRA",
  "SABRETOOTH",
  "VICTOR CREED",
  "SAMUAL STERNS",
  "SANDMAN",
  "FLINT MARKO",
  "SAQUATCH",
  "SAM BULLIT",
  "SCARLET WITCH",
  "WANDA LENSHERR",
  "SCHIZOID MAN",
  "SCORPION",
  "SENTINELS",
  "SENTRY",
  "SHADOWCAT",
  "KITTY PRYDE",
  "SHANG-CHI",
  "SHAMAN",
  "SHINOBI SHAW",
  "SHAPE",
  "SHARON CARTER",
  "PEGGY CARTER",
  "AGENT PEGGY",
  "MARGARET CARTER",
  "SKY-EATER",
  "SKRULL",
  "SEBASTIAN SHAW",
  "SPIDER-GIRL",
  "MAY PARKER",
  "SPIDER-WOMAN",
  "SPIDERWOMAN",
  "JESSICA DREW",
  "SHOCKER",
  "STORM",
  "STAR-LORD",
  "PETER JASON QUILL",
  "SYLVIE/LADY LOKI",
  "TANDY BOWEN",
  "TARANTULA",
  "’DUM-DUM’ DUGAN",
  "THADDEUS E. ‘THUNDERBOLT’ ROSS",
  "THANOS",
  "THING",
  "BENJAMIN ‘BEN’ J. GRIMM",
  "THOR",
  "THUNDERBALL",
  "TINKERER",
  "ELIJAH STERN",
  "TITANIUM MAN",
  "TOAD",
  "TOM THUMB",
  "TREY LANGSTROM",
  "TRITO",
  "TYRONE CASH",
  "ULTRON",
  "UNUS",
  "BEN URICH",
  "UNICORN",
  "VALKYRIE",
  "VAL COOPER",
  "VANISHER",
  "VENOM",
  "EDDIE BROCK",
  "VINDICATOR",
  "JOHN WRAITH",
  "VISION",
  "VULTURE",
  "BLACKIE DRAGO",
  "VENGEANCE",
  "VOLSTAGG",
  "WASP",
  "JANET PYM",
  "WHIZ KID",
  "MATSUYA TAKI",
  "WILDPACK",
  "WINTER SOLDIER",
  "JAMES ‘BUCKY’ BUCHANAN BARNES",
  "WOLVERINE",
  "LOGAN",
  "JAMES HOWLETT",
  "JIMMY WOO",
  "WOODY",
  "JAMES RHODES",
  "WONG",
  "WHIZZER",
  "WRECKER",
  "WOLFSBANE",
  "RAHNE SINCLAIR",
  "WARLOCK",
  "X-23",
  "KINNEY LAURA",
  "XORN",
  "KUAN-YI",
  "X-MAN",
  "X-MEN",
  "YELLOWJACKET",
  "DARREN CROSS",
  "YONDU",
  "YELENA BELOVA",
  "ZABU",
  "ZERO",
  "ZORN",
  "SHEN-YI",
  "ZEMO",
];

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

// previous search button
var previousSearchBtn = document.getElementById("previous-search-btn");

// card page
var cardPage = document.getElementById("card-page");

// main page for removing + adding classes
var mainPage = document.getElementById("main-page");

var loadMoreBtn = document.getElementById("load-more-btn");

var counter = 0;

var currentCharacterId = undefined;

var userSearch = undefined;

var selectedCategory = undefined;

// !!!!! Get previous searches from local storage - if they dont exist, create empty array to assign future searchs
function storageSetter(userSearch, selectedCategory) {
  searchParams = { userSearch, selectedCategory };
  var previousSearches =
    JSON.parse(localStorage.getItem("previous-search-history")) || [];
  previousSearches.push(searchParams);
  localStorage.setItem(
    "previous-search-history",
    JSON.stringify(previousSearches)
  );
}

// GET THE STUFF
function storageGetter() {
  return JSON.parse(localStorage.getItem("previous-search-history"));
}

// square brackets to get the stuff -1
function storageAppender() {
  var previousSearches = storageGetter();
  var mostRecentSearch = previousSearches.pop();

  if (mostRecentSearch.selectedCategory === "mcu") {
    mainPage.remove();
    mcuFetcher(mostRecentSearch.userSearch);
  } else if (mostRecentSearch.selectedCategory === "comics") {
    mainPage.remove();
    comics(mostRecentSearch.userSearch);
  } else {
    console.log("No previous search!");
    return;
  }
}

// previous search btn running storage appender which searches the last search in local storage
previousSearchBtn.addEventListener("click", storageAppender);

// search button with event listener
// the function that called the fetch functions based on search params will need to be called here
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  userSearch = userInput.value;

  selectedCategory = searchParameter.value;

  counter = 0;

  //   mainPage.classList.add('hide')
  if (!marvelCharacters.includes(userSearch.toUpperCase())) {
    addInvalidSearchEl();
    return;
  }
  if (selectedCategory === "mcu") {
    // removes main page elements NO ANIMATION !!!
    mainPage.remove();
    mcuFetcher(userSearch);
    loadMoreBtn.removeAttribute("hide");
    loadMoreBtn.setAttribute("class", "searchAgainBtnStyle");
  } else if (selectedCategory === "comics") {
    mainPage.remove();
    comics(userSearch);
    // added button !!!
    loadMoreBtn.removeAttribute("hide");
    loadMoreBtn.setAttribute("class", "searchAgainBtnStyle");
  } else {
    console.log(
      "Please select a Marvel Search word or check your spelling! Hint Spider-Man"
    );
  }

  storageSetter(userSearch, selectedCategory);

});

// invalid search notification on main page
function addInvalidSearchEl() {
  let alert = document.querySelector("#alert");

  let langs = [
    "Please select a Marvel Search word or check your spelling! Hint Spider-Man!",
  ];

  let nodes = langs.map((lang) => {
    let alertEl = document.createElement("h1");
    alertEl.setAttribute("class", "alert-class");
    alertEl.textContent = lang;
    return alertEl;
  });

  alert.append(...nodes);
}

// prototype fucntion for multiple film search cards
function mcuFetcher(userSearch) {
  fetch(
    `http://www.omdbapi.com/?s=${userSearch}&page=${
      counter / 9 + 1
    }&apikey=${omdbKey}`
  )
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

        if (filmPoster !== "N/A") {
          cardRender.append(filmTitleEl, filmPosterEl, filmYearEl);
        } else {
          cardRender.append(filmTitleEl, filmYearEl);
        }

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
      console.log(comicData);
      if (noResults) {
        console.log("Why does spiderman not work?");
        return;
      }

      var foundCharacter = comicData.data.results[0];

      currentCharacterId = foundCharacter.id;

      comicFetcher(foundCharacter.id);
    });
}

// THIS FETCHES THE COMICS AND APPENDS THEM TO DA PAGE
function comicFetcher(characterID) {
  fetch(
    `http://gateway.marvel.com/v1/public/characters/${characterID}/comics?limit=9&offset=${counter}&apikey=${marvelKey}`
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

// !!!! Load more button function
loadMoreBtn.addEventListener("click", function () {
  counter += 9;

  if (selectedCategory === "mcu") {
    mcuFetcher(userSearch);
  } else {
    comicFetcher(currentCharacterId);
  }
});


searchAgainBtn.addEventListener("click", function () {
  // document.removeAttribute('hide')
  cardPage.remove();
  // mainPage.append();
  window.location.reload();
});


