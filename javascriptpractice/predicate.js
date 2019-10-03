let predicate = function(x) {
    return x % 2 == 0
}

let filter = function(arr, pred) {
    if(arr.length==0) {
        return []
    } else if (pred(arr[0])){
        return[arr[0]].concat(filter(arr.slice(1)))
        else{}
        return filer(arr.slice(1);
    }


let arr = [1, 3, 5, 2, 4]

    }


console.log(filter(arr,predicate))