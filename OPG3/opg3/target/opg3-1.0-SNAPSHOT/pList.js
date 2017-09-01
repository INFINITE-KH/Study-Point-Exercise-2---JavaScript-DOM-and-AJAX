window.onload = function(){
    document.getElementById("ha").addEventListener("click", myFun);
};

function myFun(){
    var update = document.getElementById("update");
//            update.innerHTML = "blabalblaab";
            var url = "http://localhost:8080/opg3/serv";
            var conf = {method: 'get'};
            var promise = fetch(url, conf);
            promise.then(function(response){
                return response.json();
            }).then(function(text){
                console.log(text);
                var output = text;
                for(var i = 0; i < output.length; i++){
                    update.innerHTML += "Navn: "+ output[i].name+ " Age: "+ output[i].age;
                };
                
                //update.innerHTML = text;
            });
};

var createPerson = document.getElementById("createPerson");
createPerson.onclick = function(){
    
    var user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value
    };
    
    var data = (JSON.stringify(user));
    var url = "http://localhost:8080/opg3/serv";
    var conf = {method: 'post', body: data};
    fetch(url, conf);
};