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
 * This function generates initial search container by selecting all items on the page
 * with the 'page-link' id and adds them into a results box.
 */
function generateSearchContainer() {
    // Check if the search container already exists and remove it if so
    if($("#search-container")) {
        $("#search-container").remove();
    }

    // Collect all links on the page with id 'page-link'
    var links = $("[id=page-link]");

    // create container div
    var container = document.createElement("div");
    container.id = "search-container";
    container.classList = "search-result-container";

    // Loop through each link found on the page
    for(var i = 0; i < links.length; i++) {
        // Create result container div with unique ID
        var result = document.createElement("div");
        result.id = "result-" + i;

        // Create link
        var resultLink = document.createElement("a");
        resultLink.innerHTML = links[i].innerHTML;
        resultLink.href = links[i].href;
        resultLink.classList = "text-decoration-underline";

        // Append the created link to the result container
        result.appendChild(resultLink);
        // Append the result container to the main search container
        container.appendChild(result);
    }

    // Append main search container to the 'second' nav bar
    $("#nav-bar-2").append(container);
    // Call to search which will be redone at some point
    search(links.length);
}

// Redo at some point
function search(length) {
    // Check if the search box contains something
    if(document.getElementById("search").value) {
        // // Set input var to contents of the search box
        var input = document.getElementById("search").value.toLowerCase();

        // TODO redo this, this is pretty shitty atm
        // Should generate new results instead of deleting them
        for (var i = 0; i < length; i++) {
            var link = document.getElementById("result-" + i);
            if(!link.childNodes[0].innerHTML.toLowerCase().includes(input))
                link.remove();
        }
    } else {
        // Destroy that bad boi
        $("#search-container").remove();
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