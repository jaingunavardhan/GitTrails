const url_route = 'https://crudcrud.com/api/cbdc10f3d0bd42e3b4c02d789c7eb6bf/appointmentData';

showAllUsers();

function showAllUsers()
{
  axios.get(url_route)
    .then( (result)=>{
      for(var i=0; i<result.data.length; i++)
      {
        displayUserOnScreen(result.data[i]);
      }
    })
    .catch( (error)=>{
      console.log(error);
    })

}

function displayUserOnScreen(userDetails)
{
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );
  userItem.id = userDetails._id;

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios.delete(url_route+'/'+event.target.parentElement.id)
      .then((result)=>{
        console.log(result)
      })
      .catch((error)=>{
        console.log(error)
      })
    userList.removeChild(event.target.parentElement);
  });

  editBtn.addEventListener("click", function (event) {
    axios.delete(url_route+'/'+event.target.parentElement.id)
      .then((result)=>{
        console.log(result)
      })
      .catch((error)=>{
        console.log(error)
      })
    userList.removeChild(event.target.parentElement);
    //localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  });
}

function handleFormSubmit(event)
{
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(url_route, userDetails)
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
  
  
  // Do not touch code below
  //module.exports = handleFormSubmit;
  