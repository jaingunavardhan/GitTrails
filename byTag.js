const lists = document.getElementsByTagName('li'); //Returns HTML Collections (Not array as in JS)
lists[4].style.color = 'blue';                      //So, no push, pop, split, indexOf methods here

for(var i=0; i<lists.length; i++)
  {
    lists[i].style.fontStyle = 'italic';
  }