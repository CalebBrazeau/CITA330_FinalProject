function login() {
    var PIN = document.getElementById("PIN").value;
    var ID = document.getElementById("ID").value;

    if(PIN == 1234 && ID == "M1234567") {
        window.location.href = "../pages/mainMenu.html";
    } else {
        window.alert("You don fucked up AA Ron");
    }
}
function generateSearchContainer() {
    if($("#search-container-0")) {
        $("#search-container-0").remove();
    }
    var links = $("[id=page-link]");

    var container = document.createElement("div");
    container.id = "search-container-0";
    container.classList = "search-result-container"

    for(var i = 0; i < links.length; i++) {
        var text = links[i].text;
        var link = links[i].href;

        var result = document.createElement("div");
        result.id = "result-" + i;

        var resultLink = document.createElement("a");
        resultLink.innerHTML = links[i].innerHTML;
        resultLink.href = links[i].href;
        resultLink.classList = "text-decoration-underline";

        result.appendChild(resultLink);
        container.appendChild(result);
    }

    $("#search-container").append(container);
    search();
}
function search() {
    var pageLinks = $("[id=page-link]");
    var input = document.getElementById("search").value;
    var results = [];
    var regex = new RegExp('(.*' + input + '.*)', "i");

    for (var i = 0; i < pageLinks.length; i++) {
        if (regex.test(pageLinks[i].innerHTML)) {
            results += pageLinks[i];
            console.log(results);
        }
    }
    // console.log(pageLinks);
}