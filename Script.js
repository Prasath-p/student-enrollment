var selectedRow = null;

let myFunction =()=>{
    event.preventDefault();
let Data =readFormData();

if(selectedRow===null){
insertData(Data);
}
else{
    updateData(Data);
}
resetForm();

}


//get data
readFormData=()=>{
let formData={};
formData["studentName"]=document.getElementById("studentName").value;
formData["Email"]=document.getElementById("Email").value;
formData["Website"]=document.getElementById("Website").value;
formData["gender"]=document.getElementById("gender").value;
formData["skills"]=document.getElementById("skills").value;
return formData;
}
//insert data into table
insertData=(data)=>{
let table = document.getElementById("table-data").getElementsByTagName("tbody")[0];
let row = table.insertRow(table.length);
let cell1 = row.insertCell(0);
cell1.innerHTML = data.studentName;

let cell2 = row.insertCell(1);
cell2.innerHTML = data.Email;

let cell3 = row.insertCell(2);
cell3.innerHTML = data.Website;

let cell4 = row.insertCell(3);
cell4.innerHTML = data.gender;

let cell5 = row.insertCell(4);
cell5.innerHTML = data.skills;

let cell6 = row.insertCell(5);
cell6.innerHTML= `<button onClick = "onEdit(this)" >Edit</button> <button onClick="onDelete(this)">Delete</button>`

}

//edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Website").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("skills").value = selectedRow.cells[4].innerHTML;
}

function updateData(formData){
    selectedRow.cells[0].innerHTML=formData.studentName;
    selectedRow.cells[1].innerHTML=formData.Email;
    selectedRow.cells[2].innerHTML=formData.Website;
    selectedRow.cells[3].innerHTML=formData.gender;
    selectedRow.cells[4].innerHTML=formData.skills;
}

//delete the data
function onDelete(td){
    if(confirm("do you want delete this data?")){
        row = td.parentElement.parentElement;
        document.getElementById("table-data").deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset the data
function resetForm(){
    document.getElementById("studentName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Website").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("skills").value = "";
}