

function findPrime(...numbers) {
    
    for(let i = 0; i < numbers.length ; i++ ){
        let sayac=0
        for (let j= 2; j<=numbers[i]-1;j++){
        if(numbers[i] % j == 0 ){
            sayac++
        }
       
    }
    if(sayac == 1){
        console.log(numbers[i], "is Prime")
    }
    else{
        console.log(numbers[i], "is not prime")
    }
}
    
}

   
findPrime(2,3,34)