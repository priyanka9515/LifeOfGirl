$(document).ready(function(){
console.log("hi");

    var name,password;
    $("#submit").click(function(){
        id= $("#name").val();
        // console.log("/////////",name);
        pass=$("#password").val();
        console.log("$$$$$$$$$$$$$", id, pass)
        $.post("/signup", datatype:'json', {name: "lol", password: "tyler1"} ,function(data){
         alert( "Data Loaded: " + data );
        }).fail(function(){
      console.log("error");

        // console.log("@@@@@@@@@@@@@@@@@");
        localStorage.setItem('user',id);
        });
})})