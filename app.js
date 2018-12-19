
var array = [];

$(document).ready(function(){
  // console.log('jQuery loaded');


  
  // write to local storage from input when button save clicked
  $('.btn-name').on('click', function(){
    $('.btn-name').hide()
    $('.name').hide()
    $('.phone-number').hide()
    $('.eMail').hide()
    //saves iti n local console.
    var user = localStorage.getItem('inputFieldValue');
    user = user ? user.split(',') : []
    var userName =  $('.name').val()   
    var userNumber = $('.phone-number').val()
    var userEmail =  $('.eMail').val()
    user.push(userName, userNumber, userEmail)
    // user.push(userNumber)
    // user.push(userEmail)
    localStorage.setItem('inputFieldValue', user.toString())

    //Prints it out on the screen
    var myItemInStorage = localStorage.getItem('inputFieldValue');
    // console.log('user' , user);

    // display the value here
    $('.text-entry').val("")    
    $('.list-display-field').text(myItemInStorage); // ??

    //How do I create a new line 
    // $('.list-display-field').append("hi")
  });


  // delete from local storage when delete button clicked
  //When the delete button is clicked it erases the previous data and asks the user for a new input
  $('.btn-delete').on('click', function(){
    $('.btn-name').show()
    $('.name').show()
    $('.phone-number').show()
    $('.eMail').show()   
    localStorage.removeItem('inputFieldValue'); //Only removes the last item in local storage with the given key
    $('.text-entry').val("Please enter your contact information")
    $('.list-display-field').text("Please enter your contact information")
  });



  $('.upload-image').on('click', function(){
    console.log("did this work"); //Button works 
    // var image = document.getElementsByClassName("image-entry")
    var image = $(".image-entry").val()
    console.log(image)
    $('.images').append('<img src="' + image + '" height="150" width="200">')
     // $('.images').append('<img src="https://www.what-dog.net/Images/faces2/scroll001.jpg">')
  });

  $('.delete-image').on('click', function(){
    console.log("hi");
     $(".image-entry").remove(); //Kind of iffy on this one
  });

  //Delete all items from local storage when clicked 
  // $('.btn-delete-all').on('click', function(){
  //   localStorage.clear();
  // });


  //
});