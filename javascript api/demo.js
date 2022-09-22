function GetTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://localhost:3000/user');
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
      trHTML = '';
      const Details = data;
      console.log(data, 'data');
      for (let detail of Details) {
        trHTML += `<tr>`;
        trHTML += `<td> ${detail._id} </td>`;
        trHTML += `<td> ${detail.first_name} </td>`;
        trHTML += `<td> ${detail.last_name} </td>`;
        trHTML += `<td> ${detail.email} </td>`;
        trHTML += `<td> ${detail.mobile} </td>`;
        trHTML += `<td><button class="btn1" type="button" onclick="userEdit('${detail['_id']}')">Edit</button>&nbsp;&nbsp;`;
        trHTML += `<button class="btn2" type="button" onclick="userDelete('${detail['_id']}')">Del</button></td>`;
        trHTML += `</tr>`;
      }
      const type = document.getElementById('data');
      if (type != null) {
        details = type.innerHTML = trHTML;
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
        first_name = element.value;
      } else {
        first_name = null;
      }
      const element1 = document.getElementById('lname');
      if (element1 != null) {
        last_name = element1.value;
      } else {
        last_name = null;
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
      xhttp.open('POST', 'http://localhost:3000/user/add');
      xhttp.setRequestHeader('Content-Type', 'application/json');
      xhttp.send(
        JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          email: email,
          mobile: mobile,
        })
      );
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
          objects = JSON.parse(this.responseText);
          alert('Successfully Created');

          // console.log(this.responseText, 'post');
        }
      };
    });
  }
}
userCreate();

function userDelete(_id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', 'http://localhost:3000/user/' + _id);
  xhttp.send(
    JSON.stringify({
      _id: _id,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      data = JSON.parse(xhttp.responseText);
      alert('Deleted successfully');
      // location.reload();
    }
  };
}

function userEdit(_id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://localhost:3000/user/' + _id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const data = JSON.parse(xhttp.responseText);
      console.log(data);
      setFormData( data._id,data.first_name, data.last_name, data.email, data.mobile);
      console.log(data, 'update');
    }
  };
}
function setFormData(_id,first_name, last_name, email, mobile) {
  document.getElementById('id').value = _id;
  document.getElementById('fname').value = first_name;
  document.getElementById('lname').value = last_name;
  document.getElementById('email').value = email;
  document.getElementById('mobile').value = mobile;
  // clearFormData();
}
function userUpdate(_id) {
  const id = document.getElementById('id').value;
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  console.log(id,fname, lname, email, mobile, 'update');
  const xhttp = new XMLHttpRequest();
  xhttp.open('PUT', 'http://localhost:3000/user/update/' + id);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(
    JSON.stringify({
      first_name: fname,              
      last_name: lname,
      email: email,
      mobile: mobile,
    })
  );
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      data = JSON.parse(xhttp.responseText);
    }
  };
}
