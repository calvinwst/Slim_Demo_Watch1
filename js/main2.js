var rootURL2 = "http://localhost/Slim_Demo_Watch1/api/users";
console.log('url connect');

var currentUsers;

$(document).ready(function(){
	  $('#btnDelete2').hide();
    $('#btnUpdate2').hide();

    $(document).on("click", '#userList a', function(){findById2(this.id);})
    $(document).on("click", '#btnDelete2', function(){deleteUsers();});
    $(document).on("click", '#btnUpdate2', function(){updateUser();});
    $(document).on("click", '#btnSave2', function(){addUser();});

  findAll2();
});

//Call the Get Method of ypur api with the root of url
var findAll2=function(){
  console.log('findAll2');
  $.ajax({
    type: 'GET',
    url: rootURL2,
    dataType: "json",
    success: renderlist2
  });
};

//Find ID using Get Method
var findById2 = function(id){
  console.log('findbyID: ' + id)
  $.ajax({
    type:'GET',
    url: rootURL2 + '/' + id,
    dataType: "json",
    success: function(data2){
      $('#btnDelete2').show();
      $('#btnUpdate2').show();
      $('#btnSave2').hide();
      console.log('findBySucess: ' + data2.FirstName);
      currentUsers = data2;
      renderDetails2(currentUsers);
    }
  });
};
//Call Put Method to update usedetail by user id
var updateUser = function (data2){
  console.log('Update User');
  alert(rootURL + '/' + $('#userid').val());
  $.ajax({
  
    type: 'PUT',
    contentType: 'application/json',
    url : rootURL2 + '/' + $('#userid').val(),
    dataType: "json",
    data : FromToJson2(),
    success: function(data2, textStatus, jqXHR){
      alert('User update successfully');
        $('#btnDelete2').show();
        $('#btnSave2').hide();
        $('#userid').val(data2.idUserID);
        findAll2();
    },
    error : function(data2, textStatus, jqXHR){
      alert('Update Watch Error: ' + textStatus);
      findAll2();
    }
    });
  };

  //POST Method is used to add user into the database
  var addUser = function(data){
    console.log('Add Watch');
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url : rootURL2,
      dataType: "json",
      data : FromToJson2(),
      success: function(data2, textStatus, jqXHR){
        alert('User added successfully');
          $('#btnDelete2').show();
          $('#userid').val(data2.idUserID);
          findAll2();
      },
      error :  function(data, textStatus, jqXHR){
        alert('addUser error: ' + textStatus);
      }

    })
  }

//Call Delete Method of your REST API 
var deleteUsers = function(){
  console.log('Delete Wacth');
  alert(rootURL2 + '/' + $('#userid').val());
  $.ajax({
    type:'DELETE',
    contentType: 'application/json',
    url :rootURL2 + '/' + $('#userid').val(),
    success : function(data, textStatus, jqXHR){
      alert('User deleted successfully');
    },
    error : function(data, textStatus, jqXHR){
      alert('deleteUser error: ' + textStatus);
			findAll();
    }
  });
};

//updates the DOM to append the returned values and create your list of entries
var renderlist2 = function(data){
  var list2 = data.users;
  $('#userList li').remove();
    $.each(list2, function(index, users) {
      $('#userList').append('<li><a href="#" class="list-group-item list-group-item-action" id="'  + users.idUserID + '">'+users.LastName+'</a></li>');
      $('#table_body2').append('<tr><td>'+users.idUserID+'</td><td>'+
          users.FirstName+'</td><td>'+users.LastName+'</td><td>'+users.Address+
          '</td><td>'+users.City+'</td></tr>');
  });
  
    $('#table_id2').DataTable();
}; 

var renderDetails2 = function(users){
	$('#userid').val(users.idUserID);
	$('#firstname').val(users.FirstName);
	$('#lastname').val(users.LastName);
	$('#address').val(users.Address);
  $('#city').val(users.City);
};

var FromToJson2 = function(){
  var user_id = $('#userid').val();
  return JSON.stringify({
    "idUserID" : user_id = "" ? null : user_id,
    "LastName" : $('#lastname').val(),
    "FirstName" : $('#firstname').val(),
    "Address" : $('#address').val(),
    "City" : $('#city').val(),
  });
};
