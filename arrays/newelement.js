function insert(element,index){
    var arr=[12,21,52,13,4,5];
    for(var i=0; i<=arr.length;i++){
    if(index==i){
        for(var j=arr.length;j>=i;j--){
        arr[j]=arr[j-1];
    }
    arr[i]=element;
    console.log(arr);
}
    }
}
insert(25,5);