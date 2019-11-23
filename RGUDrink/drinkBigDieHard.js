
var drinks =[];
document.getElementById("cars").onchange = listQ;
function listQ(){
	drinks.push(this.selectedIndex);
}

function runScript() {

    var weight = document.getElementById("weightin").value;
    var time = document.getElementById("timein").value;
    var radios = document.getElementsByName('gender');
var gender = "";
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  // do whatever you want with the checked radio
  gender = radios[i].value;

  // only one radio can be logically checked, don't check the rest
  break;
 }
}



//alert(drinks);
//alert(gender);
//alert(weight);


var grams

//----------------------------------------------------------------------------------------------------------------------------------------------
function drink (name,volume,alcPer) {                       // Function for converting drink's alcohol percentage to grams
    this.name = name;
    this.alcVol = volume;
    this.alcPer = alcPer;
    this.alcGrams = ((this.alcPer*10)*this.alcVol);
};
//---------------------------------------------------------------------------------------------------------------------------

const drinksArray = [];                                 // An array to contain the drinks names, alcohol percentage and amount in litres
drinksArray.push(new drink("tennents 1",4,0.568));          
drinksArray.push(new drink("tennents 0.5",4,0.284));
drinksArray.push(new drink("red wine 0.1",13,0.1));
drinksArray.push(new drink("red wine 0.2",13,0.2));
drinksArray.push(new drink("red wine 0.75",13,0.2));
drinksArray.push(new drink("white wine 0.1",13,0.1));
drinksArray.push(new drink("white wine 0.2",13,0.2));
drinksArray.push(new drink("white wine 0.75",13,0.75));
drinksArray.push(new drink("vodka",40,0.03));
drinksArray.push(new drink("gin",40,0.03));
drinksArray.push(new drink("whiskey",40,0.03));
drinksArray.push(new drink("tequilla",47,0.03));
drinksArray.push(new drink("strongbow 1",4.5,0.568));
drinksArray.push(new drink("strongbow 0.5",4.5,0.284));
drinksArray.push(new drink("kopparberg 1",40,0.568));
drinksArray.push(new drink("kopparberg 0.5",40,0.284));
drinksArray.push(new drink("kopparberg 0.33",40,0.33));
drinksArray.push(new drink("magners 1",4.5,0.568));
drinksArray.push(new drink("magners 0.5",4.5,0.284));
 
//----------------------------------------------------------------------------------------------------------------------------------------------

function drinkSearch() {                                // A function to search through the array finding whatever has been inputed
    
    for (var index = 0; index < drinksArray.length; index++) {
        if (drinksArray[index].name === searchTerm) {
            return drinksArray[index].alcGrams;
        };
    };
};
//----------------------------------------------------------------------------------------------------------------------------------------------

var userWeightKg = weight; // Variable to store inputted weight
var userWeightGrams = parseFloat(userWeightKg*1000);        // Variable to convert weight into grams

var userGender = gender;
if (userGender.toLowerCase() === "male") {                  
    var genderQuo = 0.68;                                   
} else {
    var genderQuo = 0.55;
}

//----------------------------------------------------------------------------------------------------------------------------------------------

//var userStartH = readlineSync.question("What hour have you started drinking?: ");   // Hour started drinking
//var userStartM = readlineSync.question("What minute have you started drinking?: "); // Minute started drining

var today = new Date();                     // Euan likes to eat sh*t 
var timeNowH = today.getHours();            // 
var timeNowM = today.getMinutes();
var userStartH = time.split(':')[0];
var userStartM = time.split(':')[1];
var drinkingTimeH = timeNowH-userStartH;
var drinkingTimeM = timeNowM-userStartM;

//----------------------------------------------------------------------------------------------------------------------------------------------

var gramsDrank = 0;                         // Creating an empty variable for later

var drinkingTime = (((timeNowH-userStartH)*60)+(timeNowM-userStartM))/60;   // calculation to add the mins and hours

//----------------------------------------------------------------------------------------------------------------------------------------------

var stopLoop = false;
                               
for(var i=0; i<drinks.length;i++)
{
    gramsDrank += drinksArray[drinks[i]].alcGrams;
}
    //Loop to ask how many drinks you want to add
   
  
   var BAC = (gramsDrank/(userWeightGrams*genderQuo))*100;
        var alcoholContNow = BAC - (drinkingTime*0.015);
        var alcoholZeroTime = BAC/0.015;     
        document.getElementById("outputContainer").innerHTML = "<p> You'll be sober in " + alcoholZeroTime + " hours. </p>" +
        "<p>blood alcohol content now: "+ alcoholContNow + "</p>"+
        "<p> You've been drinking for " + drinkingTime+ " hours. </p>";                           //Calcuation to work how how long it wiil be until you're sober
        //console.log("You'll be sober in " + alcoholZeroTime + " hours.");     // Alert to tell the user how long it will be




//----------------------------------------------------------------------------------------------------------------------------------------------

//console.log("blood alcohol content now: "+ alcoholContNow);                     //Alert to tell user their alcohol level


//console.log("You've been drinking for " + drinkingTime+ " hours.");             //Alert to tell adam that he needs to pipe down and commment on his code
};