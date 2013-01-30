// Week Three ---SDI--- 1301//Dustin M. Pachtinger//Start--

console.log ("Ready to get started on answering the questions to the:" + "\n"  +  '"Zombie Preparedness Plan"');

console.log ("Enter all prompted infromation.");


// How many people are traveling?
console.log ("Please enter the number of people traveling.");
var numGoing = window.prompt ("How many people are traveling?");
	if (!numGoing || numGoing === "" || !numGoing.match(/[0-9]+/) ){
		console.log ("Either you came to this page by accident, or hit the wrong button, etc.");
		alert("This question was not answered correctly!" + "\n"  + "You probably don't have time to play these games."  + "\n" + "Go back and re-answer the question!");
		var reLoadOne = window.confirm("Would you like to start over?");
			if (reLoadOne == true){
			window.location.reload();
			return;
		}else{
			window.alert("You will now be re-directed to Google." + "\n" + "Thanks for Visiting!");
			window.location = ("http://www.google.com");
	};
}
console.log (numGoing + "  Going");

// How many vehicles and their capacities.

function peopleCapacity (){
            var sum = 0;
            var vehicleGoing = [
            "Lincoln Navigator",
            "Ford F-350"
            ];
                for (var i = 0; i < 2; i++) {
                      var value = window.prompt ("How many people can we fit into the " + vehicleGoing [i] + ": ", 0);
                        sum += parseInt (value);
    if (isNaN (sum))
        break;
        }
    if (isNaN (sum) || sum == 0)
        {
            window.alert("This question was not answered correctly!" + "\n"  + "You probably don't have time to play these games."  + "\n" + "Go back and re-answer the question!");
            	var reloadTwo = window.confirm("Would you like to start over?");
            		if (reloadTwo == true){
	            			window.alert("Please re-answer the vehicle capacity question with a numerical number.");
	            				reload(peopleCapacity ());
	            				return;
            }else{
            	window.alert ("You will now be re-directed to Google's search engine.");
	            window.location = ("http://www.google.com");
	            };
    }else{
	    var totalAvailSeats = (sum - numGoing);
            console.log ("The current vehicles gives us total room for: ");
            console.log (sum + " people");
            	if (sum <= numGoing){
	            	console.log ("At this moment, we have no more room for anyone else to ride in the vehicles we have.");
            	}else{
           console.log ("Which means we have enough room for " + totalAvailSeats + " more people to ride along at this moment, should we see any along the way.");
           }
            };
}
//run people capacity
peopleCapacity ();






/*    if (isNaN (totalValue)){
    	alert("This question was not answered correctly!" + "\n" + "Go back and re-answer the question!");
    	console.log ("You are wasting time");
    	var reloadTwo = window.confirm("Would you like to re-answer the question?");
    			if (reloadTwo == true);{location.reload(peopleCapacity ());				*/
    	//		};
    	//		}


    	//		peopleCapacity ();
    		//	console.log (totalValue);
	    /*

	    				}else{
	    		window.alert("You will be re-directed to Google." + "\n" + "Thanks for Visiting!");
	    		window.location = ("http://www.google.com");



	    		  };
             }
peopleCapacity ();
console.log (totalValue + " is the total value.");



             /*
 //   }else{
            console.log ("We have enough room to take along: ");
          //  alert ("We have enough space for a total of  " + sum + " people to go along on this trip");
            console.log (sum + " people");
            var totalFit = sum;
            var subGoing = totalFit - peopleTraveling;
            console.log (subGoing + "Testicles");
 /*           	function(moreFit = true){
            		if (totalFit < peopleTraveling);
            			console.log ("We can pick up " + subGoing + " more people along the way, if we see anyone else.");
            			}else{
	            		console.log ("There is no more room in either vehicle to pick people up along the way.");
	            		console.log ("If you find another vehicle and adult driver, that changes things.");
    };
    if function(moreFit == true){
    	return subGoing;
 */
//};
//}
//var totalGoing = subGoing ();
//};

//console.log ("We are leaving the house with " + peopleTraveling + " of us traveling along.");




//var roomLeft =
//console.log ("That leaves us with room for " + roomLeft + " people give or take depending on stuff, that we can pick up along the way should we see any.");

/*
var vehicleOneCapcity = window.prompt("How many people can fit into the " + vehicleOne + "?");
console.log ("There are two vehicles going on this trip.")

var vehiclesTraveling= window.prompt("How many vehicles going on this trip")

function DoAdd (){
            var sum = 0;
            var gunSelect = [ "handguns", "shotguns", "rifles", "BB Guns"];
                for (var i = 0; i < 4; i++) {
                      var value = prompt ("Enter total amount of " + gunSelect [i] + " we counted : ", 0);
                        sum += parseInt (value);
    if (isNaN (sum))
        break;
        }
    if (isNaN (sum))
        {
            alert ("There is no need to continue on this page. Thank you. You will now be redirected to GOOGLE search.");
            window.location="http://www.google.com"

    }else{
            console.log ("How many guns did we count totally?: ");

            alert ("Total Available Guns = " + sum);
            return sum;
            };
}
console.log (DoAdd ());

// Try to do a code that




// How many vehicles are going and the carry limit.

console.log ("Please enter the number of people traveling.");
function DoAdd (){
            var sum = 0;
            var gunSelect = [ "handguns", "shotguns", "rifles", "BB Guns"];
                for (var i = 0; i < 4; i++) {
                      var value = prompt ("Enter total amount of " + gunSelect [i] + " we counted : ", 0);
                        sum += parseInt (value);
    if (isNaN (sum))
        break;
        }
    if (isNaN (sum))
        {
            alert ("There is no need to continue on this page. Thank you. You will now be redirected to GOOGLE search.");
            window.location="http://www.google.com"

    }else{
            console.log ("How many guns did we count totally?: ");

            alert ("Total Available Guns = " + sum);
            return sum;
            };
}
console.log (DoAdd ());
*/
/*
//Method Procedure:  Guns we are taking.
console.log ("We decided to count all the guns we had for the trip.");
function DoAdd (){
            var sum = 0;
            var gunSelect = [ "handguns", "shotguns", "rifles", "BB Guns"];
                for (var i = 0; i < 4; i++) {
                      var value = prompt ("Enter total amount of " + gunSelect [i] + " we counted : ", 0);
                        sum += parseInt (value);
    if (isNaN (sum))
        break;
        }
    if (isNaN (sum))
        {
            alert ("There is no need to continue on this page. Thank you. You will now be redirected to GOOGLE search.");
            window.location="http://www.google.com"

    }else{
            console.log ("How many guns did we count totally?: ");

            alert ("Total Available Guns = " + sum);
            return sum;
            };
}
console.log (DoAdd ());


*/