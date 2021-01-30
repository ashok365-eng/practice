var arr=[1,2,3,2,5,1];
function nonrepeated(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                var a=arr[i];
            }
        }
        if(a!=arr[i]){
            console.log("nonrepeated number is;",arr[i])
        }
    }
}
console.log(nonrepeated);
nonrepeated(arr);