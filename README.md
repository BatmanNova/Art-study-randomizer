# Art-study-randomizer
an art study randomizer that randomly selects material for you to study based upon selected categories.

Website is hosted through github, can use at: batmannova.github.io/Art-study-randomizer/

The animalia data was collected via the ITIS database, examples of the queries I used can be found in MSSQLqueries.txt.


The flow of the program is as follows:
1. User selects categories of art studies they want to study
2. User clicks the spin button
3. The spin button calls the spinWheel function
4. The spinWheel function calls the randomizeListContents function
5. The randomizeListContents function calls the getListContents function
6. The getListContents function calls the getSelectedLists function
7. The getSelectedLists function checks if any checkboxes are checked, if none, "check" all
8. The getSelectedLists function returns an array of the selected checkboxes
9. The getListContents function iterates through the array of selected checkboxes, pushing contents of all to 1 array
10. The randomizeListContents function randomizes the array of all contents of selected categories
11. The spinWheel function displays a random element from the randomized array
12. Once the spinWheel duration ends, the spinWheel function displays the category and subject of the random element (winner)
13. When the Browse images button is pressed, the categoryBox is checked against the regex to clean or search
14. SubjectBox contents are used to search for images dependant upon radio button selection