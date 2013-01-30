// Dustin M. Pachtinger
// SDI 1301
// Project/Activity 3
// I am learning how to create my first JavaScript!

// My variables
var weStayHome = ("The coin toss helped us to decide on staying in the area");
var weLeave = ("Thanks to the luck of our coin toss and general knowledge, the decsion is that our best chance is to leave our home");
var moa = ("Mall of America");
var quaterFlipHeads = (true);
var quaterFlipTales = (true);

// The Begining:
console.log ("--TO THE FUTURE OF THE HUMAN RACE--");
console.log ("Today marks the begining of it all: ");

var d_names = new Array("Sunday", "Monday", "Tuesday",
"Wednesday", "Thursday", "Friday", "Saturday");

var m_names = new Array("January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "December");

var d = new Date();
var curr_day = d.getDay();
var curr_date = d.getDate();
var sup = "";
if (curr_date == 1 || curr_date == 21 || curr_date ==31)
   {sup = "st";}
else if (curr_date == 2 || curr_date == 22)
   {sup = "nd";}
else if (curr_date == 3 || curr_date == 23)
   {sup = "rd";}
else
   {sup = "th";}
var curr_month = d.getMonth();
var curr_year = d.getFullYear();

console.log (d_names[curr_day] + " the " + curr_date + sup + " of " + m_names[curr_month] + ", " + curr_year);

var d = new Date();

console.log ("It's the begining of our survival!" + "\n");

console.log ('The "Zombie Apocalypse" is upon us all now!');
console.log ("The family must decide, should we leave our home or stay and look for a bigger home?");
console.log ("After a lot of thought, consideration and a coin toss, we came up with a plan." + "\n");

console.log ("First we decide to check the weather for our travels:");

//weahter confirmation

window.confirm("Better check the weather!");
var weatherCheck = confirm ("Is the weather okay to travel?");
	if (weatherCheck == true)

	{
		console.log ("--As it turns out the weather is great for the trip, so when the time is right, we better get moving!" + "\n");
		console.log ("Our next step is to do a coin toss and decide whether we are going to look for a mansion to live in or go to the Mall of America.");
			window.confirm("Lets flip this coin to see where we go!");
			var quarterFlip = confirm ('Click "OK" for heads, and "Cancel" for tales.');
					if (quarterFlip == true)
					console.log (weLeave + " and head for " + moa + "!" + "\n");
					if (quarterFlip == false)
					console.log (weStayHome + " and look for a mansion to live in." + "\n");
	}else{
		console.log ("--We decided that we better wait till it's safe to travel in better weather.");
		console.log ("  It turns out the weather is not permitting, so we must hope for a better day tomorrow!" + "\n");
		console.log ("Everyday is like an eternity of waiting in this zombie hell!");
		console.log ("The weather better be right tomorrow, or we might all die!" + "\n");
}

if (weatherCheck == true){
		console.log ("We have decided that it is safer to travel at night.");
		console.log ("Even though it is harder for us at night to see the undead, it also means it is harder for them to see us!");
		console.log ("Let's check the time and determine whether or not it is safe to travel yet." + "\n");
		var curr_hour = d.getHours();
		var curr_min = d.getMinutes();
		var currentTime = (curr_hour + ":" + curr_min);
			alert ("The time is: " + currentTime + "!");
				if (curr_hour >= 20)
				console.log ("With the time being " + currentTime + ", it appears the time is right for a nightly departure." + " Everything else has checked out too, which means it is time to go!");
				if (curr_hour <= 19)
				console.log ("As the clock is showing " + currentTime + ", we know we must try and calm our nerves and continue to wait until it is dark in order to safely travel." + " We know that as soon as the darkness hits though, we must leave right away!" + "\n");
				console.log ('As we sit here waiting and hiding, we cannot help but to think, "Is there any hope for the human race?"' + "\n");

};
console.log ("It is time we sat down amongst all of our stock to divide it for the trip." + "\n");


var gunTypes = [
	"Shotgun",
	"Rifle",
	"Handgun",
	"BB Gun"
];

var gunNames = [
	"12 Gauge",
	"30-06 High Powered Rifile",
	"9mm",
	"Crosman 760 Pumpmaster"
];

var ammoAmounts = [
	50,
	60,
	50,
	10
];

var howManyGuns = [
	2,
	2,
	5,
	2
];
	console.log ( "We have " + gunTypes.length + " Types of guns to bring along.");
	console.log ("We made a list of the types of guns, their names, and how much ammunition we have rigth now for each weapon:");
	for (var i = 0, j = gunTypes.length; i < j; i++) {
		console.log ( "Our " + gunTypes[i] + " is a " + gunNames[i] + " with " + ammoAmounts[i] + " boxes of ammunition.");
		console.log ("We have " + howManyGuns[i] + " total " + gunTypes[i] + "s.");
}

var amountInEachBox = [
	25,
	20,
	100,
	1000
];

var shotgunAmmo = 50 * 25;
var rifleAmmo = 60 * 20;
var handgunAmmo = 50 * 100;
var bbAmmo	= 10 * 1000;

var totalRounds = [
	shotgunAmmo,
	rifleAmmo,
	handgunAmmo,
	bbAmmo
];

var totalAmmo = [shotgunAmmo + rifleAmmo + handgunAmmo + bbAmmo];


console.log ("\n" + "Which means:");
console.log ("--Each weapons ammunition boxes contain a different amount of ammunition per box--");
	for (var i = 0, k = amountInEachBox.length; i < k; i++){
		console.log (" There are " + ammoAmounts[i] + " boxes of " + gunTypes[i] + " ammunition, and each box has " + amountInEachBox[i] + " rounds, that makes the total amount of ammunition for this weapon " + totalRounds[i] + " rounds.");
}

console.log ("-----This means that our total amount of ammunition for all weapons is: " + totalAmmo + " Rounds!" + "\n");



// For new assignment



//confirm box

var x=window.confirm("Should we count the ammunition?")
if (x)

console.log ("Let's get started then!")
else

console.log ("Alrighty then, moving along")



//input box

var y=window.prompt("Please Enter Your Name")
console.log (y)


//website call

var stay=confirm("Click okay to go to yahoo")
if (stay) //(!stay) will make it not go to yahoo.
window.location="http://www.yahoo.com"

//should open new window to google

   var winFB;
        var winTWt;
        var counterFB = 0;
        var counterTWT = 0;
        var timerFB;
        function openFB() {

            if (counterFB == 0) {
                winFB = window.open("http://www.google.com");
                counterFB = 1;
            }
            if (counterFB > 0) {
                alert(winFB);
                if (winFB == null) {
                    counterFB = 0;
                    clearTimeout(timerFB);
                    alert("Window Closed");
                }
            }
          timerFB= setTimeout("openFB()", 1000);
        }


// Function Returns a Value
var a = 5;
var b = 2;
function myFunction(a,b)
{
return a*b;
}

// A loop of some kind
function myFunction()
{
var x;
var txt="";
var person={fname:"John",lname:"Doe",age:25};

for (x in person)
{
txt=txt + person[x];
}

document.getElementById("demo").innerHTML=txt;
}

// Does a loop with a break/skip in code

function myFunction()
{
var x="",i=0;
for (i=0;i<10;i++)
  {
  if (i==3)
    {
    continue;
    }
  x=x + "The number is " + i + "<br>";
  }
document.getElementById("demo").innerHTML=x;
}

//Prompt box function

function myFunction()
{
var x;
var r=confirm("Press a button!");
if (r==true)
  {
  x="You pressed OK!";
  }
else
  {
  x="You pressed Cancel!";
  }
document.getElementById("demo").innerHTML=x;
}



//reload page

function confirmRefresh() {
var okToRefresh = confirm("Do you really want to refresh the page?");
if (okToRefresh)
	{
			setTimeout("location.reload(true);",1500);
	}
}
