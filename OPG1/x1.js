// -------------------- JavaScript Functions --------------------
// -------------------- OPG 1 --------------------
//Observe: no return type, no type on parameters
//function add(n1, n2){
//    return n1 +n2;
// }

// var sub = function(n1,n2){
//    return n1 - n2
//  }

  //var cb = function(n1,n2, callback){
  //  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  //};

  // -------------------- OPG2 --------------------
  //console.log(add(1,2)); //sætter værdierne i parametrerne, og bruger funktionen til t plusse
  //console.log(add); //printer [Funtion: add] - add er navnet på funktionen
  //console.log(add(1,2,3)); //printer 3 ud
  //console.log(add(1)); //printer NaN ud
  //console.log(cb(3,3,add)); //printer String ud, med tal og bruger add funktionen til at regne 3 + 3 = 6
  //console.log(cb(4,3,sub)); // printer String, og bruger sub funktionen til udregningen
  //console.log(cb(3,3,add())); //printer ikke noget ud, da de giver en error med "callback is not a function"
  //console.log(cb(3,"hh",add)); //bruger add funktionen til at pluse 3 med hh sammen, der giver 3hh

  // -------------------- OPG 3 --------------------
  //try {
  //  throw new Error('Whoops!');
  //} catch (e) {
  //  console.log(e.name + ': ' + e.message);
  //}
  //var cb = function(n1, n2, callback){
  //  return "Result from the two numbers:  "+n1+"+"+n2+"="+callback(n1,n2);
  //};

  // -------------------- OPG 4 --------------------
  //var mul = function(n1,n2){
  //  return n1*n2;
  //};

  //var cb = function(n1,n2, callback){
  //  return "Result from the two numbers: "+n1+"*"+n2+"="+callback(n1,n2);
  //};
  //console.log(cb(5,5,mul));

  // -------------------- OPG 5 --------------------
  //var divide = function(n1,n2){
  //  return n1/n2;
  //};

  //var cb = function(n1,n2, callback){
  //  return "Result from the two numbers: "+n1+"/"+n2+"="+callback(n1,n2);
  //};
  //console.log(cb(5,5,divide));

// -------------------- CallBacks (with map, filter and forEach)  --------------------
// -------------------- OPG 1 --------------------
//var nameList = ["Lars", "Jan", "Peter", "Bo", "Abdi", "Ida", "Nik", "Victor"];
//var shortList = nameList.filter(function(element){
//  return element.length <= 3
//});
//console.log(shortList);

//nameList.forEach(function(element){
//  console.log(element);
//});
//shortList.forEach(function(element1){
//  console.log(element1);
//});

// -------------------- OPG 2 --------------------
//var nameArr = nameList.map(function(elements){
//  return elements.toUpperCase();
//});
//console.log(nameArr);

// -------------------- OPG 3 --------------------
//var nameList = ["Lars", "Peter", "Jan", "Ian"];
//var ul = nameList.map(function(element){
//  return "<li>"+element+"</li>";
//});
//ul = ul.join("");
//console.log(ul);

// -------------------- OPG 4 --------------------
//var cars = [
//  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
//  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
//  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
//  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
//  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
//];

//var yearFilter = cars.filter(function(element){
//  return element.year > 1999;
//});

//var volvoFilter = cars.filter(function(element){
//  return element.make === "Volvo";
//})

//var priceFilter = cars.filter(function(element){
//  return element.price < 5000;
//});

//function year(element){
//  return element.year > 1999;
//};
//function volvo(element){
//  return element.make === "Volvo";
//};
//function price(element){
//  return element.price < 5000;
//};

//var newCars = cars.filter(year);
//var findCar = cars.filter(volvo);
//var lowerPrice = cars.filter(price);

//console.log(newCars, findCar, lowerPrice);

// -------------------- OPG 4a --------------------
//var sql = cars.map(function(element){
//  return "INSERT INTO (id, year, make, model, price) VALUES ("+element.id+", "+element.year+", "+element.make+", "+element.model+", "+element.price+"); ";
//});
//sql = sql.join("");
//console.log(sql);

// -------------------- Asynchronous Callbacks --------------------
// -------------------- OPG 1 --------------------
//Der er observeret at string med delay, vil blive eksekeveret til sidst, og strings uden delay blev eksekveret først

// -------------------- OPG 2 --------------------
//var msgPrinter = function(msg,delay){
//  setTimeout(function(){
//    console.log(msg);
//  },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");

// -------------------- this and constructor functions  --------------------
// -------------------- OPG 1 --------------------
//function Person(name){
//  this.name = name;
//  console.log("Name: "+ this.name);

//  setTimeout(function(){
//    console.log("Hi  "+this.name);  //Explain this = This referere til den kontekst vi har med at gøre lige nu. 
//  },2000);                          //Dvs. i linje 148 er der snak om en global variabel der hedder name, og på linje 151 er der snak om setTimeout.
//}

//Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this = name referere til den globale variabel name, som bliver sat i linje 148.

// -------------------- OPG 2 --------------------
//var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
//console.log("I'm global: "+ name);  //What’s different ? = Forskellen er at jeg har en instance af person der hedder p, som i person funtionen er de nye kontekst(this).

// -------------------- OPG 3 --------------------

// -------------------- OPG 4 --------------------
//var greeter = function(){
//  console.log(this.message);
//};
//var comp1 = { message: "Hello World" };
//var comp2 = { message: "Hi" };

//var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
//var g2 = greeter.bind(comp2 );//And here another “this”
//setTimeout(g1,500);
//setTimeout(g2,1000);

// -------------------- JavaScript Objects --------------------
// -------------------- OPG 1 --------------------
//var person = {name: "Kurt", age: 21, city: "Lyngby", zip: 1234};

//delete person.zip; // Fjerner en property
//person.nationality = "Danish"; // Adder en property

//for(prop in person){
//  console.log(prop,person[prop]);
//}

// -------------------- OPG 2 --------------------
function person(firstname, lastname, age){;
this.firstname = fname;
this.firstname = lname;
this.age = age2;
console.log(this.fname, this.lname, this.age2);
}

var person = ("Kurt");
console.log("Hi " + fname);

