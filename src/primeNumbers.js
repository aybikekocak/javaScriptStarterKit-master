

let i,j,k

for(i=2;i<=1000;i++){
    k=1
    for(j=2;j<i;j++){
        if(i%j == 0){
            k=0;
        }
        if(k==1){
            console.log(i)
        }
    }
}