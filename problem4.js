var a=7, b=5, c=7;

if(a==b && b!=c && c!=a){
    console.log("Isosceles");
}
else if(b==c && a!=b && c!=a){
    console.log("Isosceles");
}
else if(c==a && b!=c && a!=b){
    console.log("Isosceles");
}
else{
    console.log("Not Isosceles");
}