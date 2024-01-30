const form = document.querySelector('form');  //Accesing FORM element
const newinput = document.createElement('input');   //Craeting new INPUT element
newinput.setAttribute('type', 'text');              //Setting Attributes
newinput.setAttribute('name', 'description');
newinput.setAttribute('id', 'description');
form.insertBefore(newinput,form.lastElementChild);  //Adding this input element before BUTTON which is lastElementChild of FORM

//As we have description element in form, so we need to have the description displayer in list (helps for comparing)
//This we do for already existing elements (existing elements won't have 'p' element as there is no description field earlier)
const fruits = document.querySelectorAll('.fruit');
for(var i=0; i<fruits.length; i++)
{
    const newdesc = document.createElement('p');    //new paragraph element creation
    newdesc.innerHTML = '';                         //Empty textContent
    newdesc.setAttribute('style', 'font-style:italic');

    fruits[i].insertBefore(newdesc, fruits[i].firstElementChild); //Inserting before delete buttoon in list
}
 

//Adding an event Listener to FORM element to perform actions based on SUBMIT event
form.addEventListener('submit', function(event)
                                {
                                    event.preventDefault();  //Generally required to DEBUG or see changes happening

                                    const inputtext = document.getElementById('fruit-to-add').value; //Fetching text from iput field
                                    const inputdesc = document.getElementById('description').value; //Fetching description of fruit entered

                                    const newentry = document.createElement('li'); //Creating new element of with tag 'li' (list tag)

                                    const newentrydesc = document.createElement('p'); //Creating new description of type paragraph
                                    newentrydesc.innerHTML = inputdesc;
                                    newentrydesc.style.fontStyle = 'italic';
                                    //Adding innerHTML -> instead of using textNode and appendChild, we can directly do this using innerHTML
                                    newentry.innerHTML = inputtext;
                                    newentry.appendChild(newentrydesc);
                                    newentry.innerHTML += '<button class="delete-btn">x</button>' + "<button class='edit-btn'>Edit</button>";
                                    newentry.className = 'fruit'; //Assigning classname to newly created element
                                    
                                    const parent = document.querySelector('.fruits'); //Selecting ul element by its class name to make changes later
                                    parent.appendChild(newentry); //Making the new element a child of parent (ul) and appending at last
                                }
                    );


const filter = document.getElementById('filter'); //Accessing search box input filter

filter.addEventListener('keyup', function(event)
                                {
                                    const filtertext = filter.value.toLowerCase(); //Aceesing valur in filter input
                                    
                                    const fruitslist = document.querySelectorAll(".fruit"); //access fruits list using class name

                                    for(var i=0; i<fruitslist.length; i++)
                                    {
                                        const fruitslisttext = fruitslist[i].firstChild.textContent.toLowerCase();
                                        //firstChild gives -> text (textNode like) in the same element
                                        const fruitsdesctext = fruitslist[i].firstElementChild.textContent.toLowerCase();
                                        //firstElementChild gives -> first element inside the element

                                        if(fruitslisttext.indexOf(filtertext) != -1  || fruitsdesctext.indexOf(filtertext) !=-1)
                                        {
                                            fruitslist[i].style.display = 'flex';   //To adjust automatically when displayed and when not
                                        }
                                        else
                                        {
                                            fruitslist[i].style.display = 'none';   //Not to display the html element's content
                                        }
                                    }

                                }
                        );
