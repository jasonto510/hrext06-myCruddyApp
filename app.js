
var array = [];

$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){

    //saves iti n local console.
    var user = localStorage.getItem('inputFieldValue');
    user = user ? user.split(',') : []
    var userText =  $('.text-entry').val()    
    user.push(userText);
    localStorage.setItem('inputFieldValue', user.toString())

    //Prints it out on the screen
    var myItemInStorage = localStorage.getItem('inputFieldValue');
    // console.log('user', user);

    // display the value here
    $('.text-entry').val("")    
    $('.list-display-field').text(myItemInStorage); // ??

    //How do I create a new line 
    // $('.list-display-field').append("hi")
  });


  // delete from local storage when delete button clicked
  //When the delete button is clicked it erases the previous data and asks the user for a new input
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue'); //Only removes the last item in local storage with the given key
    $('.text-entry').val("Please enter your contact information")
    $('.list-display-field').text("Please enter your contact information")
  });

  //Delete all items from local storage when clicked 
  // $('.btn-delete-all').on('click', function(){
  //   localStorage.clear();
  // });


  //
});