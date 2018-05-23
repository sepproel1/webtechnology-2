/***************************************************
* @author: Seppe Roels
* @created: 14/03/2017
* @modified: 21/03/2018
* @copyright: Artevelde University College Ghent
* @TODO: build a working memory game
***************************************************/

// create an array with happy tree friends
let happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array
let doublefriends = happytreefriends.concat(happytreefriends);

// shuffle the array
shuffle(doublefriends);
 
// initialize all blocks, put them in an array
let blocks = document.getElementsByClassName('memory-block');
console.log(blocks);

// initialize url params
let urlPrefix = "https://rogerthat.be/images/praktijk5/";
let urlSuffix = ".png";

// initialize an empty array that will contain the active blocks
let activeBlocks = [];

// loop through each block to add functionality
for(let i = 0; i < blocks.length; i++) {
  
  // combine url
  let url = urlPrefix + doublefriends[i] + urlSuffix;
  
  // add the background image to each block + add a class
  blocks[i].style.backgroundImage = 'url('+url+')';
  blocks[i].className += " " + doublefriends[i];
}

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    let j, x, i; 
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
