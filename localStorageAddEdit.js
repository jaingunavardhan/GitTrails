function handleFormSubmit(event)
{
    event.preventDefault();

    const user = event.target.username.value;
    const mail = event.target.email.value;
    const ph = event.target.phone.value;

    const userDetails = {
        username: user,
        email: mail,
        phone: ph
    };
    localStorage.setItem(mail, JSON.stringify(userDetails)); //OBJECT will get converted into STRING
    //STRING to OBJECT -> JSON.parse(STRING_IN_Stringified_OBJECT_FORMAT)
    showUseronScreen(userDetails);
}

function showUseronScreen(userDetails)
{
    //Making input fields empty
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    const parent = document.querySelector('ul');
    //Displaying the userDetails in form of list by creating a list tag and appending it to unordered list
    const list = document.createElement('li');
    list.innerHTML = userDetails.username + '-' + userDetails.email + '-' + userDetails.phone;
    
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.innerHTML='Delete';
    btn.onclick = (event)=>{
        event.preventDefault();
        localStorage.removeItem(userDetails.email);
        parent.removeChild(list);

    };

    const edit = document.createElement('button');
    edit.type = 'button';
    edit.innerHTML = 'Edit';
    edit.onclick = (event) => {
        event.preventDefault();
        localStorage.removeItem(userDetails.email);
        parent.removeChild(list);

        document.getElementById('username').value = userDetails.username;
        document.getElementById('email').value = userDetails.email;
        document.getElementById('phone').value = userDetails.phone;
    };

    list.appendChild(btn);
    list.appendChild(edit);
    parent.appendChild(list);
}

//module.exports = handleFormSubmit;