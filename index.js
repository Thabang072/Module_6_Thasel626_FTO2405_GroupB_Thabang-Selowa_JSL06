// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]

};

const price = {
    GarlicBread: "R1",
    Bruschetta: "R30",
    MargheritaPiz: "R300"
}


// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
   
    const OurMenu = document.getElementById("menu");
    
        forEach(OurMenu => OurMenu { MainCourses =  MainCourses ...}
            
        });

            // Take menu items array display as ordered list before ordering

            // create unordered list <ul>

            // populate unordered onclick() list with each item from the the menu array.

            // return menu

            // console.log(category + ":");
            // menu[category].forEach(item => console.log(" - " + item));
            // console.log(); // Adding a blank line for better readability
        }
    
    
    displayMenu(menu);
    
    
   
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

        // Create a list item element

        // Set the text content of the list item element to the item name

        // Attach a click event listener to the list item to add it to the order

        // Append the list item to the list of items
    }
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {

    const OurMenu = document.getElementById("order-items");
    // items clicked => add in ul () [iterare in the menu using food const and add it to the ul, keep incrementing food++ as long as onclick() ]
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems();
}

// Start the menu system by calling the init function
initMenuSystem(menu);
