
var array = [];

$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){

    // var myItemInStorage = localStorage.getItem('inputFieldValue');
    // console.log('myItemInStorage', myItemInStorage);

    var user = localStorage.getItem('inputFieldValue');
    user = user ? user.split(',') : []
    var userText =  $('.text-entry').val()    
    user.push(userText);
    localStorage.setItem('inputFieldValue', user.toString())




    // localStorage.setItem('inputFieldValue', $('.text-entry').val());
    // var myItemInStorage = localStorage.getItem('inputFieldValue');
    // console.log('myItemInStorage', myItemInStorage);


    //Have an array
      //If the array length is > 0 then push the numbers into the array










    // localStorage.setItem("inputFieldValue",  $('.text-entry').val())
    // var data = localStorage.getItem("inputFieldValue")
    // var input = $('.text-entry').val();


    // function store($('.text-entry').val(){
    //   array.push($('.text-entry').val());
    //   localStorage.setItem("inputFieldValue", JSON.stringify(array))
    // }
    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });


  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue'); //Only removes the last item in local storage with the given key
  });

  //Delete all items from local storage when clicked 
  $('.btn-delete-all').on('click', function(){
    localStorage.clear();
  });


  //
});