console.log("Simple Loop\n");
for(var i=0; i<5; i++){
    console.log(i);
}
console.log("Break Loop\n");
for(var i=0; i<5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}
console.log("Continue Loop\n");
for(var i=0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}