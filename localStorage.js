function handleFormSubmit(event)
{
    event.preventDefault();
    
    //Syntax -> localStorage.setItem('key', 'value')      .getItem('key')
    //Syntax -> event.target.NAME_Attribute_of_ELEMENT.value;
    localStorage.setItem('Username', event.target.username.value);   
    localStorage.setItem('Email', event.target.email.value);
    localStorage.setItem("Phone Number", event.target.phone.value);
}

//module.exports = handleFormSubmit;