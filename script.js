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
        const animalArrayName = category.value.toUpperCase();
        const animalArray = eval(animalArrayName);
        animalArray.forEach((animal) => {
            selectedCategoriesContents.push(animal);
        });
    });
    return selectedCategoriesContents;
}

// This function won't utilize getListContents because I want the category name to be displayed
function displaySelectedContents() {
    const selectedAnimals = document.querySelectorAll('input[name="animal"]:checked');
    const animalContainer = document.getElementById('animalContainer');
    animalContainer.innerHTML = '';
    
    selectedAnimals.forEach((checkbox) => {
        const animalArrayName = checkbox.value.toUpperCase();
        const animalArray = eval(animalArrayName);
        const animalList = document.createElement('div');
        animalList.setAttribute("id", "animalList");
        const categoryName = document.createElement('h2');

        categoryName.textContent = checkbox.value;
        animalList.appendChild(categoryName);

        animalArray.forEach((animal) => {
            const animalItem = document.createElement('div');
            animalItem.setAttribute("id", "containerWrapper");
            animalItem.textContent = animal;
            animalList.appendChild(animalItem);
        });
        animalContainer.appendChild(animalList);
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
    const element = document.getElementById('box');
    const duration = 1000; // 1 second
    const selectedCategoriesContents = randomizeListContents();

    function spin() {
        const currentTime = performance.now();
        const timeElapsed = currentTime - startTime;
    
        if (timeElapsed >= duration) {
            element.textContent = selectedCategoriesContents[Math.floor(Math.random() * selectedCategoriesContents.length)];
        } else {
            element.textContent = selectedCategoriesContents[Math.floor(Math.random() * selectedCategoriesContents.length)];
            requestAnimationFrame(spin);
        }
    }
  
    requestAnimationFrame(spin);
}

function searchWinner(){
    const winner = document.getElementById('box');

    if(winner.textContent == '---'){
        // do nothing
    } else {
        var basehyperlink = 'https://www.google.com/search?tbm=isch&q=';
        var searchterm = winner.textContent;
        var hyperlink = basehyperlink.concat(searchterm);
        window.open(hyperlink, '_blank');
    }
}