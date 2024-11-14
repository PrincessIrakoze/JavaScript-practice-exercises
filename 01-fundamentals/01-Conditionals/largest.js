let a=7;
let b=9;
if(a>b){
    console.log(a +" "+ 'is the largest number');
}
else{
    console.log(b +" "+'is the largest number');
}
//this is practice number two//
var x =10
var y =-12
var z =8
if (x>0 && y>0 && z>0){
    alert("the sign is +");
} else if (x<0 && y<0 && z<0){
    console.log(" the sign is -")
} else if (x>0 && y<0 && z<0){
    console.log ("the sign is +")
} else if (x<0 && y>0 && z<0){
    console.log("the sign is +")
} else
{console.log("the sign is -")}
// third practice
var x = 0
var y =-1
var z =4
if (x>y && x>z && y>z){
    console.log(x+","+y+","+z);
}else if(x>y && z>x && z<y){
    console.log(z+",+x+", "+y");
}else if(y<x && y<z && z<x){
    console.log(y+", "+x+","+z);
}else if (x<y && x<z && y>z){
    console.log(y+","+z+","+x);
}else if(y>x && y>z && z<x){
    console.log(y+","+x+", "+z);
}else if(z>y && z>x && x<y){
    console.log(z+", "+y+", "+x);
}