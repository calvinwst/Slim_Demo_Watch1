//the root url for the restful api
var rootURL = "http://localhost/Slim_Demo_Watch1/api/watches";
console.log('url connected');

var currentWatch;

//When the DOM is ready 
$(document).ready(function(){

    //Show Alert to make sure jquery code is being accessed

  	$('#btnDelete').hide();
    $('#btnUpdate').hide();

    //event listner
    $(document).on("click", '#watchList a', function(){findById(this.id);})
    $(document).on("click", '#btnAdd', function(){newWatch();});
    $(document).on("click", '#btnUpdate', function(){updateWatch();});
    $(document).on("click", '#btnDelete', function(){deleteWatch();});
    $(document).on("click", '#btnSave', function(){addWatch();});
    $(document).on("click", '#btnSearch', function(){findByName($('#searchKey').val());});
    


    //call the findAll
    findAll();
});


//Call the Get Method of ypur api with the root of url
var findAll=function(){
  console.log('findAll');
  $.ajax({
    type: 'GET',
    url: rootURL,
    dataType: "json",
    success: renderlist
  });
};
//Calls the POST method of your rest API. Uses the formToJSON to format it for insert
var addWatch = function(data){
  console.log('Add Watch');
  $.ajax({
    type : 'POST',
    contentType: 'application/json',
    url : rootURL,
    dataType: "json",
    data : FromToJson(),
    success : function(data, textStatus, jqXHR){
      alert('Watch created successfully');
      console.log('Wathc add successfully');
      $('#btnDelete').show();
      $('#refrence').val(data.refrence_no);
      findAll();
    },
    error :  function(data, textStatus, jqXHR){
      alert('addWatch error: ' + textStatus);
    }
  });
};

//Calls the DELETE method of your rest API. Passes in the ID of the selected wine
var deleteWatch = function(){
  console.log('Delete Watch');
  alert(rootURL + '/' +$('#refrence').val());
  $.ajax({
    type : 'DELETE',
    contentType: 'application/json',
    url : rootURL + '/' + $('#refrence').val(),
    success : function(data, textStatus, jqXHR){
      alert('Watch deleted successfully');
      console.log('Delete successfully')
    },

    error : function(data, textStatus, jqXHR){
      alert('deleteWacth error: ' + textStatus);
			findAll();
    }
  });
};

//call the PUT method of your rest api
var updateWatch = function (data){
console.log('Update Watch');
alert(rootURL + '/' + $('#refrence').val());
$.ajax({

  type: 'PUT',
  contentType: 'application/json',
  url : rootURL+ '/' + $('#refrence').val(),
  dataType: "json",
  data : FromToJson(),
  success: function(data, textStatus, jqXHR){
    alert('Watch update successfully');
      $('#btnDelete').show();
      $('#btnSave').hide();
      $('#refrence').val(data.refrence_no);
      findAll();
  },
  error : function(data, textStatus, jqXHR){
    alert('Update Watch Error: ' + textStatus);
    findAll();
  }

  });
};

//  Add new watch byb clear up the input form 
var newWatch=function () {
  alert('Watch created successfully');
	$('#btnDelete').hide();
  $('#btnUpdate').hide();
	currentWatch = {};
  renderDetails(currentWatch);
};

//updates the DOM to append the returned values and create your list of entries
var renderlist = function(data){
  var list  = data.watches;
  $('#watchList li').remove();
    $.each(list, function(index, watch) {
      $('#watchList').append('<li><a href="#" class="list-group-item list-group-item-action" id="'  + watch.refrence_no + '">'+watch.model+'</a></li>');
      $('#table_body').append('<tr><td>'+watch.model+'</td><td>'+
          watch.model_year+'</td><td>'+watch.style+'</td><td>'+watch.manufacturer+
          '</td><td id="'+watch.refrence_no+'"><a href="#myModal">More Info</a></td></tr>');
  });
   
    $('#table_id').DataTable();
}; 
//Call Get method of your rest API. to find by model of watches
var findByName = function(searchKey){
  console.log('FindByName: ' + searchKey);
  alert(rootURL + '/serach/' + searchKey);
  $.ajax({
		type: 'GET',
		url: rootURL + '/search/' +searchKey,
		dataType : "json",
		success : function(data){
			$('#btnDelete').show();
      $('#btnUpdate').show();
      $('#btnSave').hide();

			currentWatch = data;
			renderDetails(currentWatch);
			
		}
	});
};

var search = function(searchKey){
	if(searchKey == ''){
		findAll();
	}
	else{
		findByName(searchKey);
	}
};

var findById= function(id) {
	console.log('findById: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();//Show the Delete button for an item
      $('#btnUpdate').show();
      $('#btnSave').hide();


			console.log('findById success: ' + data.model);
			currentWatch = data;
			renderDetails(currentWatch);
		}
	});
};


//populates the dield with the assciatoed items
var renderDetails=function(watch) {
	$('#refrence').val(watch.refrence_no);
	$('#model').val(watch.model);
	$('#year').val(watch.model_year);
	$('#style').val(watch.style);
	$('#manufacturer').val(watch.manufacturer);
	$('#country').val(watch.country);
	$('#movement').val(watch.movement_types);
	$('#gender').val(watch.gender);
  $('#diameter').val(watch.diameter);
	$('#price').val(watch.price);
  var htmlStr='<h3>Manufacture:</h3>'+'<P>'+watch.manufacturer+'</P>'+'<h3>Style:</h3>'+'<P>'+watch.style+'</P>'+'<h3>Price:</h3>'+'<P>'+watch.price+'<h3>'+'<h3>Diameter:</h3>' + watch.diameter+'<BR><h3>Gender:</h3>'+ watch.gender+'<BR><HR>';
  $("#contents").html(htmlStr);
  $("#details_content").html(htmlStr);
  $('#myModal').modal('show');
};


// Helper function to serialize all the form fields into a JSON string

var FromToJson= function(){
  var watch_refrence_no = $('#refrence').val();
  return JSON.stringify({
    "refrence_no" : watch_refrence_no = "" ? null : watch_refrence_no,
    "model" : $('#model').val(),
    "model_year" : $("#year").val(),
    "style" : $('#style').val(),
    "manufacturer" : $('#manufacturer').val(),
    "country" : $('#country').val(),
    "movement_types" :$('#movement').val(),
    "gender" : $('#gender').val(),
    "diameter" : $('#diameter').val(),
    "price" : $('#price').val(),
  });
};


//Retrieve the wine list when the DOM is ready
$(document).ready(function(){
	findAll();
         $(document).on("click", '#table_body td', function(){findById(this.id);});
      
});


