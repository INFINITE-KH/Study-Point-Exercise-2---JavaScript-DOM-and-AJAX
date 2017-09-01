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


console.log(all);

