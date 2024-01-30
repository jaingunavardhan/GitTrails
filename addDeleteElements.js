
const form = document.querySelector('form');  //Selecting FORM element by Tag name
const parent = document.querySelector('.fruits'); //Selecting ul element by its class name to make changes later

//Adding an event Listener to FORM element to perform actions based on SUBMIT event
form.addEventListener('submit', function(event)
                                {
                                    event.preventDefault();  //Generally required to DEBUG or see changes happening

                                    const inputtext = document.getElementById('fruit-to-add').value; //Fetching text from iput field

                                    const newentry = document.createElement('li'); //Creating new element of with tag 'li' (list tag)
                                    //Adding innerHTML -> instead of using textNode and appendChild, we can directly do this using innerHTML
                                    newentry.innerHTML = inputtext + '<button class="delete-btn">x</button>' + "<button class='edit-btn'>Edit</button>";
                                    newentry.className = 'fruit'; //Assigning classname to newly created element

                                    parent.appendChild(newentry); //Making the new element a child of parent (ul) and appending at last
                                }
                    );

parent.addEventListener('click', function(event)
                                {
                                    event.preventDefault();

                                    if(event.target.classList.contains('delete-btn')) //To make sure 'x' (delete btn) is clicked
                                    {   
                                        //If delete button was clicked then we need to remove its parent element which is a fruit name                                        
                                        const deletetarget = event.target.parentElement; //Fetching the parent of the button which is clicked
                                        parent.removeChild(deletetarget); //to remove any child from its parent, we use PARENT.removeChild(CHILD)
                                    }
                                }
                    )
