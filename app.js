import { wordList } from '/data.js'

const containerDiv = document.getElementById("word-container");

let wordElement;
function renderWords(wordListEntry) {
   

    const widlDiv = document.createElement("div"); // HTML element: these divs hold each word (euphemism). It contains two things: wordElement and toolTipSpan.
    widlDiv.classList.add("tooltip"); // tooltip class is added from style.css file

     // the HTML elements representing the characteristics of the wordListEntries.
    if (wordListEntry.link) { // wordListEntry refers to the actual contents of wordList (the objects inside array wordList).
        wordElement = document.createElement("a"); // creates a link element for wordElement...
        wordElement.href = wordListEntry.link; // ...attaches the link element to wordListEntry
        wordElement.target = "_blank" //opens link in another tab
    } else {
        wordElement = document.createElement("span"); // words with no link inside WidlDiv
    }
    wordElement.style = wordListEntry.styleCSS;
    let toolTipSpan = document.createElement("span"); // toolTipSpan created to see tooltip in the HTML.

    toolTipSpan.classList.add("tooltiptext"); // class 'tooltiptext' is added from style.css file.

    widlDiv.appendChild(wordElement); // attaches wordElement
    widlDiv.appendChild(toolTipSpan); // attaches toolTipSpan

    wordElement.innerText = wordListEntry.word; // euphemism will be displayed.
    toolTipSpan.innerText = wordListEntry.reason; // and tooltip feature with translation of the euphemism.

    containerDiv.appendChild(widlDiv)
    // Now all the HTML for this word has been created.
    // store reference for each word element in wordList so that we 
    // can access each word's HTML whenever we need it: (For example, in addEventListener.)
    wordListEntry.wordElementHTML = wordElement; 
}
// Creates HTML divs and attaches reference to each word's html element 
// to the word list entries. calls the appendWidl function above.
for (let i = 0; i < wordList.length; i++) {
    renderWords(wordList[i]); 
} 

wordElement.addEventListener('mouseover', highlightSelectedWord)

wordElement.addEventListener('mouseover', getRelatedWordsArray)

wordElement.addEventListener('mouseout', () => {
    wordElement.style.color = 'rgb(187, 175, 175)'
})

function highlightSelectedWord(e) {
    const hoveredWord = wordElement.classList.add('span:hover')
    return hoveredWord
}

// This function finds matching tags of other words when user hovers over one word
function getRelatedWordsArray() {
    const selectedWord = wordList.word
    const relatedWordsArray = wordList.filter(function(word) {
        return word.tags.includes(selectedWord)
    })
        console.log(relatedWordsArray)
}
        




/*function getTagsArray(words) {
    const tagsArray = []
    for (let word of words) {
        for (let tag of word.tags) {
            tagsArray.push(tag)
        }
    }
    return tagsArray
} */

//let relatedWords = []; // ...initializes the variable. to be filled up later.
// Next loop goes through each wordListEntry of the wordList...
//for (let wordListEntry of wordList) {
 // For each tag of this word...
    //for (let tag of wordListEntry.tags) {
        //let wordTag = wordList.tags(tag);
        // ...search all other words...
        //for (let otherWordListEntry of wordList) {
            // ...to compare their tags with the given tag of this word:
            //for (let tag of otherWordListEntry.tags) {
                //let otherWordTag = otherWordListEntry.tags(tag);
                // If the words are sharing at least 1 tag we consider them related.
                //if (wordTag === otherWordTag) {
                    //relatedWords.push(otherWordListEntry);
                    //break;
                //} // ** Could use array.includes() in the future ? **
            //}
        //}          
    //}
//const wordHtml = wordListEntry.wordElementHTML;
// Highlight Event:
//selectedWord.addEventListener("mouseover", getMatchingWordsArray) => {
    //for (let relatedWord of relatedWords) {
        // this is why we needed to store wordElementHTML. 
        // Because here we're manipulating DOM.
        //relatedWord.wordElementHTML.style.color = 'limeGreen';
    //}
//});
// Unhighlight Event:
//selectedWord.addEventListener("mouseout", (event) => {
    //for (let relatedWord of relatedWords) {
        // this is why we needed to store wordElementHTML. 
        //Because here we're manipulating DOM.
        //relatedWord.wordElementHTML.style.color = 'rgb(187, 175, 175)';
    //}
//});


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

