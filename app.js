import { wordList } from '/data.js'

const containerDiv = document.getElementById("word-container");


function renderWord(wordListEntry) {
    let wordElement;

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
    // (each word has an HTML buddy, so wordElementHTML is a new key added to each object)
    wordListEntry.wordElementHTML = wordElement; 
}

// finds words that are related to selected word and highlights or
// unhighlights them based on matching tags:
function updateMatchingWords(wordEntry, shouldHighlight) {
    for (let otherWordEntry of wordList) {

        const tags1 = wordEntry.tags
        const tags2 = otherWordEntry.tags

        if (tags1.some(tag => tags2.includes(tag))) {
            // highlight or unhighlight the matching word element
            let cL = otherWordEntry.wordElementHTML.classList
            if (shouldHighlight)
            {
                cL.add('highlight')
            }
            else
            {
                cL.remove('highlight')
            }
        }
    }
}
   
// Creates HTML divs and attaches reference to each word's html element 
// to the word list entries.
for (let wordEntry of wordList) {
    renderWord(wordEntry); 
} 

// provides interactive state by showing highlighted words
// for given word element adds and removes highlighted state:
for (let wordEntry of wordList) {

    wordEntry.wordElementHTML.addEventListener('mouseout', () => {
        updateMatchingWords(wordEntry, false)
    })

    wordEntry.wordElementHTML.addEventListener('mouseover', () => {
        updateMatchingWords(wordEntry, true)
    })
} 