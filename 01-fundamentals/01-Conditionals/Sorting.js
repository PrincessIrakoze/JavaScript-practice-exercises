let x=0;
let y=-1;
let z=4;
if(x>y && x>z && y>z){
    console.log(x+","+y+","+z);
}else if(x>y && z>x && z>y){
    console.log(z+","+x+"," +y);
}else if(y<x && y<z && z<x){
    console.log(y+", "+x+","+z);
}else if(x<y && x<z && y>z){
    console.log(y+","+z+","+x);
}else if(y>x && y>z && z<x){
    console.log(y+","+x+", "+z);
}else if(z>y && z>x && x<y){
    console.log(z+", "+y+", "+x);
}