const fruitlist = document.getElementsByClassName('fruit'); //Returns HTML Collections (Not array as in JS)
//Here we will have all the classes with name FRUIT and hence we get list of it
//So, we used getElements (ELEMENTS not ELEMENT)
fruitlist[2].style.backgroundColor = 'yellow';

for(var i=0; i<fruitlist.length; i++)
  {
    fruitlist[i].style.fontWeight = 'bold';
  }