//darkmode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

//constants of lists (categories of art studies)
const animalRegex = /Fish|Birds|Mammals|Insects|Reptiles/;
const miscCategoryRegex = /Environments|Fashion|Architecture|Film|Portraits/;
//The twoWord regex has double inputs since I am using them for cleaning the "categoryWinner.textContent" and the search engine option conditional
//in searchWinner(), which is reading the cleaned CategoryWinner.textContent. Probably a better way of doing this but haven't thought about it yet.
const twoWordCategoryRegex = /Still_lifes|Weird_animals|Still lifes|Weird animals/;


//This function will return an array of all the selected categories
function getSelectedLists() {
    var selectedCategories = [];
    var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    
    if (checkedBoxes.length == 0) {
        // If 0, select every checkbox so a winner is randomly chosen from all categories
        checkedBoxes = document.querySelectorAll('input[type=checkbox]');
    }

    checkedBoxes.forEach((checkbox) => {
        selectedCategories.push(checkbox);
    });

    return selectedCategories;
}

// This function will return an array of all the contents of the selected categories
function getListContents(){
    var selectedCategories = getSelectedLists();
    var selectedCategoriesContents = [];

    selectedCategories.forEach((category) => {
        const categoryArrayName = category.value.toUpperCase();
        const categoryArray = eval(categoryArrayName);
        
        categoryArray.forEach((element) => {
            selectedCategoriesContents.push(element);
        });
    });

    return selectedCategoriesContents;
}

// This function won't utilize getListContents because I want the category name to be displayed
// This function just displays the contents of the selected categories
function displaySelectedContents() {
    var selectedCategories = document.querySelectorAll('input[type="checkbox"]:checked');

    if (selectedCategories.length == 0) {
        // If 0, select every checkbox so a winner is randomly chosen from all categories
        selectedCategories = document.querySelectorAll('input[type=checkbox]');
    }

    const animalContainer = document.getElementsByClassName('displayCategoryContainer')[0];
    animalContainer.innerHTML = '';

    selectedCategories.forEach((checkbox) => {
        const categoryArrayName = checkbox.value.toUpperCase();
        const categoryArray = eval(categoryArrayName);
        const categoryList = document.createElement('div');
        categoryList.setAttribute("class", "categoryList");
        const categoryName = document.createElement('h2');

        categoryName.textContent = checkbox.value;
        categoryList.appendChild(categoryName);

        categoryArray.forEach((element) => {
            const categoryItem = document.createElement('div');
            categoryItem.setAttribute("id", "containerWrapper");
            categoryItem.textContent = element;
            categoryList.appendChild(categoryItem);
        });

        animalContainer.appendChild(categoryList);
    });
}

// this list randomizes the contents of the selected categories
function randomizeListContents(){
    const selectedCategoriesContents = getListContents();
    const randomizedList = [];
    
    while (selectedCategoriesContents.length > 0){
        const randomIndex = Math.floor(Math.random() * selectedCategoriesContents.length);
        randomizedList.push(selectedCategoriesContents[randomIndex]);
        selectedCategoriesContents.splice(randomIndex, 1);
    }

    return randomizedList;
}

// this function "spins the wheel" based on the duration timer, 
// randomly selecting an element from the randomized list based on the recursive
// requestAnimationFrame function calling spin().
// once the duration timer is up, "subjectBox" contains the "winner" which is an element
// of the randomized list.
// searchListsForWinner() is then called.
function spinWheel() {
    const startTime = performance.now();
    const element = document.getElementById('subjectBox');
    const duration = 1000; // 1 second
    const selectedCategoriesContents = randomizeListContents();

    //resetting the slot machines category box
    if(document.getElementById('categoryBox').textContent != '---'){
        document.getElementById('categoryBox').textContent = '---';
    }

    function spin() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
    
        if (timeElapsed >= duration) {
            element.textContent = selectedCategoriesContents[Math.floor(Math.random() * selectedCategoriesContents.length)];
            searchListsForWinner();
        }
        else {
            element.textContent = selectedCategoriesContents[Math.floor(Math.random() * selectedCategoriesContents.length)];
            requestAnimationFrame(spin);
        }
    }
  
    requestAnimationFrame(spin);
}

// This function will search the randomized list for the winner (based on subjectBox contents) and display the category
function searchListsForWinner(){
    const winnerSubject = document.getElementById('subjectBox');
    const selectedCategories = getSelectedLists();
    const winnerCategory = document.getElementById('categoryBox');

    selectedCategories.forEach((category) => {
        const categoryArrayName = category.value.toUpperCase();
        const categoryArray = eval(categoryArrayName);

        categoryArray.forEach((item) => {

            if (item == winnerSubject.textContent){
                winnerCategory.textContent = category.value.charAt(0).toUpperCase() + category.value.slice(1);
                
                if (twoWordCategoryRegex.test(winnerCategory.textContent)){
                    winnerCategory.textContent = winnerCategory.textContent.replace('_', ' ');
                }
            }
        });
    });

    //There may be a better place for this but i'm adding it here currently
    // Following function will display the film-grab search button if the winner is a film
    if (winnerCategory.textContent == 'Film'){
        document.getElementById('film-grab-div').style.display = 'block';
        document.getElementById('pinterest').checked = false;
        document.getElementById('film-grab').checked = true;
    } else {
        document.getElementById('film-grab').checked = false;
        document.getElementById('pinterest').checked = true;
        document.getElementById('film-grab-div').style.display = 'none';
    }
}

function searchGoogle(searchTerm){
    var baseHyperlink = 'https://www.google.com/search?tbm=isch&q=';
    var hyperlink = baseHyperlink.concat(searchTerm);
    window.open(hyperlink, '_blank');
}

function searchPinterest(searchTerm){
    // full hyperlink https://www.pinterest.com/search/pins/?q=(INPUT GOES HERE)&rs=typed
    var basehyperlink = 'https://www.pinterest.com/search/pins/?q='
    var hyperlink = basehyperlink.concat(searchTerm);
    var hyperlinkExtension = '&rs=typed'
    hyperlink = hyperlink.concat(hyperlinkExtension);
    window.open(hyperlink, '_blank');
}    

function searchFilmGrab(searchTerm){
    var baseHyperlink = 'https://film-grab.com/category/genre/';
    var hyperlink = baseHyperlink.concat(searchTerm + '/');
    window.open(hyperlink, '_blank');
}

// this function will search the winner based on the search engine selected
function searchWinner(){
    const winnerSubject = document.getElementById('subjectBox');
    const winnerCategory = document.getElementById('categoryBox');

    if(winnerSubject.textContent == '---'){
        // do nothing as there is no winner
        alert('Please spin the wheel first!');
    }
    else {
        if (animalRegex.test(winnerCategory.textContent) || miscCategoryRegex.test(winnerCategory.textContent) 
            || twoWordCategoryRegex.test(winnerCategory.textContent))
            {
            var checkedSearchEngine = document.querySelector('input[name="search"]:checked').value;
            if (checkedSearchEngine == 'google'){
                searchGoogle(winnerSubject.textContent);
            }
            else if (checkedSearchEngine == 'pinterest'){
                searchPinterest(winnerSubject.textContent);
            }
            else if(checkedSearchEngine == 'film-grab'){
                searchFilmGrab(winnerSubject.textContent);
            }
            else {
                alert('Please select a search engine.');
            }
        }
        else {
            alert('No search results for this category yet. Sorry! :(');
        }

    }
}