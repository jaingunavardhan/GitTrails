//API Endpoint link with URL
const url_route = 'https://crudcrud.com/api/5319ef6ab5404de3815ebc60626d2432/StudentsList'

showAllStudents();
//Everytime we reload the page, this function will be called to show all users
async function showAllStudents()
{
    try
    {
        const axios_get = await axios.get(url_route)    //Get all entries from API
        const studentsInAPI = axios_get.data; //gives array of objects(entries) in API
        const studentsCountAPI = studentsInAPI.length; //Getting length of objects(entries)
        //Changing the value of label "Total Students" using its ID
        document.getElementById('studentCount').innerHTML=studentsCountAPI;
        for(let i=0; i<studentsCountAPI; i++)   //Iterating through objects(entries)
        {
            showStudent(studentsInAPI[i]);  //Displaying each object(entry) by calling func
        }
    }
    catch(error)
    {
        console.log(error)
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
        deleteBtn.onclick = async (event)=>{
            const deleteURL = url_route + '/' + event.target.parentElement.id;
            try
            {
                const axios_delete = await axios.delete(deleteURL)
                studentsList.removeChild(event.target.parentElement);

                //Changing the student count label value
                let countLabel = document.getElementById('studentCount').innerHTML;
                countLabel = parseInt(countLabel) - 1;
                document.getElementById('studentCount').innerHTML = countLabel;            
            }
            catch(error)
            {
                console.log(error);
            }
        }

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = async (event)=>{
        //below gives text content of parent without its childrens text
        const textNode = event.target.parentElement.firstChild;
        const text = textNode.textContent.split('-');
        document.getElementById('name').value = text[0];
        document.getElementById('phone').value = text[1];
        document.getElementById('address').value = text[2];

        const deleteURL = url_route + '/' + event.target.parentElement.id;
        try
        {
            const axios_delete = await axios.delete(deleteURL)
                studentsList.removeChild(event.target.parentElement);
                
                //Changing the student count label value
                let countLabel = document.getElementById('studentCount').innerHTML;
                countLabel = parseInt(countLabel) - 1;
                document.getElementById('studentCount').innerHTML = countLabel;
        }
        catch(error)
        {
            console.log(error);
        }
            
    }

    newStudent.appendChild(deleteBtn)
    newStudent.appendChild(editBtn)
    studentsList.appendChild(newStudent)  
}

async function handleFormSubmit(event)
{
    event.preventDefault();
    
    const studentDetails = {
        name : event.target.name.value,
        mobile : event.target.phone.value,
        address : event.target.address.value
    }

    try
    {
        const axios_post = await axios.post(url_route, studentDetails)
            //Changing count label value
            let countLabel = document.getElementById('studentCount').innerHTML;
            countLabel = parseInt(countLabel) + 1;
            document.getElementById('studentCount').innerHTML = countLabel;

            showStudent(axios_post.data); //passing student details along with ID received from API
    }
    catch(error)
    {
        console.log(error);
    }    
    

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    console.log
}