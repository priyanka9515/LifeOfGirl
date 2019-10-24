document.onLoad()

console.log(hi);



    var name,password;
    // $("#submit").click(function(){
        name=$("#name").val();
        password=$("#password").val();
        console.log("$$$$$$$$$$$$$", name, password)
        $.post("/login", {name: name, password: password} ,function(data){
            console.log("AJAx");
        });
        console.log("@@@@@@@@@@@@@@@@@");
        localStorage.setItem('user',name);
    });
