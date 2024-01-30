const subhead = document.createElement('h3'); //Creates HTML element with empty h3 tag. i.e. <h3></h3>
const subheadtext = document.createTextNode('Buy high quality organic fruits online'); //Just stores the content like string
subhead.appendChild(subheadtext); //We append the textNode to h3 element. i.e., <h3>Buy high quality organic fruits online</h3>

subhead.setAttribute('style', 'font-style:italic'); //Adding attribute to h3 element i.e., <h3 style='font-style:italic'>...</h3>
                //Attrib NAME,  VALUE all in quotes 

const divs = document.getElementsByTagName('div'); //Getting HTML collections of div elements using byTagName
divs[0].appendChild(subhead); //Appending h3 element to first div element
//In div[0], there is already h1 element present, now this h3 will be placed after that

const para = document.createElement('p'); //creating empty paragraph element i.e. <p></p>
const paratext = document.createTextNode('Total fruits: 4'); //Creating content like string
para.appendChild(paratext); //Now, appending the content to paragraph i.e. <p>Total fruits: 4 </p>

para.id = 'fruits-total'; // setting ID to paragraph i.e. <p id='fruits-total'>Total fruits: 4 </p>
    //para.className = "CLASSNAME";  ->  to set className


    //element.parentElement; ->  Accessing parent element
const list = divs[1].lastElementChild; //Accessing last element among the childs of second div element
    // divs[1].firstElementChild;   ->  Accessing first element among the child of second div element
    //divs[1].children;  ->//Gives an HTML collection of all children elements (accessable through 0 based INDEX)


    //element.nextElementSibling;  ->  Gives the next element which is of same level
    //element.previousElementSibling  ->  Gives the previous element which is of same level

divs[1].insertBefore(para, list); //In divs[1], it para will be added as a children that too before list
    //parentelement.insertBefore(element_to_be_inserted_as_child, before_which_child_to_be_inserted);
