function GetTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://localhost:3000/user');
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
      // console.log(this.responseText);
      trHTML = '';
      const Details = data;
      console.log(data, 'data');
      for (let detail of Details) {
        trHTML += `<tr>`;
        trHTML += `<td> ${detail[`_id`]} </td>`;
        trHTML += `<td> ${detail[`first_name`]} </td>`;
        trHTML += `<td> ${detail[`last_name`]} </td>`;
        trHTML += `<td> ${detail[`email`]} </td>`;
        trHTML += `<td> ${detail[`mobile`]} </td>`;
        trHTML += `<td><button class="btn1" type="button" (${
          detail[`_id`]
        })>Edit</button>&nbsp;&nbsp;`;
        trHTML += `<button class="btn2" type="button" ( ${
          detail[`_id`]
        })>Del</button></td>`;
        trHTML += `</tr>`;
      }
     const type = document.getElementById('data');
     if (type != null) {
      details = type.innerHTML= trHTML;
    } else {
      details = null;
    }
    }
  };
}
GetTable();

function userCreate() {
  const user = document.getElementById('myForm');
  if (user) {
    user.addEventListener('submit', function (event) {
      event.preventDefault();

      const element = document.getElementById('fname');
      if (element != null) {
        fname = element.value;
      } else {
        fname = null;
      }
      const element1 = document.getElementById('lname');
      if (element1 != null) {
        lname = element1.value;
      } else {
        lname = null;
      }
      const element2 = document.getElementById('email');
      if (element2 != null) {
        email = element2.value;
      } else {
        email = null;
      }
      const element3 = document.getElementById('mobile');
      if (element3 != null) {
        mobile = element3.value;
      } else {
        mobile = null;
      }
      const xhttp = new XMLHttpRequest();
      xhttp.open('POST', 'https://dummy.restapiexample.com/api/v1/create');
      xhttp.setRequestHeader('Content-Type', 'application/json');
      xhttp.send(
        JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
        })
      );
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
          const objects = JSON.parse(this.responseText);
          console.log(this.responseText, 'post');
        }
      };
    });
  }
}
userCreate();
