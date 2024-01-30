function handleFormSubmit(event)
{
    event.preventDefault();
    const myObj = {
        username: event.target.username.value,  //Syntax -> event.target.NAME_Attribute_of_ELEMENT.value;
        email: event.target.email.value,
        phone: event.target.phone.value
    };

    const myObj_serialised = JSON.stringify(myObj);  //used to modfiy JS Object to JSON String (same but accessing diff)
    localStorage.setItem('User Details', myObj_serialised);

    //If you want to PARSE the stringified Object use the following
    // myObj_serialised = JSON.stringify(myObj);
    // To access any properties from local storage use -> localStorage.getItem('obj').PROP_NAME
    // myObj_normal = JSON.parse(myObj_serialised);
}

//module.exports = handleFormSubmit;