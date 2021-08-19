
$(document).ready(function(){
  
    $("#signup").click(function(){
        const Username = $("#Username").val();
        const email = $("#email").val();
        const Password = $("#Password").val();
        if(Username.length == ""){
            $(".Username").addClass("is-invalid");
        } else {
            $(".Username").removeClass("is-invalid");
        }

        if(email.length == ""){
            $(".email").addClass("is-invalid");
        } else {
            $(".email").removeClass("is-invalid");
        }

        if(Password.length == ""){
            $(".Password").addClass("is-invalid");
        } else {
            $(".Password").removeClass("is-invalid");
        }

        if(Username.length != "" && email.length != "" && Password.length != ""){
            $.ajax({
              type: "POST",
              url : "signup.inc.php",
              data : {"Username": Username, "email": email, 'Password': Password},
              dataType: 'JSON',
              success : function(feedback){
                  if(feedback.status === "error"){
                      $(".email").addClass("is-invalid");
                      $(".emailError").html(feedback.message);
                  } else if(feedback.status === "success"){
                       window.location = "login.php";
                  }
              }
            })
        }
    })


    // User login


    $("#login").click(function(){
        const email = $("#email").val();
        const Password = $("#Password").val();
        if(email.length == ""){
            $(".email").addClass("is-invalid");
        } else {
            $(".email").removeClass("is-invalid");
        }

        if(password.length == ""){
            $(".Password").addClass("is-invalid");
        } else {
            $(".Password").removeClass("is-invalid");
        }

     
    })

})