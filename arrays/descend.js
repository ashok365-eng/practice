function sortascend(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
    if(arr[i]<arr[j]){
       var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        }
    }
    }
    return arr;
}
var arr=[21,41,35,54,14,3];
var z=sortascend(arr);
console.log(z);