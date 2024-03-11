//API Endpoint link with URL
const url_route = 'https://crudcrud.com/api/5c81dc508ce64290b6a6d350f436aa8d/StudentsList'

showAllStudents();
//Everytime we reload the page, this function will be called to show all users
function showAllStudents()
{
    axios.get(url_route)    //Get all entries from API
        .then( (result)=>{  //on Success, gives list of students i.e., entries in API
            const studentsInAPI = result.data; //gives array of objects(entries) in API
            const studentsCountAPI = studentsInAPI.length; //Getting length of objects(entries)
            //Changing the value of label "Total Students" using its ID
            document.getElementById('studentCount').innerHTML=studentsCountAPI;
            for(var i=0; i<studentsCountAPI; i++)   //Iterating through objects(entries)
            {
                showStudent(studentsInAPI[i]);  //Displaying each object(entry) by calling func
            }
        })
        .catch(error)
        {
            console.log(error);
        }
}

function showStudent(studentDetails)
{
    const studentsList = document.querySelector('ul');  //selects unordered list element from HTML

    const newStudent = document.createElement('li');    //Creates new element with 'li' tag
    newStudent.innerHTML = `${studentDetails.name}-${studentDetails.mobile}-${studentDetails.address}`;
    newStudent.id = studentDetails._id; //making li tag ID as the ID received for student entry in API

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = (event)=>{
        const deleteURL = url_route + '/' + event.target.parentElement.id;
        axios.delete(deleteURL)
            .then( (result)=>{
                studentsList.removeChild(event.target.parentElement);

                //Changing the student count label value
                let countLabel = document.getElementById('studentCount').innerHTML;
                countLabel = parseInt(countLabel) - 1;
                document.getElementById('studentCount').innerHTML = countLabel;
            })
            .catch( (error)=>{
                console.log(error)
            });
    }

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = (event)=>{
        //below gives text content of parent without its childrens text
        const textNode = event.target.parentElement.firstChild;
        const text = textNode.textContent.split('-');
        document.getElementById('name').value = text[0];
        document.getElementById('phone').value = text[1];
        document.getElementById('address').value = text[2];

        const deleteURL = url_route + '/' + event.target.parentElement.id;
        axios.delete(deleteURL)
            .then( (result)=>{
                studentsList.removeChild(event.target.parentElement);
                
                //Changing the student count label value
                let countLabel = document.getElementById('studentCount').innerHTML;
                countLabel = parseInt(countLabel) - 1;
                document.getElementById('studentCount').innerHTML = countLabel;
            })
            .catch( (error)=>{
                console.log(error)
            });        
    }

    newStudent.appendChild(deleteBtn)
    newStudent.appendChild(editBtn)
    studentsList.appendChild(newStudent)
}

function handleFormSubmit(event)
{
    event.preventDefault();
    
    const studentDetails = {
        name : event.target.name.value,
        mobile : event.target.phone.value,
        address : event.target.address.value
    }

    axios.post(url_route, studentDetails)
        .then( (result)=>{
            //Changing count label value
            let countLabel = document.getElementById('studentCount').innerHTML;
            countLabel = parseInt(countLabel) + 1;
            document.getElementById('studentCount').innerHTML = countLabel;

            showStudent(result.data); //passing student details long with ID received from API
        })
        .catch((error)=>{console.log(error)});

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    console.log
}