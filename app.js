
//later: use JSON to define the words list

let wordList = [
    {
        word: "extraordinary rendition",
        reason: "kidnapping",
        styleCSS: "font-weight: bold",
        tags: ["political", "war"],
        link: ""
    },
    {
        word: "bulk collection",
        reason: "mass surveillance",
        styleCSS: "font-weight: bold",
        tags: ["security", "political"],
        link: "https://www.deutschlandfunk.de/dlf-interview-with-edward-snowden-what-would-a-society-be-100.html"
    },
    {
        word: "enhanced interogation",
        reason: "torture",
        styleCSS: "font-weight: bold",
        tags: ["political", "war"],
        link: ""
    },
    {
        word: "footfall measurement",
        reason: "location tracking",
        styleCSS: "font-weight: bold",
        tags: ["capitalism", "data analytics"],
        link: "https://vimeo.com/425137575"
    },
    {
        word: "Psychographic breakdown",
        reason: "personality labeling",
        styleCSS: "font-weight: bold",
        tags: ["capitalism", "data analytics"],
        link: "https://vimeo.com/425137575"
    },
    {
        word: "collateral damage",
        reason: "massive civilian destruction during war",
        styleCSS: "font-weight: bold",
        tags: ["war", "mass media"],
        link: "https://vimeo.com/425137575"
    },
    {
        word: "casualties",
        reason: "deaths",
        styleCSS: "font-weight: bold",
        tags: ["war", "mass media"],
        link: ""
    },
    {
        word: "counterintelligence",
        reason: "defense against spying",
        styleCSS: "font-weight: bold",
        tags: ["security", "political"],
        link: ""
    },
    {
        word: "outsourcing",
        reason: "whoever does it cheapest gets the job",
        styleCSS: "font-weight: bold",
        tags: ["capitalism", "labor"],
        link: ""
    },
    {
        word: "social distancing",
        reason: "physical distancing",
        styleCSS: "font-weight: bold",
        tags: ["mass media", "pandemic"],
        link: ""
    },
    {
        word: "front line",
        reason: "military line closest to enemy or influential position in a debate",
        styleCSS: "font-weight: bold",
        tags: ["war", "pandemic"],
        link: ""
    },
    {
        word: "Pushback",
        reason: "forcing refugees or migrants back over a border",
        styleCSS: "font-weight: bold",
        tags: ["geopolitical", "immigration"],
        link: ""
    },
    {
        word: "downsizing",
        reason: "layoffs",
        styleCSS: "font-weight: bold",
        tags: ["capitalism", "labor"],
        link: ""
    },
    {
        word: "subprime loan",
        reason: "impossible to pay back",
        styleCSS: "font-weight: bold",
        tags: ["capitalism", "finance"],
        link: ""
    },
    {
        word: "ethnic cleansing",
        reason: "forced ethnic homogeny",
        styleCSS: "font-weight: bold",
        tags: ["racism", "genocide"],
        link: ""
    },
];



console.log("CREATING ELEMENTS!")


function appendWidl(wordListEntry) {
    let containerDiv = document.getElementById("word-container");

    let widlDiv = document.createElement("div");
    widlDiv.classList.add("tooltip");

    let wordElement;
    if (wordListEntry.link) {
        wordElement = document.createElement("a");
        wordElement.href = wordListEntry.link;
        wordElement.target = "_blank"
    } else {
        wordElement = document.createElement("span");
    }
    wordElement.style = wordListEntry.styleCSS;
    let toolTipSpan = document.createElement("span");

    toolTipSpan.classList.add("tooltiptext");

    widlDiv.appendChild(wordElement);
    widlDiv.appendChild(toolTipSpan);

    wordElement.innerText = wordListEntry.word;
    toolTipSpan.innerText = wordListEntry.reason;

    wordListEntry.wordElementHTML = wordElement; 

    containerDiv.appendChild(widlDiv)
}

for (let i = 0; i < wordList.length; i++) {
    let wordListEntry = wordList[i];
    // creates the HTML divs and attached a reference to each word's html element to the word list entries
    appendWidl(wordListEntry);
}

