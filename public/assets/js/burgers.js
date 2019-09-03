// On click function for adding new burgers to the page
$(document).on("click", "#submit", function(){

  // sets the new burgers name into an object
  let newBurger = {
      name: $(`#usersBurger`).val().trim()
  }

  // passes that object into a post AJAX call
  $.post("/api/burgers", newBurger, function(){
  })
  // reloads the page so that the user can see the new burger displayed
  location.reload();
})

// On click button for the time to eat buttons
$(document).on("click", ".notdevouredCard", function(){
  
  // sets user data id into a new variable
  let burgerID = $(this).attr("data-id");
  let burgerDevoured = {
      devoured: true
  }

  $.ajax({
      url: `/api/burgers/${burgerID}`,
      data: burgerDevoured,
      method: `PUT`
  }).then(function(){
      console.log(`this worked`);
  })

  location.reload();
})