function pop(n){
    var arr=[1,4,5,2,6,7,11,33,3];
    for(var i=0;i<=arr.length;i++){
        if(arr[i]==n){
            arr.splice(i,1);
        }
    }
  return arr;
}
var a=pop(2);
console.log(a);
