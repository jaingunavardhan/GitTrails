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
    //STRING to OBJECT -> JSON.parse(STRING_IN_OBJECT_FORMAT)

    //Displaying the userDetails in form of list by creating a list tag and appending it to unordered list
    const list = document.createElement('li');
    list.innerHTML = user + '-' + mail + '-' + ph;
    list.setAttribute('class', 'users');
    const parent = document.querySelector('.userslist');
    parent.appendChild(list);
}