
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
numbers.forEach(myFunction);
document.getElementById("demo9").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value +"<br>"; 
}