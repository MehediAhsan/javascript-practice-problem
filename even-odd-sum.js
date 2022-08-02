//loop 
//even and odd number check

for(var i=1; i<=20; i++){
    if(i%2==0){
        console.log("Even number : "+i);
    }
    else{
        console.log("Odd Number : "+i);
    }
}

console.log("\n\nSummation\n");
var j=1, sum=0;
while(j<=10){
    sum=sum+j;
    j++;
}
console.log(sum);