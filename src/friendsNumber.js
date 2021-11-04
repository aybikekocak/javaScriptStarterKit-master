function friendsNumber(number1,number2) {
    let count1=0
    let count2 = 0
    for(let i = 0; i<number1;i++)
    {
        if(number1 % i == 0){
            count1 = count1 + i
        }
    }

    for(let j=0 ; j< number2 ; j++){
        if(number2 % j == 0 ){
            count2 = count2 +j;
        }
    }

    if(number1 == count2 && number2 == count1){
        console.log(number1 +"and"+ number2 +" are friends number" )
    }
    else {
        console.log(number1 +"and"+ number2 +" are NOT friends number")
    }

    
}
friendsNumber(220,284)