for (let i = 0; i < wordList.length; i++) {
    let wordListEntry = wordList[i];
    let relatedWords = [];
    // For each tag of this word...
    for (let j = 0; j < wordListEntry.tags.length; j++) {
        let wordTag = wordListEntry.tags[j];
        // ...search all other words...
        for (let k = 0; k < wordList.length; k++) {
            let otherWordListEntry = wordList[k];
            // ...to compare their tags with the given tag of this word.
            // ** Could use array.includes() in the future **
            for (let l = 0; l < otherWordListEntry.tags.length; l++) {
                let otherWordTag = otherWordListEntry.tags[l];
                // If the words are sharing at least 1 tag we consider them related
                if (wordTag === otherWordTag) {
                    relatedWords.push(otherWordListEntry);
                    break;
                }
            }
        }          
    }
    let wordHtml = wordListEntry.wordElementHTML;
    // Highlight Event:
    wordHtml.addEventListener("mouseover", (event) => {
        for (let j = 0; j < relatedWords.length; j++) {
            relatedWords[j].wordElementHTML.style.color = 'limeGreen';
        }
    });
    // Unhighlight Event:
    wordHtml.addEventListener("mouseout", (event) => {
        for (let j = 0; j < relatedWords.length; j++) {
            relatedWords[j].wordElementHTML.style.color = 'rgb(187, 175, 175)';
        }
    });
}


// appendWidl("Utilize", "use!", "color:red")

// appendWidl("Juxtapose", "compare and contrast?", "font-weight:bold")

/* appendWidl("Bulk collection", "mass surveillance", "font-weight:bold;", "https://www.deutschlandfunk.de/dlf-interview-with-edward-snowden-what-would-a-society-be-100.html")

// appendWidl("conjouring", "produce or evoke", "color:gold; font-size:200%;")

// appendWidl("Meandering", "weaving or move through?", "font-style:italic")

appendWidl("extraordinary rendition", "kidnapping", "font-weight:bold")

appendWidl("enhanced interrogation", "torture", "font-weight:bold")

// appendWidl("vignettes", "snapshots?", "font-style:italic")

// appendWidl("methodologies", "methods")

// appendWidl("intermediaries", "mediator", "color:green")

// appendWidl("individuating", "-__-", "font-weight:bold")

appendWidl("Footfall measurement", "location tracking", "font-weight:bold;", "https://vimeo.com/425137575")

appendWidl("Psychographic breakdown", "personality labeling", "font-weight:bold;", "https://vimeo.com/425137575")

// appendWidl("focalize", "just say focus", "font-weight:bold")

appendWidl("collateral damage", "massive civilian destruction during war", "font-weight:bold;")

// appendWidl("Change-management", "can really manage change?!", "font-style:italic")

// appendWidl("Sustainability", "long-term practices—nowadays used to gain profits", "font-size:200%; color:green;")

// appendWidl("trajectory", "path")

appendWidl("casualties", "deaths", "font-weight:bold;")

// appendWidl("inflection point", "turning point/milestone", "font-style:italic")

appendWidl("counterintelligence", "defense against spying", "font-weight:bold;")

appendWidl("outsourcing", "whoever does it cheapest gets the job", "font-weight:bold;")

// appendWidl("Posthuman", "evolution")

// appendWidl("useless", "no need to be useful", "font-weight:bold;")

// appendWidl("Apropos", "relevant", "font-style:italic; color:green;")

appendWidl("social distancing", "physical distancing", "font-weight:bold;")

appendWidl("front line", "military line closest to enemy or influential position in a debate", "font-weight:bold;")

appendWidl("Pushback", "forcing refugees or migrants back over a border", "font-weight:bold;")

appendWidl("downsizing", "layoffs", "font-weight:bold;")

appendWidl("subprime loan", "impossible to pay back", "font-weight:bold;")

appendWidl("ethnic cleansing", "forced ethnic homogeny", "font-weight:bold;") */

