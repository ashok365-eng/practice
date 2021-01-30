var arr=[12,2,35,7,11,13];
function primenum(arr){
    for(var i=0;i<arr.length;i++){
        var count=0;
        for( var j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
    }
    if(count==1){
        console.log("the prime number is",arr[i]);
    }
}
console.log(primenum);
primenum(arr);