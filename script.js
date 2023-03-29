//darkmode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

function getSelectedLists() {
    var selectedCategories = [];
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    if (checkboxes.length == 0) {
        alert('Please select at least one category.');
        return;
    }

    checkboxes.forEach((checkbox) => {
        selectedCategories.push(checkbox);
    });
    return selectedCategories;
}

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
function displaySelectedContents() {
    const selectedCategories = document.querySelectorAll('input[type="checkbox"]:checked');
    const animalContainer = document.getElementById('animalContainer');
    animalContainer.innerHTML = '';
    
    selectedCategories.forEach((checkbox) => {
        const categoryArrayName = checkbox.value.toUpperCase();
        const categoryArray = eval(categoryArrayName);
        const categoryList = document.createElement('div');
        categoryList.setAttribute("id", "categoryList");
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

function spinWheel() {
    const startTime = performance.now();
    const element = document.getElementById('subjectBox');
    const duration = 1000; // 1 second
    const selectedCategoriesContents = randomizeListContents();

    function spin() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
    
        if (timeElapsed >= duration) {
            element.textContent = selectedCategoriesContents[Math.floor(Math.random() * selectedCategoriesContents.length)];
            searchListsForWinner();
        } else {
            element.textContent = selectedCategoriesContents[Math.floor(Math.random() * selectedCategoriesContents.length)];
            requestAnimationFrame(spin);
        }
    }
  
    requestAnimationFrame(spin);
}

function searchListsForWinner(){
    const winner = document.getElementById('subjectBox');
    const selectedCategories = getSelectedLists();
    const subjectBox = document.getElementById('categoryBox');

    selectedCategories.forEach((category) => {
        const categoryArrayName = category.value.toUpperCase();
        const categoryArray = eval(categoryArrayName);

        categoryArray.forEach((item) => {

            if (item == winner.textContent){
                subjectBox.textContent = category.value.charAt(0).toUpperCase() + category.value.slice(1);
            }
        });
    
    });
}

function searchWinner(){
    const winnerSubject = document.getElementById('subjectBox');
    const winnerCategory = document.getElementById('categoryBox');
    var animalRegex = /Fish|Birds|Mammals|Insects|Reptiles/

    if(winnerSubject.textContent == '---'){
        // do nothing as there is no winner
    }
    else {
        if(winnerCategory.textContent == 'Film'){
            var basehyperlink = 'https://film-grab.com/category/genre/';
            var searchterm = winnerSubject.textContent;
            var hyperlink = basehyperlink.concat(searchterm + '/');
            window.open(hyperlink, '_blank');
        } else if (animalRegex.test(winnerCategory.textContent)){
            var basehyperlink = 'https://www.google.com/search?tbm=isch&q=';
            var searchterm = winnerSubject.textContent;
            var hyperlink = basehyperlink.concat(searchterm);
            window.open(hyperlink, '_blank');
        } else {
            alert('No search results for this category yet. Sorry! :(');
        }

    }
}