// Write Javascript Here
const baseUrl = "http://localhost:3000/users";
const headers = {
    'Content-type': 'application/json; charset=UTF-8'
};



getUsersRequest().then(users =>{
    //This function has been implemented already for you
    const tableEl = document.getElementById("table");
    for (const user of users) {
        tableEl.appendChild(createTableRow(user))
    }
})

function addNewUser(){
    var list = document.getElementById('users');
    var id =document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(id + ' ' + name));
    list.appendChild(entry);
    return false;
}



function editUser(id, userName){
    this.Update = function (oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
        var tab = document.getElementById('users').rows[activeRow];

        var td = tab.getElementsByTagName("td")[i];
        var ele = document.createElement('input');  
        ele.setAttribute('type', 'text');
        ele.setAttribute('value', td.innerText);
        td.innerText = '';
        td.appendChild(ele);

    };

}

function deleteUser(id){
    this.Delete = function (oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
        this.users.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
        this.createTableRow();

}
}




//CRUD HELPER METHODS
function createUserRequest(user){
    return fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


function  getUsersRequest()  {
    return fetch(baseUrl, {
        method: 'GET',
    }).then(response => response.json())
}

function  deleteUserRequest(id)  {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}


function updateUserRequest(user){
    return fetch(`${baseUrl}/${user.id}`, {
        method: 'PATCH',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


//HELPER METHODS
function createTableRow(user){
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(${user.id})">Delete</a></td>`;
    return tr;
}
