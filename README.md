Check it out here: https://menu-salaarshafi.netlify.app/

In the Menu project there is a list of menu items and also buttons which when clicked show only the items of the specific category named on the button eg breakfast or lunch. The buttons are not hardquoted but displayed dynamically which means as many types of menu items you have in the data those many types of buttons will automatically be shown.

The data is imported from another file and two other functions are also imported which are responsible for returning the menu items and the categories. The data sent into the categories function which sifts through the objects and determines all the different categories these items fall into makes a list of all these categories and returns a jsx component having buttons which run functions that set the menuItems state as the setMenu function is sent to the categories function. These items are filtered items of only that category as named on the specific button.

This menuItems state is then mapped and each data object sent to menuItems function which returns a jsx component of a single item and of these items an array is made. This array is then displayed as a jsx component on the webpage only having the filtered items of a specific category or all of them.
