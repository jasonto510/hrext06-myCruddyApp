
$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){

//setItem is the method used for adding some data, takes in your key and value
    localStorage.setItem('inputFieldValue', $('.text-entry').val());
    var myItemInStorage = localStorage.getItem('inputFieldValue');
    console.log('myItemInStorage', myItemInStorage);
    localStorage.setItem("Hi", "You");
    var artist = localStorage.getItem("Hi")
    console.log(artist)

    // localStorage.setItem("inputFieldValue",  $('.text-entry').val())
    // var data = localStorage.getItem("inputFieldValue")
    
    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });


  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

  //Delete all items from local storage when clicked 
  $('.btn-delete-all').on('click', function(){
    localStorage.clear();
  });


  //
});