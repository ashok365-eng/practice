var arr=[1,2,3,2,5,1];
function duplicate(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                var a=arr[i];
                console.log("the duplicate number is;",a);
            }
        }
    }
}
console.log(duplicate);
duplicate(arr);