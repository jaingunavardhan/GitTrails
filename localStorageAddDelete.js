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
  console.log("delete");
    const parent = document.querySelector('ul');
    //Displaying the userDetails in form of list by creating a list tag and appending it to unordered list
    const list = document.createElement('li');
    list.innerHTML = userDetails.username + '-' + userDetails.email + '-' + userDetails.phone;
    
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Delete');
    btn.onclick = (event)=>{
        event.preventDefault();
        localStorage.removeItem(userDetails.email);
        parent.removeChild(list);

    };
    list.appendChild(btn)
    parent.appendChild(list);
}

//module.exports = handleFormSubmit;