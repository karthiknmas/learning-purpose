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
        trHTML += `<td></td>`;
        trHTML += `<td> ${detail.first_name} </td>`;
        trHTML += `<td> ${detail.last_name} </td>`;
        trHTML += `<td> ${detail.email} </td>`;
        trHTML += `<td> ${detail.mobile} </td>`;
        trHTML += `<td><a onclick="formSubmit();showButton();"><button class="btn1" id="class" type="button" onclick="userEdit('${detail['_id']}')">Edit</button></a>&nbsp;&nbsp;`;
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
      if (element.value == '') {
        document.getElementById('fnameError').classList.remove('hide');
      } else {
        if (!document.getElementById('fnameError').classList.contains('hide')) {
          document.getElementById('fnameError').classList.add('hide');
        }
      }
      const element1 = document.getElementById('lname');
      if (element1 != null) {
        last_name = element1.value;
      } else {
        last_name = null;
      }
      if (element1.value == '') {
        document.getElementById('lnameError').classList.remove('hide');
      } else {
        if (!document.getElementById('lnameError').classList.contains('hide')) {
          document.getElementById('lnameError').classList.add('hide');
        }
      }
      const element2 = document.getElementById('email');
      if (element2 != null) {
        email = element2.value;
      } else {
        email = null;
      }
      if (element2.value == '') {
        document.getElementById('emailError').classList.remove('hide');
      } else {
        if (!document.getElementById('emailError').classList.contains('hide')) {
          document.getElementById('emailError').classList.add('hide');
        }
      }
      const element3 = document.getElementById('mobile');
      if (element3 != null) {
        mobile = element3.value;
      } else {
        mobile = null;
      }
      if (element3.value == '') {
        document.getElementById('mobileError').classList.remove('hide');
      } else {
        if (
          !document.getElementById('mobileError').classList.contains('hide')
        ) {
          document.getElementById('mobileError').classList.add('hide');
        }
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
      xhttp.onreadystatechange = function (res) {
        if (
          (res.target.responseText =
            '[{"message":"\\"email\\" must be a valid email","path":["email"],"type":"string.email","context":{"value":"hjk","invalids":["hjk"],"label":"email","key":"email"}}]')
        ) {
          document.getElementById('mob').innerHTML =
            'Check Your Email/ Mobile Number';
        }
        if (res.target.status === 201) {
          document.getElementById('message').innerHTML =
            'Created successfully.';
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        } else if (res.target.status === 404) {
          document.getElementById('message1').innerHTML =
            'Note: Given Data Already Exist. Please retry';
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
    if (xhttp.readyState == 4 && xhttp.status === 200) {
      data = JSON.parse(xhttp.responseText);
      document.getElementById('message').innerHTML = 'Deleted successfully';
      setTimeout(function () {
        window.location.reload();
      }, 2000);
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
      setFormData(
        data._id,
        data.first_name,
        data.last_name,
        data.email,
        data.mobile
      );
    }
  };
}

function setFormData(_id, first_name, last_name, email, mobile) {
  document.getElementById('id').value = _id;
  document.getElementById('fname').value = first_name;
  document.getElementById('lname').value = last_name;
  document.getElementById('email').value = email;
  document.getElementById('mobile').value = mobile;
}

function userUpdate(_id) {
  const id = document.getElementById('id').value;
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

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
    if (xhttp.readyState == 4 && xhttp.status === 200) {
      data = JSON.parse(xhttp.responseText);
      document.getElementById('message').innerHTML = 'Updated successfully.';
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  };
}
function formSubmit() {
  document.getElementById('div3').style.display = 'inline-block';
}
function showButton() {
  document.getElementById('div2').style.display = 'none';
}
function hideButton() {
  if (!userUpdate()) {
    document.getElementById('message1').style.display = 'none';
    document.getElementById('mob').style.display = 'none';
  }
}
