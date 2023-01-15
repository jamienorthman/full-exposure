
//later: use JSON to define the words list

let wordList = [ // the big list of words (euphemisms).
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
        tags: ["geopolitical", "migration"],
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
        tags: ["racism", "migration", "genocide"],
        link: ""
    },
    {
        word: "over the hill",
        reason: "old",
        styleCSS: "font-weight: bold",
        tags: ["social", "slang" ],
        link: ""
    },
    {
        word: "hook-up",
        reason: "have sex",
        styleCSS: "font-weight: bold",
        tags: ["social", "slang"],
        link: ""
    },
    {
        word: "put down",
        reason: "euthanize (an animal)",
        styleCSS: "font-weight: bold",
        tags: ["social", "politeness"],
        link: ""
    },
    {
        word: "without right to correspondence",
        reason: "immediately sentenced to death",
        styleCSS: "font-weight: bold",
        tags: ["murder", "war", "political"],
        link: "https://jsis.washington.edu/wordpress/wp-content/uploads/2018/02/USSR_Stalin_Great_Purge.pdf"
    },
    {
        word: "Falsos positivos (False positives)",
        reason: "structural assassination of civilians by military to inflate body counts",
        styleCSS: "font-weight: bold",
        tags: ["violence", "political"],
        link: "https://www.hrw.org/es/news/2017/11/11/los-incentivos-perversos-detras-de-los-falsos-positivos"
    },
    {
        word: "Sozialtourismus (Social tourism)",
        reason: "Flight of Ukrainians",
        styleCSS: "font-weight: bold",
        tags: ["migration", "political"],
        link: "https://www.tagesschau.de/inland/merz-ukraine-fluechtlinge-deutschland-101.html"
    },
    {
        word: "Sondervermögen (Special assets)",
        reason: "debt",
        styleCSS: "font-weight: bold",
        tags: ["political", "finance"],
        link: "https://www.tagesschau.de/wirtschaft/finanzen/staatshaushalt-sondervermoegen-101.html"
    },
    {
        word: "konsolidieren (consolidate)",
        reason: "nothing done yet",
        styleCSS: "font-weight: bold",
        tags: ["political", "mass media"],
    },
    {
        word: "Reichskristallnacht (Crystal Night)",
        reason: "November Progroms 1938",
        styleCSS: "font-weight: bold",
        tags: ["violence", "racism", "discrimination"],
    },
    {
        word: "sozial swach (socially weak)",
        reason: "poor, little school education",
        styleCSS: "font-weight: bold",
        tags: ["mass media", "discrimination"],
    },
    {
        word: "the Final Solution",
        reason: "mass murder of European Jews by Nazi Germany",
        styleCSS: "font-weight: bold",
        tags: ["murder", "discrimination", "racism"], 
    },
];



console.log("CREATING ELEMENTS!")


function appendWidl(wordListEntry) {
    let containerDiv = document.getElementById("word-container");

    let widlDiv = document.createElement("div"); // HTML element: these divs hold each word (euphemism). It contains two things: wordElement and toolTipSpan.
    widlDiv.classList.add("tooltip"); // tooltip class is added from style.css file

    let wordElement; // the HTML elements representing the characteristics of the wordListEntries.
    if (wordListEntry.link) { // wordListEntry refers to the actual contents of wordList (the objects inside array wordList).
        wordElement = document.createElement("a"); // creates a link element for wordElement...
        wordElement.href = wordListEntry.link; // ...attaches the link element to wordListEntry
        wordElement.target = "_blank" 
    } else {
        wordElement = document.createElement("span"); // one of the spans with no link inside the WidlDiv
    }
    wordElement.style = wordListEntry.styleCSS;
    let toolTipSpan = document.createElement("span"); // toolTipSpan created to see tooltip in the HTML.

    toolTipSpan.classList.add("tooltiptext"); // class 'tooltiptext' is added from style.css file.

    widlDiv.appendChild(wordElement); // attaches wordElement
    widlDiv.appendChild(toolTipSpan); // attaches toolTipSpan

    wordElement.innerText = wordListEntry.word; // now the euphemism will be displayed.
    toolTipSpan.innerText = wordListEntry.reason; // and the tooltip feature containing the translation of the euphemism.

    containerDiv.appendChild(widlDiv)
    // Now all the HTML for this word has been created.
    // In addition, store a reference for each word element in the JS wordList so that we 
    // can access each word's HTML whenever we need it: (For example, in addEventListener.)
    wordListEntry.wordElementHTML = wordElement; 
}
// This loop creates the HTML divs and attaches a reference to each word's html element 
// to the word list entries. It calls the appendWidl function above.
for (let i = 0; i < wordList.length; i++) {
    appendWidl(wordList[i]); 
}
// Next loop goes through each wordListEntry of the wordList...
for (let i = 0; i < wordList.length; i++) {
    let wordListEntry = wordList[i];
    let relatedWords = []; // ...initializes the variable. to be filled up later.
    // For each tag of this word...
    for (let j = 0; j < wordListEntry.tags.length; j++) {
        let wordTag = wordListEntry.tags[j];
        // ...search all other words...
        for (let k = 0; k < wordList.length; k++) {
            let otherWordListEntry = wordList[k];
            // ...to compare their tags with the given tag of this word:
            for (let l = 0; l < otherWordListEntry.tags.length; l++) {
                let otherWordTag = otherWordListEntry.tags[l];
                // If the words are sharing at least 1 tag we consider them related.
                if (wordTag === otherWordTag) {
                    relatedWords.push(otherWordListEntry);
                    break;
                } // ** Could use array.includes() in the future ? **
            }
        }          
    }
    let wordHtml = wordListEntry.wordElementHTML;
    // Highlight Event:
    wordHtml.addEventListener("mouseover", (event) => {
        for (let j = 0; j < relatedWords.length; j++) {
            // this is why we needed to store wordElementHTML. 
            // Because here we're manipulating DOM.
            relatedWords[j].wordElementHTML.style.color = 'limeGreen';
        }
    });
    // Unhighlight Event:
    wordHtml.addEventListener("mouseout", (event) => {
        for (let j = 0; j < relatedWords.length; j++) {
            // this is why we needed to store wordElementHTML. 
            //Because here we're manipulating DOM.
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

