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
        window.location.href = "../pages/mainMenu.html";
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

    // Collect all links on the page with id 'page-link'
    var links = $("[id=page-link]");
    // Get user input and send to lowercase
    var input = document.getElementById("search").value.toLowerCase();

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