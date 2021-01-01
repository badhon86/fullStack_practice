
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
   
   return a+b;   
}
document.getElementById("demo6").innerHTML = myfunction2(a,b);