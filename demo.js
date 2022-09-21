function GetTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://dummy.restapiexample.com/api/v1/employees');
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
      // console.log(this.responseText);
      trHTML = '';
      const Employees = data.data;
      console.log(Employees, 'data');
      for (let employee of Employees) {
        trHTML += `<tr>`;
        trHTML += `<td> ${employee[`id`]} </td>`;
        trHTML += `<td> ${employee[`employee_name`]} </td>`;
        trHTML += `<td> ${employee[`employee_salary`]} </td>`;
        trHTML += `<td> ${employee[`employee_age`]} </td>`;
        trHTML += `<td>${employee[`profile_image`]}</td>`;
        trHTML += `<td><button type="button" (${employee[`id`]})>Edit</button>`;
        trHTML += `<button type="button" ( ${
          employee[`id`]
        })>Del</button></td>`;
        trHTML += `</tr>`;
      }
      document.getElementById('data').innerHTML = trHTML;
    }
  };
}
GetTable();

function Create() {
  const name = document.getElementById('name').value;
  const salary = document.getElementById('salary').value;
  const age = document.getElementById('age').value;
  const image = document.getElementById('image').value;

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://dummy.restapiexample.com/api/v1/create');
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(
    JSON.stringify({
      name: name,
      salary: salary,
      age: age,
      image: image,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      const objects = JSON.parse(this.responseText);
      console.log(objects,'post');
    }
  };
}
Create();
