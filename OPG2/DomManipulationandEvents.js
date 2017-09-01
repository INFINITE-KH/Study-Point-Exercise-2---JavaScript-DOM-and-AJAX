// 1) Simple DOM manipulation and Event handling
/*document.getElementById("colorChange").addEventListener("click", function(){
    document.getElementById("d1").style.backgroundColor = "#EEE";
    document.getElementById("d2").style.backgroundColor = "#AAB";
    document.getElementById("d3").style.backgroundColor = "#CED";
});

// 2) Event Bubbling and event arguments
document.getElementById("click1").addEventListener("click", function(){      
    console.log("Hi from div1");
});

    document.getElementById("click2").addEventListener("click", function(){
    console.log("Hi from div2");
});

document.getElementById("boss").addEventListener("click", function(event){
    console.log(this.id);
    var element = event.target;
    console.log(element.id);
});

document.getElementById("boss").addEventListener("click", function(event){
    var par = document.getElementById("status");
    var element = event.target;
    par.innerText = this.id+ " " +element.id;
});
*/
function firstUpperCase(index){
    var text = index;
    return text.charAt(0).toUpperCase() + text.substring(1, index.length);
}

function toUpper(string){
    return string.toUpperCase();
}

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

girls.push("Lone", "Gitte");
boys.unshift("Hans", "Kurt");
boys.shift("");
girls.pop("");
boys.splice(3, 1);
girls.splice(0, 1);

var mix = boys.concat(girls); // Slår to array sammen med hinanden
var startUpper = mix.map(firstUpperCase);
startUpper.reverse(); // Arrayet bliver vedt om(Rækkefølgen af index bliver byttet om)
startUpper.sort(); // Sortere array

var all = startUpper.join(', '); // Seperare værdierne i arrayet med , og mellemrum til en string
//var all = mix.join(" - ");

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

window.onload = function(){
    var liste = document.createElement('ul');
    liste.id = "liste";
    for(var i = 0; i<startUpper.length; i++){
        var item = document.createElement('li');
        var name = document.createElement('p');
        name.innerText = startUpper[i];
        item.appendChild(name);
        liste.appendChild(item);
        document.getElementById("boss").appendChild(liste);
    };
    createTableFromArray(cars);
}

document.getElementById("submit").addEventListener("click", function(){
    var nameString = document.getElementById("name").value;
    var nameListItem = document.createElement('li');
    var nameItem = document.createElement('p');
    nameItem.innerText = nameString;
    nameListItem.appendChild(nameItem);
    startUpper.push(nameString);
    document.getElementById("liste").appendChild(nameListItem);
});

document.getElementById("search").addEventListener("click", function(){
    cars = [
        { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
        { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
        { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
        { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
        { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
      ];
    var newArray = {};
    for(var i = 0; i < cars.length; i++){
        if(cars[i].price <= document.getElementById("price").value){
            newArray.push(cars[i]);
        }
    }
    createTableFromArray(newArray);
});

document.getElementById("removeFirst").addEventListener("click", function(){
    document.getElementById("liste").firstChild.remove();
});

document.getElementById("removeLast").addEventListener("click", function(){
    document.getElementById("liste").lastChild.remove();
});

function createTableFromArrays(inputArray){
    var table = document.createElement('table').classList.add("table");
    document.body.appendChild(table);
    var thead = table.appendChild('thead');
    var tr = thead.appendChild('tr');
    tr.appendChild('tr').innerText = "Id";
    tr.appendChild('tr').innerText = "Year";
    tr.appendChild('tr').innerText = "Make";
    tr.appendChild('tr').innerText = "Model";
    tr.appendChild('tr').innerText = "Price";
    var tbody = table.appendChild('tbody').id = "body";
    for(var i = 0; i < inputArray.length; i++){
        var trBody = tbody.appendChild('tr');
        trBody.appendChild('p').innerText = inputArray[i].id;
        trBody.appendChild('p').innerText = inputArray[i].year;
        trBody.appendChild('p').innerText = inputArray[i].make;
        trBody.appendChild('p').innerText = inputArray[i].model;
        trBody.appendChild('p').innerText = inputArray[i].price;
    }
    document.body.appendChild(table);
};
function createTableFromArray(inputArray){
    var myTable= "<table class=\"table\"><thead><tr><td style='width: 100px; color: red;'>Id</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Year</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Make</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Model</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Price</td></tr></thead>";

    for(var i = 0; i < inputArray.length; i++){
    myTable+="<tr><td style='width: 100px; >"+ inputArray[i].id +"</td>";
    myTable+="<td style='width: 100px; >"+ inputArray[i].year +"</td>";
    myTable+="<td style='width: 100px; >"+ inputArray[i].make +"</td>";
    myTable+="<td style='width: 100px; >"+ inputArray[i].model +"</td>";
    myTable+="<td style='width: 100px; >"+ inputArray[i].price +"</td></tr>";
    }
    document.getElementById("container").innerHTML += myTable;
};