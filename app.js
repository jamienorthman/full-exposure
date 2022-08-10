
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

appendWidl("Utilize", "use!", "color:red")

appendWidl("Juxtapose", "compare and contrast?", "font-weight:bold")

appendWidl("Bulk collection", "mass surveillance", "", "https://www.deutschlandfunk.de/dlf-interview-with-edward-snowden-what-would-a-society-be-100.html")

appendWidl("conjouring", "produce or evoke", "color:gold; font-size:200%;")

appendWidl("Meandering", "weaving or move through?", "font-style:italic")

appendWidl("extraordinary rendition", "kidnapping")

appendWidl("enhanced interrogation", "torture", "font-weight:bold")

appendWidl("vignettes", "snapshots?", "font-style:italic")

appendWidl("methodologies", "methods")

appendWidl("intermediaries", "mediator", "color:green")

appendWidl("individuating", "-__-", "font-weight:bold")

appendWidl("Footfall measurement", "location tracking", "", "https://vimeo.com/425137575")

appendWidl("Psychographic breakdown", "personality labeling", "", "https://vimeo.com/425137575")

appendWidl("focalize", "just say focus", "font-weight:bold")

appendWidl("collateral damage", "massive civilian destruction during war", "color:blue")

appendWidl("Change-management", "can really manage change?!", "font-style:italic")

appendWidl("Sustainability", "long-term practices—nowadays used to gain profits", "font-size:200%; color:green;")

appendWidl("trajectory", "path")

appendWidl("casualties", "deaths", "font-size:200%; color:purple; font-style:italic")

appendWidl("inflection point", "turning point/milestone", "font-style:italic")

appendWidl("counterintelligence", "defense against spying", "font-weight:bold;")

appendWidl("outsourcing", "whoever does it cheapest gets the job", "font-size:150%")

appendWidl("Posthuman", "evolution")

appendWidl("useless", "no need to be useful", "font-weight:bold;")

appendWidl("Apropos", "relevant", "font-style:italic; color:blue;")

appendWidl("social distancing", "physical distancing", "font-weight:bold; color:red;")

appendWidl("front line", "military line closest to enemy or influential position in a debate", "color:gold; text-stroke:1px black; font-size:150%;")