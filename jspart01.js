
document.getElementById("demo").innerHTML = "My First JavaScript";
document.getElementById("demo2").innerHTML = 5 + 6;

var x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("demo3").innerHTML =
"The value of z is " + z + ".";  


function myfunction() {
    document.getElementById("demo4").innerHTML = "ball";
      
}

var lastname,firstname;
lastname="badhon";
firstname="sarkar";
document.getElementById("demo5").innerHTML=firstname;
document.getElementById("demo5").innerHTML=firstname+" "+lastname;

function myfunction2(a,b) {
   
   return a + b;   
}
document.getElementById("demo6").innerHTML = myfunction2(123,321);

var person = {fullName:"badhon kumar sarkar.", age: "23.",gender:"male."}
document.getElementById("dem").innerHTML = "my name is "+person.fullName+" and my age is "+person.age+" and i am a "+person.gender;

function myFunction() {
    var str = "     RUN BITCH!     ";
    alert(str.trim());
  }

var j = 231;
document.getElementById("demo7").innerHTML=j.toString();

var cars = ["waltonBike", "Volvo", "BMW"];
document.getElementById("demo8").innerHTML = cars[0];
document.getElementById("demo8").innerHTML = cars.toString();

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFnction);
document.getElementById("demo9").innerHTML = txt;

function myFnction(value, index, array) {
  txt = txt + value +"<br>"; 
}


function funmath(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function myfun(){
  var age,voteable;
  age = document.getElementById("age").value;
  voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("de10").innerHTML = voteable + " to vote.";
}

if (new Date().getHours() < 18) {
  document.getElementById("demo11").innerHTML = "Good day!";
}

function myFunction2() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "bokachoda";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo12").innerHTML = greeting;
}

var day;
switch (new Date().getDay()) {
  case 0: day = "Sunday";
  break;
  case 1: day = "Monday";
  break;
  case 2: day = "Tuesday";
  break;
  case 3: day = "wednesday";
  break;
  break;
  case 4: day = "thurday";
  break;
  case 5: day = "friday";
  break;
  case 6: day = "saturday";
  break;
}
document.getElementById("demo13").innerHTML ="today is "+ day;

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo14").innerHTML = text;