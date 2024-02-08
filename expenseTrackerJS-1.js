console.log(localStorage);
function submitClicked(event)
{
    event.preventDefault();
    
    const expenses = {
        amount : document.getElementById('amount').value,
        desc : document.getElementById('desc').value,
        category : document.getElementById('category').value
    }
    localStorage.setItem(expenses.desc, JSON.stringify(expenses));
    showUsersOnScreen(expenses);
}

function showUsersOnScreen(expenses)
{
    document.getElementById('amount').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('category').value = '';

    const expenseslist = document.getElementById('expenseslist');
    const newelement = document.createElement('li');
    newelement.innerHTML = expenses.amount + '-' + expenses.desc + '-' + expenses.category;

    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = "Delete Expenses";
    deletebutton.onclick = (event) => {
        event.preventDefault();
        localStorage.removeItem(expenses.desc);
        expenseslist.removeChild(newelement);
    }

    const editbutton = document.createElement('button');
    editbutton.innerHTML = 'Edit Expenses';
    editbutton.onclick = ( event ) => {
        event.preventDefault();
        localStorage.removeItem(expenses.desc);
        expenseslist.removeChild(newelement);
        document.getElementById('amount').value = expenses.amount;
        document.getElementById('desc').value = expenses.desc;
        document.getElementById('category').value = expenses.category;
    }
    

    newelement.appendChild(deletebutton);
    newelement.appendChild(editbutton);

    expenseslist.appendChild(newelement);
}