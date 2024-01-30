// Write the code as shown in the video below:
//querySelector is used to select ONLY ONE first element by Id/class/tag names
//Prefixes for ID-#, Class-.(DOT), Tag-none
const mainhead = document.querySelector('#main-heading'); //If we are using ID to get, then prefix #
mainhead.style.textAlign = 'center';

const buckethead = document.querySelector('#basket-heading');
buckethead.style.color = 'brown';
buckethead.style.marginLeft = '10px';   //We can only specify left margin

const fruits = document.querySelector('.fruits'); //When using Class names, prefix . (DOT)
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';          //Element's broder around itself and to fill the background color
fruits.style.margin = '30px';           //Element distance from each other and window
fruits.style.borderRadius = '5px';      //Rounded Corners
fruits.style.width = '50%';             //reduce width of the element to 50% of window size
fruits.style.listStyleType = 'none';    //Listing of elements like arrows, bullets, dots, etc.

//querySelectorAll is used to select all elements with the same Id/Class/tag names
//It returns Array list (we can have all Array operatiosn like push, pop, split etc)
const fruit = document.querySelectorAll('.fruit');
for(var i=0; i<fruit.length; i++)
{
    fruit[i].style.padding = '10px';
    fruit[i].style.margin = '10px';
    fruit[i].style.borderRadius = '5px';
}


//nth-child(ANY_INDEX) gives the element at that index eg: nth-child(2) gives 3rd element in the match
const evenfruit = document.querySelectorAll('.fruit:nth-child(even)'); //using Class name here, so .(DOT)
//Here we will get the class name elements with in even order like 0, 2, 4 th elements
for(var i=0; i<evenfruit.length; i++)
{
    evenfruit[i].style.backgroundColor = 'brown';
    evenfruit[i].style.color = 'white';
}

const oddfruit = document.querySelectorAll('.fruit:nth-child(odd)'); //using Class name here, so .(DOT)
//Here we will get the class name elements with in odd order like 1,3,5 th elements
for(var i=0; i<oddfruit.length; i++)
{
    oddfruit[i].style.backgroundColor = 'white';
}
