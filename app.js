
var array = [];

$(document).ready(function(){
  // console.log('jQuery loaded');

  //These buttons are going to be shown after btn-name is clicked
  $('.btn-delete').hide()
  $('.contactMe').hide()
  $('.contact').hide()
  $('.image-entry').hide()
  $('.upload-image').hide()
  $('.delete-image').hide()
  $('.image-description').hide()
  $('.headerAbout').hide()
  $('.aboutMe').hide() 
  $('.submitAboutMe').hide()     
  $('.editAboutMe').hide()
  // write to local storage from input when button save clicked



  //Going to assign contact info show the buttons
  $('.btn-name').on('click', function(){
    $('.submitAboutMe').show()         
    $('.headerAbout').show()    
    $('.contactMe').show()    
    $('.btn-delete').show()  
    $('.contact').show()
    $('.btn-name').hide()
    $('.name').hide()
    $('.phone-number').hide()
    $('.eMail').hide()
    $('.aboutMe').show()        
    var user = sessionStorage.getItem('inputFieldValue');
    user = user ? user.split(':') : []
    var userName =  $('.name').val()   
    var userNumber = $('.phone-number').val()
    var userEmail =  $('.eMail').val()
    user.push(userName, userNumber, userEmail)
    // user.push(userNumber)
    // user.push(userEmail)
    user = user.join("~ ")
    sessionStorage.setItem('inputFieldValue', user)
    //Prints it out on the screen
    var myItemInStorage = sessionStorage.getItem('inputFieldValue');
    // console.log('user' , user);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??
    //How do I create a new line 
    // $('.list-display-field').append("hi")
  });


  // delete from local storage when delete button clicked
  //When the delete button is clicked it erases the previous data and asks the user for a new input
  $('.btn-delete').on('click', function(){
    $('.contactMe').hide()    
    $('.btn-name').show()
    $('.name').show()
    $('.phone-number').show()
    $('.eMail').show()   
    $('.aboutMe').show()        
    sessionStorage.removeItem('inputFieldValue'); //Only removes the last item in local storage with the given key
  });

  $('.submitAboutMe').on('click', function(){
    var about = $('.aboutMe').val()    
    $('.aboutmeLeft').text(about)
    $('.aboutMe').hide() 
    $('.submitAboutMe').hide()
    $('.editAboutMe').show()
    $('.image-entry').show()
    $('.upload-image').show()
    $('.delete-image').show()    
    $('.image-description').show()    
  })

  $('.editAboutMe').on('click', function(){
    $('.submitAboutMe').show()     
    $('.aboutMe').show() 

  })


//Let's upload the image and add the text underneath
  $('.upload-image').on('click', function(){
    $('.images').show()
    var image = $(".image-entry").val()
    var imagetext = $('.image-description').val()
    console.log(imagetext)
    $('.images').append('<img src="' + image + '" height="150" width="200">')
     // $('.images').append('<img src="https://www.what-dog.net/Images/faces2/scroll001.jpg">')
    $('.images').append(''+ imagetext )
  });


//Need to work on this one 
  $('.delete-image').on('click', function(){
    console.log("hi");
     $(".images").remove(); //Kind of iffy on this one
  });

//Fades out the image if it's clicked 
  $(".images").on('click', function(){
    console.log("did this work or not?")
    $('.images').hide('fade')
  })

   

  var getCurrentTime = function(){
    var d = new Date()
    return d;
  }
  var displayTime = function(){
    $(".time").append('<div style = "color: black">' +  getCurrentTime() + '</div>')
  }()
  //Delete all items from local storage when clicked 
  // $('.btn-delete-all').on('click', function(){
  //   localStorage.clear();
  // });


  //
});