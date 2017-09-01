window.onload = function(){
    document.getElementById("status").addEventListener("click", myFun);
};

function myFun(){
    var update = document.getElementById("update");
            update.innerHTML = "blabalblaab";
            var url = "http://localhost:8080/opg2/time";
            var conf = {method: 'get'};
            var promise = fetch(url, conf);
            promise.then(function(response){
                return response.json();
            }).then(function(text){
                console.log(text);
                update.innerHTML = text;
            });
};