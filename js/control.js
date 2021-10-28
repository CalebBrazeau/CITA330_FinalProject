/* Function to handle logging in.
 * Will probably never be fully functional for this project
 */
function login() {
    // Get input for user PIN and ID
    var PIN = document.getElementById("PIN").value;
    var ID = document.getElementById("ID").value;

    // Check if the inputted PIN is correct and the ID is correct
    if(PIN == 1234 && ID == "M1234567") {
        // Go to main menu page
        window.location.href = "/pages/mainMenu.html";
    } else {
        // Alert user of failed login
        window.alert("You don fucked up A-A Ron");
    }
}

/*
 * This function collects all elements on the page with the id 'page-link'
 * then checks each one if they include what the user is searching for and displays
 * them in the results box
 */
function generateSearchContainer() {
    // Check if the search container already exists and remove it if so
    if($("#search-container")) {
        // Destroy that bad boi
        $("#search-container").remove();
    }

    // Get user input
    var input = document.getElementById("search").value.toLowerCase();

    // Check if the input box has any contents
    if (!input) {
        // Destroy dat bad boi
        $("#search-container").remove();
    } else {
        // Collect all links on the page with id 'page-link'
        var links = $("[id=page-link]");
    
        // create container div
        var container = document.createElement("div");
        container.id = "search-container";
        container.classList = "search-result-container";
    
        // Loop through each link found on the page
        for(var i = 0; i < links.length; i++) {
            // If the current element's innerHTML includes the users input
            if (links[i].innerHTML.toLowerCase().includes(input)) {
                // Create result container div with unique ID
                var resultContainer = document.createElement("div");
                resultContainer.id = "result";
        
                // Create link
                var resultLink = document.createElement("a");
                resultLink.innerHTML = links[i].innerHTML;
                resultLink.href = links[i].href;
                resultLink.classList = "text-decoration-underline";
        
                // Append the created link to the result container
                resultContainer.appendChild(resultLink);
                // Append the result container to the main search container
                container.appendChild(resultContainer);
            }
        }
    
        // Append main search container to the 'second' nav bar
        $("#nav-bar-2").append(container);
        // Keyboard event listener for enter key
        Why();
    }
}

/*
 * If the user decides to click the 'GO' button this function checks if there is one result in the result box
 * and goes to that page
 */
function go() {
    // If the search container has one item in it
    if ($("#search-container")[0].childNodes.length == 1) {
        // Go to the items page
        window.location.href = $("#search-container")[0].childNodes[0].childNodes[0].href;
    }
}

// IMPORTANT: Themes only work on a server, Apache webservers are the easiest to set up if you want to work on theme

/*
 * Function to set the theme cookie for each page
 */
function setTheme(cValue) {
    // Set browser cookie to what theme the user selects
    document.cookie = "theme=" + cValue + "; expires=Thu, 20 Apr 9999 12:00:00 UTC; path=/";
    // Refresh the page to reflect changes
    window.location.reload(false);
}

/*
 * Function to read and return the theme cookie value
 * @return c.substring(name.length, c.length) (cookie value)
 */
function getTheme() {
    var name = "theme=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
    }
    return c.substring(name.length, c.length);
}

// Function to run on page load, sets theme and active nav bar button
function onLoad() {
    try {
        // If there is an element on the page with the 'title' id
        if($('#title').length == 1) {
            // Get the elements innerHTML
            var activeNav = $('#title')[0].innerHTML;

            // Set navbar button to active based off of the innerHTML
            if(activeNav == 'Student Information &amp; Financial Aid') {
              $('#student').addClass("active");
            } else if (activeNav == 'Personal Information') {
              $('#personal').addClass("active");
            } else if (activeNav == 'Settings') {
              $('#settings').addClass("active");
            }
        }
        // Gets the current theme from cookies and appends the proper css file to the head
        switch(getTheme()) {
            case "light":
                $('head').append('<link href="/css/md5/mdb.min.css" rel="stylesheet">');
                break;
            case "citrus":
                $('head').append('<link href="/css/themes/citrus.css" rel="stylesheet">');
                break;
            case "chrimsonChin":
                $('head').append('<link href="/css/themes/chrimsonChin.css" rel="stylesheet">');
                break;
            case "slate":
                $('head').append('<link href="/css/themes/slate.css" rel="stylesheet">');
                break;
            default:
                // Do nothing (dark theme is default)
                break;
        }
        
        var search = document.getElementById('search');
        // Add keyup event listener
        search.addEventListener("keyup", (event) => {
            // If the event is equal to 'Enter'
            if (event.key == 'Enter') {
                // Goto the first results link
                window.location.href = $('#result')[0].childNodes[0].href;
            }
        });
      } catch (e) {
          // uh oh
          console.log("uh oh");
      }
}
/*
 * Function to go to the selected term
 */
function selectTerm(term) {
    if (term == "Winter 2021") {
        console.log("Winter :(");
    } else if(term == "Fall 2021") {
        window.location.href = "/pages/studentInformation/studentDetailSchedule.html";
    } else if(term == "Summer 2021") {
        console.log("Summer :D");
    } else {
        console.log("Spring :|");
    }
}
/*
 * Function to reset PIN Fields
 * Could be change to reset any input fields if wanted to reuse somewhere else
 */
function reset() {
    // Get all fields with the ID 'PIN'
    var PIN = $("[id=PIN]");
    
    for (var i = 0; i < PIN.length; i++) {
        // Loop through and set all values to empty strings
        PIN[i].value = "";
    }
}