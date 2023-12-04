document.write ("hello world");

function saySomething () {
    alert ("this is a function");
}

saySomething ();

function addSomething (num,str) {
    var add = (num + str);
    alert (add);
}

addSomething (455, " programs to write");

var number1 = 9;
var number2 = 7;

var number1 = number1 + number2;
number1++;

document.write (number1);

var food = "Meat";

if (food === "Apple") {

    alert ("we ate fruit, specifically apple");
}

else if (food === "Meat") {

    alert ("we ate meat");
}

else {
    
    alert ("we did not eat fruit");
}

var i = 1;

while (i < 5 ) {
    document.write ("A statement has run");
    i++;
}

function batting (player, distance){

    if (distance <= 350) {
        document.write (player + "hit the ball");
    }

    else if (distance <= 0) {
        document.write (player + "STRUCK OUT");
    }

    else {
        document.write (player + "hit a home run");
    }
}

batting ("steve", 0);

function add(x,y) {

    result = x * y;
    return result;
}

var theResult = add(6,5);
document.write (theResult);

var todayDate = new Date ();
var useString = todayDate.toDateString ();

document.write (useString);  
