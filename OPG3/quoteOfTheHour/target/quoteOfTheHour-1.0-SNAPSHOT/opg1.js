//window.onload = function(){
//    document.getElementById("ha").addEventListener("click", myFun);
//};

//window.setInterval(function(){
//    myFun();
//}, 3600000);

//function myFun(){
//    var update = document.getElementById("update");
//            update.innerHTML = "blabalblaab";
//            var url = "https://jokes-plaul.rhcloud.com/api/joke ";
//            var conf = {method: 'get'};
//            var promise = fetch(url, conf);
//            promise.then(function(response){
//                return response.json();
//            }).then(function(text){
//                console.log(text);
//                update.innerHTML = text.id+"\n"+text.joke+"\n"+text.reference;
//            });
//};

window.onload = function(){
    document.getElementById("ha").addEventListener("click", myFun);
};

function myFun(){
    var update = document.getElementById("update");
            update.innerHTML = "blabalblaab";
            var url = "http://localhost:8080/quoteOfTheHour/randomQuote";
            var conf = {method: 'get'};
            var promise = fetch(url, conf);
            promise.then(function(response){
                return response.text();
            }).then(function(text){
                console.log(text);
                update.innerHTML = text;
            });
};