
function perfectNumbers(number){
 let count = 0 
 for ( let i= 1; i<number ;i++){
     if(sayi % i == 0){
     count = count+i
 }
}
if(count == number){
    console.log(number + "is perfect number")
}
else{
    return false
}
}

let j=0
for(j=1; j<= 1000 ; j++){
    perfectNumbers(j)
   
}