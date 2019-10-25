$(document).ready(function(){
console.log("hi");

    var name,password;
    $("#submit").click(function(){
        var id= $("#name").val();
        // console.log("/////////",name);
        var pass=$("#password").val();
        console.log("$$$$$$$$$$$$$", id, pass);
        $.post("/signup",{name: id, password:pass } ,function(data){
            // console.log("oooooooooo");
      //    alert( "Data Loaded: " + data );
      //   }).fail(function(){
      // console.log("error");

        // console.log("@@@@@@@@@@@@@@@@@");
        localStorage.setItem('user',id);
        });
})})