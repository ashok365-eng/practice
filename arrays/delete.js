function f1(n){
var arr=[1,4,5,2,6,7,11,33,3];
    for(var i=arr.length;i>=0;i--){
        if(arr[i]==n){
            arr.splice(i,2);
        }
    }
  return arr;
}
var a=f1(6);
console.log(a);