
//later: use JSON to define the words list

let wordList = [
    {
        word: "utilize",
        reason: "use!",
        tags: ["unnecessary", "overused"],
        link: ""
    },
    {
        word: "bulk collection",
        reason: "mass surveillance",
        tags: ["euphemism", "political"],
        link: "https://www.deutschlandfunk.de/dlf-interview-with-edward-snowden-what-would-a-society-be-100.html"
    }
];



console.log("CREATING ELEMENTS!")


function appendWidl(word, reason, styleCSS, link) {
    let containerDiv = document.getElementById("word-container");

    let widlDiv = document.createElement("div");
    widlDiv.classList.add("tooltip");

    let wordElement;
    if (link) {
        wordElement = document.createElement("a");
        wordElement.href = link;
        wordElement.target = "_blank"
    } else {
        wordElement = document.createElement("span");
    }
    wordElement.style = styleCSS;
    let toolTipSpan = document.createElement("span");

    toolTipSpan.classList.add("tooltiptext");

    widlDiv.appendChild(wordElement);
    widlDiv.appendChild(toolTipSpan);

    wordElement.innerText = word;
    toolTipSpan.innerText = reason;

    containerDiv.appendChild(widlDiv)
}

appendWidl("utilize", "use!", "color:red")

appendWidl("juxtapose", "compare and contrast?", "font-weight:bold")

appendWidl("Bulk collection", "mass surveillance", "", "https://www.deutschlandfunk.de/dlf-interview-with-edward-snowden-what-would-a-society-be-100.html")

appendWidl("conjouring", "produce or evoke", "color:gold; font-size:200%;")


