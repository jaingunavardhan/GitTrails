//Setting the variable containing the order of keys pushed into localStorage
//We are using array to have an order of keys pushed
if(localStorage.length==0)
    localStorage.setItem( 'keys_in_order', JSON.stringify([]) );
    //Here, array will be converted into JSON object and using JSON.parse() we get the array

//Fetching the keys JSON object (contains order of keys pushed) from localStorage
const keys_in_order_json = localStorage.getItem('keys_in_order');
//Converting the JSON object into normal array (Now, we have normal array with keys in order)
const keys_in_order_array = JSON.parse( localStorage.getItem('keys_in_order') ) ;

//Fetching the 'ul' list from html document
const expenseslist = document.getElementById('expenseslist');

//Everytime we load the page, we fetch any expenses stored in localStorage & display them
showExpenses();

function showExpenses ()
{    
    expenseslist.innerHTML=''; //Making the 'ul' list empty

    //Iterating through the array of keys which are in order
    for(var i=0; i<keys_in_order_array.length; i++)
    {
        //fetching the value stored in the key place and converting it into normal object
        const expenses = JSON.parse( localStorage.getItem(keys_in_order_array[i]) );
        //Creating new element 'li'
        const newelement = document.createElement('li');
        //Adding the text content to new element
        newelement.innerHTML = expenses.amount + '-' + expenses.desc + '-' + expenses.category;
        //Creating delete button for new element
        const deletebutton = document.createElement('button');
        deletebutton.innerHTML = "Delete Expenses"; //Naming it Delete expenses
        deletebutton.onclick = (event) => {   //Arrow function to define buttons functionality
            event.preventDefault();
            localStorage.removeItem(expenses.desc);  //removing item from localStorage
            //fetching index of this key from keys in order
            const index = keys_in_order_array.indexOf(expenses.desc);
            //removing that key from keys in order using splice(START_INDEX, NO_OF_ELEMENTS_TO REMOVE)
            keys_in_order_array.splice(index, 1);
            //updating keys in order into localStorage
            localStorage.setItem( 'keys_in_order', JSON.stringify(keys_in_order_array) );
            expenseslist.removeChild(newelement);   //Removing this element as child to 'ul'
        }

        const editbutton = document.createElement('button');
        editbutton.innerHTML = 'Edit Expenses';
        editbutton.onclick = ( event ) => {
            event.preventDefault();
            localStorage.removeItem(expenses.desc);
            expenseslist.removeChild(newelement);

            //When EDIT button is clicked we remove it from localStorage
            // AND place the values in input fields to enable users to edit them
            document.getElementById('amount').value = expenses.amount;
            document.getElementById('desc').value = expenses.desc;
            document.getElementById('category').value = expenses.category;
        }
        

        //Appending delete and edit buttons to 'li' element which is newly created
        newelement.appendChild(deletebutton);
        newelement.appendChild(editbutton);

        expenseslist.appendChild(newelement);
    }
}

//When 'ADD EXPENSES' is clicked, this function will be invoked
function submitClicked(event)
{
    event.preventDefault();
    //Fetching all values given in input fields & creating an object
    const expenses = {
        amount : document.getElementById('amount').value,
        desc : document.getElementById('desc').value,
        category : document.getElementById('category').value
    }
    //Assigning the object as value to key(desc) in localStorage as JSON objects
    localStorage.setItem(expenses.desc, JSON.stringify(expenses));
    //As we have only one button 'ADD EXPENSES' to edit and also to add new elements in form
    //We need not update keys in order when we edit, so we check
    //If key exists then we just display or else we create a key and display
    if(keys_in_order_array.indexOf(expenses.desc) == -1)  
    {
        keys_in_order_array.push(expenses.desc);
        localStorage.setItem('keys_in_order', JSON.stringify(keys_in_order_array));
    }
    //Displaying the contents in localStorage everytime we create a new entry
    showExpenses();
}