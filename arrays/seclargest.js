function second(arr){
    for(var i=0; i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(a[i]>=a[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
var arr=[21,32,45,85,96,56];
var a =second(arr);
console.log(a);