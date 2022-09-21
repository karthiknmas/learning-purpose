let selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    const formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  const formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertNewRecord(data) {
  const table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
  selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
// function validate() {
//   isValid = true;
//   if (
//     (document.myForm.fullName.value == "",
//     document.myForm.empCode.value == "",
//     document.myForm.salary.value == "",
//     document.myForm.city.value == ""
//    )
//   ){
//     isValid = false;
//     document.getElementById("fullNameValidationError").classList.remove("hide");
//     document.getElementById("empCodeValidationError").classList.remove("hide");
//     document.getElementById("salaryValidationError").classList.remove("hide");
//     document.getElementById("cityValidationError").classList.remove("hide");
//   }
//   else {
//     isValid = true;
//     if (
//       !document
//         .getElementById("fullNameValidationError")
//         .classList.contains("hide")
//     )
//       document.getElementById("fullNameValidationError").classList.add("hide");
//     document.getElementById("empCodeValidationError").classList.add("hide");
//     document.getElementById("salaryValidationError").classList.add("hide");
//     document.getElementById("cityValidationError").classList.add("hide");
//   }
//   return isValid;
// }

function CloseRequired() {
  // const temp = document.getElementById("empCode").value;
  // if(temp == "" || temp == null)
  document.getElementById("empCodeValidationError").style.display = "none";
}
function CloseRequired1() {
  document.getElementById("fullNameValidationError").style.display = "none";
}
function CloseRequired2() {
  document.getElementById("salaryValidationError").style.display = "none";
}
function CloseRequired3() {
  document.getElementById("cityValidationError").style.display = "none";
}
function validate() {
  let errors = "";
  const fullName = document.getElementById("fullName");
  const empCode = document.getElementById("empCode");
  const salary = document.getElementById("salary");
  const city = document.getElementById("city");

  if (fullName.value == "") {
    fullName.focus();
    errors = errors + " This ";
  }
  if (empCode.value == "") {
    empCode.focus();
    errors = errors + " Feild ";
  }
  if (salary.value == "") {
    salary.focus();
    errors = errors + " is ";
  }
  if (city.value == "") {
    city.focus();
    errors = errors + " Required ";
  }
  if (errors.length > 0) {
    // document.getElementById("errortitle").innerHTML = "Errors:";
    document.getElementById("fullNameValidationError").innerHTML = " " + errors;
    document.getElementById("empCodeValidationError").innerHTML = " " + errors;
    document.getElementById("salaryValidationError").innerHTML = " " + errors;
    document.getElementById("cityValidationError").innerHTML = " " + errors;
    return false;
  } else {
    return true;
  }
}
