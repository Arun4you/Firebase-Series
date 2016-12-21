// login popup loads when the page starts loading

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

  	$(".login-cover").hide();
  	 var dialog = document.querySelector('#login-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
      dialog.close();

  } else {
    // No user is signed in.
    $(".login-cover").show();

 	var dialog = document.querySelector('#login-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
      dialog.showModal();
      $("#loginProgress").hide();
  	  $("#loginBtn").show();
       
}

});

//login function

$("#loginBtn").click(
		function(){
			var email = $("#loginEmail").val();
			var password = $("#loginPassword").val();

			if(email != "" && password != ""){
				$("#loginProgress").show();
				$("#loginBtn").hide();
				firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
 				 // Handle Errors here.
 				 $("#loadError").show().text(error.message);
  				$("#loginProgress").hide();
  				$("#loginBtn").show();

});
			}
		}
);

//logout function

$("#logoutBtn").click(
	function(){
		firebase.auth().signOut().then(function() {
	}
  // Sign-out successful. 
, function(error) {
  // An error happened.
})
	});
		




